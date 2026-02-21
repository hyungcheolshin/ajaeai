/**
 * PainPointsSection: 공공기관·기업 담당자의 페인포인트 나열
 */
import { FC } from "react";
import { HelpCircle } from "lucide-react";

const painPoints = [
  "AI/챗봇 도입은 필요해 보이지만 어디서부터 시작해야 할지 모르겠다",
  "클라우드 전환이 필요한 건 아는데 보안·인증·심사 대응이 막막하다",
  "외주사마다 말이 달라 누구 말을 믿어야 할지 애매하다",
  "내부 결재·보고에 쓸 자료·전략 문서가 부족하다",
  "기존 온프레미스와 클라우드 병행 전략이 복잡하다",
  "정부지원사업·RFP 작성 시 무엇을 요청해야 할지 감이 안 잡힌다",
];

export const PainPointsSection: FC = () => {
  return (
    <section className="bg-slate-50/50 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="mb-3 text-center text-sm font-medium uppercase tracking-wider text-slate-500">
          Pain Points
        </p>
        <h2 className="mb-14 text-center text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          이런 고민이 있으신가요?
        </h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {painPoints.map((text) => (
            <div
              key={text}
              className="group flex items-start gap-4 rounded-xl border border-slate-200/80 bg-white p-6 shadow-sm transition hover:border-slate-300 hover:shadow-md"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-500 transition group-hover:bg-slate-900 group-hover:text-white">
                <HelpCircle className="h-5 w-5" />
              </span>
              <p className="pt-0.5 text-slate-700 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
