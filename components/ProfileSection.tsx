/**
 * ProfileSection: 대표자(컨설턴트) 프로필 및 신뢰 메시지
 */
import { FC } from "react";
import { UserCheck, Quote } from "lucide-react";

export const ProfileSection: FC = () => {
  return (
    <section className="bg-slate-50/50 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="mb-3 text-center text-sm font-medium uppercase tracking-wider text-slate-500">
          Why Us
        </p>
        <h2 className="mb-14 text-center text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          왜 우리가 적합한 파트너인가요?
        </h2>
        <div className="mx-auto max-w-3xl space-y-6">
          <div className="flex items-start gap-6 rounded-2xl border border-slate-200/80 bg-white p-8 shadow-sm">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-white">
              <UserCheck className="h-7 w-7" />
            </span>
            <div>
              <h3 className="mb-3 font-semibold text-slate-900">
                공공기관·클라우드 MSP·AI 프로젝트 경험
              </h3>
              <p className="leading-relaxed text-slate-600">
                공공기관 DX 프로젝트, 클라우드 마이그레이션, AI 챗봇 도입 등
                다수의 프로젝트 수행 경험이 있습니다. 정부지원사업 심사·RFP
                대응, 멀티 CSP 전략 수립까지 실무 중심으로 컨설팅합니다.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-6 rounded-2xl border border-slate-200/80 bg-white p-8 shadow-sm">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
              <Quote className="h-7 w-7" />
            </span>
            <div>
              <p className="text-lg font-medium italic leading-relaxed text-slate-700">
                공공기관 담당자의 입장에서, 어떻게 보고서와 사업을 만들어가야
                하는지까지 같이 고민합니다.
              </p>
              <p className="mt-4 text-sm text-slate-500">
                내부 결재·보고용 자료 부족, 외주사 의견 혼선 등 현장의 고민을
                이해하고, 실행 가능한 방안을 함께 설계합니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
