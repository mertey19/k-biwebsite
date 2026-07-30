import { Footer } from "@/src/components/layout/Footer";
import { Navbar } from "@/src/components/layout/Navbar";
import { AboutSection } from "@/src/components/sections/AboutSection";
import { ContactSection } from "@/src/components/sections/ContactSection";
import { EducationSection } from "@/src/components/sections/EducationSection";
import { HeroSection } from "@/src/components/sections/HeroSection";
import { LanguagesSection } from "@/src/components/sections/LanguagesSection";
import { ProjectSection } from "@/src/components/sections/ProjectSection";
import { SkillsSection } from "@/src/components/sections/SkillsSection";
import { MotionProvider } from "@/src/components/ui/MotionProvider";
import { getSafeSocialUrl, siteConfig } from "@/src/config/site";

export default function Home() {
  const socialProfiles = [
    getSafeSocialUrl("linkedin"),
    getSafeSocialUrl("instagram"),
  ].filter((url): url is string => Boolean(url));

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: siteConfig.title,
    email: `mailto:${siteConfig.email}`,
    ...(socialProfiles.length > 0 ? { sameAs: socialProfiles } : {}),
  };

  return (
    <MotionProvider>
      <a className="skip-link" href="#ana-icerik">
        İçeriğe geç
      </a>
      <Navbar />
      <main id="ana-icerik">
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <ProjectSection />
        <SkillsSection />
        <LanguagesSection />
        <ContactSection />
      </main>
      <Footer />
      <script
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
        }}
        type="application/ld+json"
      />
    </MotionProvider>
  );
}
