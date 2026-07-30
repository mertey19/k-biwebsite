import { ArrowUpRight, Mail } from "lucide-react";

import { Reveal } from "@/src/components/ui/Reveal";
import { SectionHeading } from "@/src/components/ui/SectionHeading";
import { SocialLinks } from "@/src/components/ui/SocialLinks";
import { siteConfig } from "@/src/config/site";
import { sectionCopy } from "@/src/data/portfolio";

export function ContactSection() {
  return (
    <section
      className="section contact-section"
      id="iletisim"
      aria-labelledby="contact-heading"
    >
      <div className="container">
        <Reveal className="contact-card">
          <div className="contact-card__glow" aria-hidden="true" />
          <SectionHeading
            align="center"
            description={sectionCopy.contact.description}
            eyebrow={sectionCopy.contact.eyebrow}
            id="contact-heading"
            title={sectionCopy.contact.title}
          />
          <a
            className="email-link"
            href={`mailto:${siteConfig.email}`}
            aria-label={`${siteConfig.email} adresine e-posta gönder`}
          >
            <span className="email-link__icon" aria-hidden="true">
              <Mail size={22} strokeWidth={1.7} />
            </span>
            <span>{siteConfig.email}</span>
            <ArrowUpRight aria-hidden="true" size={20} />
          </a>
          <div className="contact-actions">
            <a
              className="button button--primary"
              href={`mailto:${siteConfig.email}`}
            >
              {sectionCopy.contact.emailAction}
              <ArrowUpRight aria-hidden="true" size={18} />
            </a>
            <SocialLinks showLabels />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
