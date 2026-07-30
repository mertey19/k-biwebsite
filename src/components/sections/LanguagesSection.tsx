import { Languages } from "lucide-react";

import { Reveal } from "@/src/components/ui/Reveal";
import { SectionHeading } from "@/src/components/ui/SectionHeading";
import { languages, sectionCopy } from "@/src/data/portfolio";

export function LanguagesSection() {
  return (
    <section
      className="section languages-section"
      aria-labelledby="languages-heading"
    >
      <div className="container languages-layout">
        <Reveal>
          <SectionHeading
            eyebrow={sectionCopy.languages.eyebrow}
            id="languages-heading"
            title={sectionCopy.languages.title}
          />
        </Reveal>
        <div className="language-list">
          {languages.map((language, index) => (
            <Reveal delay={index * 0.06} key={language.name}>
              <article className="language-card">
                <span className="icon-box" aria-hidden="true">
                  <Languages size={21} strokeWidth={1.7} />
                </span>
                <div>
                  <h3>{language.name}</h3>
                  <p>{language.level}</p>
                </div>
                <span className="language-card__index" aria-hidden="true">
                  0{index + 1}
                </span>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
