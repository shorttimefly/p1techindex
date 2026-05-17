import { AgentServiceSection } from "@/components/home/AgentServiceSection";
import { ArchitectureSection } from "@/components/home/ArchitectureSection";
import { CTASection } from "@/components/home/CTASection";
import { Footer } from "@/components/home/Footer";
import { Header } from "@/components/home/Header";
import { HeroSection } from "@/components/home/HeroSection";
import { ImplementationSection } from "@/components/home/ImplementationSection";
import { ProductMatrixSection } from "@/components/home/ProductMatrixSection";
import { SecuritySection } from "@/components/home/SecuritySection";
import { SolutionSection } from "@/components/home/SolutionSection";
import { TeamSection } from "@/components/home/TeamSection";

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050B1E] text-[#F4F8FF]">
      <Header />
      <HeroSection />
      <ArchitectureSection />
      <ProductMatrixSection />
      <AgentServiceSection />
      <SolutionSection />
      <SecuritySection />
      <ImplementationSection />
      <TeamSection />
      <CTASection />
      <Footer />
    </main>
  );
}
