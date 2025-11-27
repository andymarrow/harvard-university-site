import ContactHero from "./_components/ContactHero";
import LocationCards from "./_components/LocationCards";
import ContactFormMap from "./_components/ContactFormMap";
import SocialHub from "./_components/SocialHub";
import CtaSection from "../_components/CtaSection";

export default function ContactPage() {
  return (
    <main className="bg-gray-50 dark:bg-neutral-950 min-h-screen selection:bg-krimson selection:text-white transition-colors duration-300">
      <ContactHero />
      
      <LocationCards />
      
      <ContactFormMap />
      
      <SocialHub />
      
      <CtaSection />
    </main>
  );
}