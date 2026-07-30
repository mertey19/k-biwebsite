import { BookOpen, GraduationCap } from "lucide-react";

import { Reveal } from "@/src/components/ui/Reveal";
import { SectionHeading } from "@/src/components/ui/SectionHeading";
import { education, sectionCopy } from "@/src/data/portfolio";

export function EducationSection() {
  return (
    <section
      className="section section--soft"
      id="egitim"
      aria-labelledby="education-heading"
    >
      <div className="container">
        <Reveal>
          <SectionHeading
            description={sectionCopy.education.description}
            eyebrow={sectionCopy.education.eyebrow}
            id="education-heading"
            title={sectionCopy.education.title}
          />
        </Reveal>

        <Reveal className="education-card" delay={0.08}>
          <div className="education-card__marker" aria-hidden="true">
            <GraduationCap size={28} strokeWidth={1.6} />
          </div>
          <div className="education-card__content">
            <div className="status-pill">
              <span aria-hidden="true" />
              {education.status}
            </div>
            <p className="education-card__institution">
              {education.institution}
            </p>
            <h3>{education.department}</h3>
            <p className="education-card__note">
              <BookOpen aria-hidden="true" size={17} />
              Lisans eğitimi
            </p>
          </div>
          <div className="education-card__grade">
            <span>Genel Not Ortalaması</span>
            <strong>{education.grade}</strong>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
