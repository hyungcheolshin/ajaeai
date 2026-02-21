/**
 * ContactSection: 무료 30분 상담 신청 폼
 * /api/contact POST 제출, 성공 시 알림 표시
 */
"use client";

import { FC, useState, FormEvent } from "react";
import { CheckCircle } from "lucide-react";
import type { ContactFormData } from "@/types/contact";

const INTEREST_OPTIONS = [
  "공공 AX/AI 전략",
  "클라우드 MSP/운영",
  "AI 챗봇/업무자동화",
  "정부지원사업/RFP 대응",
] as const;

export const ContactSection: FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const interests: string[] = [];
    INTEREST_OPTIONS.forEach((opt) => {
      if (formData.get(`interest-${opt}`)) interests.push(opt);
    });

    const data: ContactFormData = {
      organization: formData.get("organization") as string,
      department: (formData.get("department") as string) || undefined,
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      interests,
      concern: formData.get("concern") as string,
      consultationMethod: formData.get("consultationMethod") as
        | "온라인"
        | "오프라인"
        | "이메일",
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!json.success) throw new Error(json.error || "제출에 실패했습니다.");
      setSubmitted(true);
      form.reset();
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "제출 중 오류가 발생했습니다."
      );
    } finally {
      setLoading(false);
    }
  };

  const closePopup = () => setSubmitted(false);

  return (
    <>
      {submitted && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="popup-title"
          onClick={closePopup}
        >
          <div
            className="w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-green-600">
              <CheckCircle className="h-8 w-8" />
            </div>
            <h3 id="popup-title" className="mb-2 text-xl font-semibold text-slate-900">
              상담 신청완료
            </h3>
            <p className="mb-8 text-slate-600">
              상담 신청이 접수되었습니다. 1~2영업일 내에 메일로 연락드리겠습니다.
            </p>
            <button
              type="button"
              onClick={closePopup}
              className="w-full rounded-full bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              확인
            </button>
          </div>
        </div>
      )}
      <section id="contact" className="relative overflow-hidden bg-slate-50/50 py-20 md:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-transparent" />
      <div className="relative mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <p className="mb-3 text-center text-sm font-medium uppercase tracking-wider text-slate-500">
          Contact
        </p>
        <h2 className="mb-4 text-center text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          무료 30분 상담을 신청하세요
        </h2>
        <p className="mb-12 text-center text-slate-600">
          현재 상황을 간단히 남겨주시면, 공공 AX·클라우드·AI 도입 방향을 함께
          설계해드립니다.
        </p>

        {error && (
          <div className="mb-8 rounded-xl border border-red-200 bg-red-50 p-4 text-center font-medium text-red-800">
            {error}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="space-y-6 rounded-2xl border border-slate-200/80 bg-white p-8 shadow-lg shadow-slate-200/50 sm:p-10"
        >
          <div>
            <label
              htmlFor="organization"
              className="mb-1 block text-sm font-medium text-slate-700"
            >
              기관/회사명 <span className="text-red-500">*</span>
            </label>
            <input
              id="organization"
              name="organization"
              type="text"
              required
              className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/20"
            />
          </div>

          <div>
            <label
              htmlFor="department"
              className="mb-1 block text-sm font-medium text-slate-700"
            >
              부서/직함
            </label>
            <input
              id="department"
              name="department"
              type="text"
              className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/20"
            />
          </div>

          <div>
            <label
              htmlFor="name"
              className="mb-1 block text-sm font-medium text-slate-700"
            >
              성함 <span className="text-red-500">*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/20"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-1 block text-sm font-medium text-slate-700"
            >
              이메일 <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/20"
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="mb-1 block text-sm font-medium text-slate-700"
            >
              연락처 <span className="text-red-500">*</span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/20"
            />
          </div>

          <div>
            <span className="mb-2 block text-sm font-medium text-zinc-700">
              관심 분야
            </span>
            <div className="flex flex-wrap gap-4">
              {INTEREST_OPTIONS.map((opt) => (
                <label
                  key={opt}
                  className="flex cursor-pointer items-center gap-2"
                >
                  <input
                    type="checkbox"
                    name={`interest-${opt}`}
                    className="rounded border-slate-300"
                  />
                  <span className="text-sm text-slate-700">{opt}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label
              htmlFor="concern"
              className="mb-1 block text-sm font-medium text-slate-700"
            >
              현재 고민/상황
            </label>
            <textarea
              id="concern"
              name="concern"
              rows={4}
              className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/20"
              placeholder="현재 상황이나 고민을 간단히 적어주세요."
            />
          </div>

          <div>
            <label
              htmlFor="consultationMethod"
              className="mb-1 block text-sm font-medium text-slate-700"
            >
              상담 희망 방식
            </label>
            <select
              id="consultationMethod"
              name="consultationMethod"
              className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/20"
            >
              <option value="온라인">온라인</option>
              <option value="오프라인">오프라인</option>
              <option value="이메일">이메일</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-full bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-slate-900/20 transition hover:bg-slate-800 hover:shadow-xl disabled:opacity-70"
          >
            {loading ? "제출 중..." : "상담 신청하기"}
          </button>
        </form>
      </div>
    </section>
    </>
  );
};
