/**
 * PackagesSection: 컨설팅 패키지 3종 (Lite / AX·AI / MSP)
 */
import { FC } from "react";
import { Package } from "lucide-react";

const packages: Array<{
  name: string;
  target: string;
  content: string[];
  period: string;
  format: string;
  featured?: boolean;
}> = [
  {
    name: "Lite 진단",
    target: "도입 검토 단계",
    content: [
      "현황·요구사항 간단 정리",
      "AX·클라우드·AI 도입 방향성 점검",
      "1~2주 단기 진단",
    ],
    period: "1~2주",
    format: "워크숍·화상 미팅",
  },
  {
    name: "AX·AI 전략",
    target: "전략 수립 필요 시",
    content: [
      "비전·로드맵 수립",
      "아키텍처·기술 선정",
      "내부 보고용 전략 문서 산출",
    ],
    period: "4~8주",
    format: "문서 산출 + 워크숍",
    featured: true,
  },
  {
    name: "클라우드 MSP·운영",
    target: "운영·멀티 CSP 전략 필요 시",
    content: [
      "MSP 전략·운영 모델 설계",
      "보안·인증 대응 가이드",
      "CSP 선정·계약 자문",
    ],
    period: "4~12주",
    format: "전략 문서 + 운영 가이드",
  },
];

export const PackagesSection: FC = () => {
  return (
    <section className="bg-slate-50/50 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="mb-3 text-center text-sm font-medium uppercase tracking-wider text-slate-500">
          Packages
        </p>
        <h2 className="mb-14 text-center text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          컨설팅 패키지
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`flex flex-col rounded-2xl border bg-white p-7 shadow-sm transition hover:shadow-md ${
                pkg.featured
                  ? "border-slate-900/20 ring-2 ring-slate-900/5"
                  : "border-slate-200/80"
              }`}
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
                  <Package className="h-5 w-5" />
                </span>
                <h3 className="text-lg font-semibold text-slate-900">
                  {pkg.name}
                </h3>
              </div>
              <p className="mb-5 text-sm font-medium text-slate-500">
                대상: {pkg.target}
              </p>
              <ul className="mb-6 flex-1 space-y-3 text-sm text-slate-700">
                {pkg.content.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-slate-400" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-auto space-y-1 border-t border-slate-200 pt-5">
                <p className="text-sm text-slate-600">
                  <span className="font-medium text-slate-800">기간</span>{" "}
                  {pkg.period}
                </p>
                <p className="text-sm text-slate-600">
                  <span className="font-medium text-slate-800">제공 형태</span>{" "}
                  {pkg.format}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
