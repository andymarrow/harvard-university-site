import AboutHero from "./_components/AboutHero";
import TheManifesto from "./_components/TheManifesto";
import ExecutiveTeam from "./_components/ExecutiveTeam";
import Certifications from "./_components/Certifications";
import CtaSection from "../_components/CtaSection";

export default function AboutPage() {
  return (
    <main className="bg-stone-50 dark:bg-neutral-950 min-h-screen selection:bg-krimson selection:text-white transition-colors duration-300">
      <AboutHero />
      
      <TheManifesto />
      
      <ExecutiveTeam />
      
      <Certifications />
      
      <CtaSection />
    </main>
  );
}