/**
 * FaqSection: 자주 묻는 질문 아코디언
 */
"use client";

import { FC, useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "예산이 정해지지 않은 상태에서도 상담 가능한가요?",
    a: "네. 무료 30분 상담은 예산·범위와 상관없이 신청하실 수 있습니다. 현황을 파악한 뒤 적정 예산과 패키지를 제안드립니다.",
  },
  {
    q: "PoC(파일럿)부터 진행해볼 수 있나요?",
    a: "네. AX·AI 도입의 경우 PoC 단계부터 설계·진행 지원이 가능합니다. 규모에 맞는 파일럿 계획을 함께 수립해 드립니다.",
  },
  {
    q: "내부 보고용 자료도 같이 만들어주시나요?",
    a: "네. 전략 컨설팅 패키지에는 내부 보고용 전략 문서, 로드맵, 아키텍처 다이어그램 등을 포함해 산출물을 제공합니다.",
  },
  {
    q: "기존 온프레미스 시스템과 병행 운영 전략도 자문 가능한가요?",
    a: "네. 하이브리드 클라우드, 온프레미스·클라우드 병행 전략, 단계적 마이그레이션 계획 등에 대한 자문이 가능합니다.",
  },
  {
    q: "상담은 온라인으로만 가능한가요?",
    a: "온라인(화상), 오프라인, 이메일 상담 모두 가능합니다. 폼에서 희망 방식을 선택해 주시면 그에 맞춰 안내드립니다.",
  },
];

export const FaqSection: FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <p className="mb-3 text-center text-sm font-medium uppercase tracking-wider text-slate-500">
          FAQ
        </p>
        <h2 className="mb-14 text-center text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          자주 묻는 질문
        </h2>
        <div className="space-y-3">
          {faqs.map(({ q, a }, i) => (
            <div
              key={q}
              className={`overflow-hidden rounded-xl border transition ${
                openIndex === i
                  ? "border-slate-300 shadow-md"
                  : "border-slate-200/80 hover:border-slate-300"
              }`}
            >
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 bg-white px-6 py-4 text-left font-medium text-slate-900 transition hover:bg-slate-50/50"
              >
                <span className="text-left">{q}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-slate-400 transition duration-200 ${
                    openIndex === i ? "rotate-180 text-slate-600" : ""
                  }`}
                />
              </button>
              {openIndex === i && (
                <div className="border-t border-slate-200 bg-slate-50/50 px-6 py-4">
                  <p className="leading-relaxed text-slate-600">{a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
