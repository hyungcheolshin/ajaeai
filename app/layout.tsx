/**
 * 공통 레이아웃: 메타 태그, 기본 스타일, 시스템 폰트
 */
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "공공 AX·클라우드·AI 컨설팅 | 무료 30분 상담",
  description:
    "공공기관 AX·클라우드 MSP·AI 도입 전략 컨설팅. 공공 클라우드, AI 챗봇, 업무자동화 기획·아키텍처·구축 전략을 한 번에 설계합니다.",
  openGraph: {
    title: "공공 AX·클라우드·AI 컨설팅 | 무료 30분 상담",
    description:
      "공공기관 AX·클라우드 MSP·AI 도입 전략 컨설팅. 무료 상담 신청 가능.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased font-sans text-slate-900 bg-slate-50/50">
        {children}
      </body>
    </html>
  );
}
