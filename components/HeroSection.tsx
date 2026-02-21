/**
 * HeroSection: 메인 히어로 영역
 * 헤드라인, 핵심 포인트, CTA 버튼, 상담 안내 카드
 */
"use client";

import { FC } from "react";
import {
  Building2,
  Cloud,
  FileCheck,
  MessageCircle,
  FileText,
} from "lucide-react";

export const HeroSection: FC = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const keyPoints = [
    { icon: Building2, text: "공공기관 프로젝트 경험" },
    { icon: Cloud, text: "클라우드 MSP + AI + 보안 통합 분야" },
    { icon: FileCheck, text: "정부지원사업·RFP 대응" },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50/30 to-white pt-24 pb-20 md:pt-32 md:pb-28">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-100/50 via-transparent to-transparent" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="space-y-10">
            <h1 className="text-3xl font-bold leading-[1.2] tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
              공공기관 AX·클라우드·AI 도입,{" "}
              <span className="text-slate-700">실패 없이</span> 시작할 수 있게
              돕습니다.
            </h1>
            <p className="text-lg text-slate-600 md:text-xl leading-relaxed">
              공공 클라우드 MSP·AI 챗봇·업무자동화까지 기획·아키텍처·구축
              전략을 한 번에 컨설팅합니다.
            </p>
            <ul className="space-y-5">
              {keyPoints.map(({ icon: Icon, text }) => (
                <li
                  key={text}
                  className="flex items-center gap-4 transition hover:translate-x-1"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-white shadow-sm">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-slate-700 font-medium">{text}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={scrollToContact}
                className="rounded-full bg-slate-900 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-slate-900/20 transition hover:bg-slate-800 hover:shadow-xl hover:shadow-slate-900/25"
              >
                무료 30분 상담 신청하기
              </button>
              <button
                onClick={scrollToContact}
                className="rounded-full border border-slate-300 bg-white px-7 py-3.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-slate-400 hover:bg-slate-50"
              >
                제안서·자료 요청하기
              </button>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-full rounded-2xl border border-slate-200/80 bg-white/80 p-8 shadow-xl shadow-slate-200/50 backdrop-blur-sm">
              <div className="flex items-center gap-2.5 text-slate-800">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100">
                  <MessageCircle className="h-5 w-5 text-slate-600" />
                </span>
                <span className="font-semibold">상담 안내</span>
              </div>
              <p className="mt-5 text-slate-600 leading-relaxed">
                지금 상담을 신청하시면, 현재 상황에 맞는 AX·클라우드·AI 도입
                방향을 30분 안에 가이드합니다.
              </p>
              <div className="mt-5 flex items-center gap-2.5 rounded-lg bg-slate-50/80 px-4 py-3 text-sm text-slate-600">
                <FileText className="h-4 w-4 shrink-0 text-slate-500" />
                <span>내부 보고용 자료까지 함께 준비해 드립니다.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
