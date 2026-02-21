/**
 * 랜딩페이지 메인: 8개 섹션 조합
 * 공공 AX·클라우드 MSP·AI 컨설팅 문의 페이지
 */
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { PainPointsSection } from "@/components/PainPointsSection";
import { SolutionsSection } from "@/components/SolutionsSection";
import { PackagesSection } from "@/components/PackagesSection";
import { ProcessSection } from "@/components/ProcessSection";
import { ProfileSection } from "@/components/ProfileSection";
import { FaqSection } from "@/components/FaqSection";
import { ContactSection } from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <div className="section-divider" aria-hidden />
        <PainPointsSection />
        <SolutionsSection />
        <PackagesSection />
        <ProcessSection />
        <ProfileSection />
        <FaqSection />
        <ContactSection />
      </main>
    </div>
  );
}
