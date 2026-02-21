/**
 * SolutionsSection: 제공 솔루션 3~4개 카드
 */
import { FC } from "react";
import { BarChart3, CloudCog, Bot, FileSearch } from "lucide-react";

const solutions = [
  {
    icon: BarChart3,
    title: "공공 AX/AI 도입 전략 컨설팅",
    description:
      "현황 분석부터 로드맵 수립까지, 실무에 바로 적용 가능한 전략을 제시합니다.",
    result: "내부 보고용 문서까지 한 번에 준비",
  },
  {
    icon: CloudCog,
    title: "공공 클라우드 MSP·멀티 CSP 전략 수립",
    description:
      "NAVER Cloud, AWS, Azure 등 멀티 클라우드 환경 설계 및 운영 전략을 수립합니다.",
    result: "보안·인증·심사 대응 가이드 제공",
  },
  {
    icon: Bot,
    title: "RAG 기반 AI 챗봇·업무자동화 설계",
    description:
      "RAG, 프롬프트 엔지니어링을 활용한 AI 챗봇 및 업무자동화 아키텍처를 설계합니다.",
    result: "PoC부터 상용화까지 단계별 로드맵",
  },
  {
    icon: FileSearch,
    title: "정부지원사업·RFP 대응 자문",
    description:
      "지원사업 공고 분석, 제안서 구조화, 예산·일정 설계를 함께 검토합니다.",
    result: "제안서 품질 향상 및 합격률 제고",
  },
];

export const SolutionsSection: FC = () => {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="mb-3 text-center text-sm font-medium uppercase tracking-wider text-slate-500">
          Solutions
        </p>
        <h2 className="mb-14 text-center text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          우리가 제공하는 솔루션
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {solutions.map(({ icon: Icon, title, description, result }) => (
            <div
              key={title}
              className="group rounded-2xl border border-slate-200/80 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-slate-900 text-white shadow-sm transition group-hover:shadow-md">
                <Icon className="h-7 w-7" />
              </div>
              <h3 className="mb-3 text-lg font-semibold text-slate-900">
                {title}
              </h3>
              <p className="mb-5 text-slate-600 leading-relaxed">{description}</p>
              <p className="inline-flex items-center gap-2 rounded-lg bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-700">
                <span className="text-slate-400">✓</span> {result}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
