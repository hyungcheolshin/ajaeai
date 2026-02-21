/**
 * ProcessSection: 진행 방식 4단계 타임라인
 */
import { FC } from "react";
import {
  MessageSquare,
  ClipboardList,
  Handshake,
  FileSignature,
} from "lucide-react";

const steps = [
  { icon: MessageSquare, title: "무료 상담 신청", desc: "아래 폼을 통해 요구사항을 간단히 남겨주세요." },
  { icon: ClipboardList, title: "요구사항 정리 & 현황 파악", desc: "화상/전화로 현재 상황과 목표를 함께 정리합니다." },
  { icon: Handshake, title: "제안 및 범위 협의", desc: "적합한 패키지와 일정·예산을 제안드립니다." },
  { icon: FileSignature, title: "계약 및 프로젝트 수행", desc: "계약 후 본격적으로 컨설팅을 진행합니다." },
];

export const ProcessSection: FC = () => {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="mb-3 text-center text-sm font-medium uppercase tracking-wider text-slate-500">
          Process
        </p>
        <h2 className="mb-16 text-center text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          진행 방식
        </h2>
        <div className="relative">
          <div className="absolute left-1/2 top-10 hidden h-0.5 w-[calc(100%-8rem)] -translate-x-1/2 bg-gradient-to-r from-transparent via-slate-200 to-transparent lg:block" />
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(({ icon: Icon, title, desc }, i) => (
              <div key={title} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="relative z-10 mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-slate-900 text-white shadow-lg shadow-slate-900/20 ring-4 ring-white">
                    <Icon className="h-7 w-7" />
                  </div>
                  <span className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Step {i + 1}
                  </span>
                  <h3 className="mb-2 font-semibold text-slate-900">{title}</h3>
                  <p className="text-sm leading-relaxed text-slate-600">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
