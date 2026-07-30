import { Activity, CircuitBoard, Code2, Cpu } from "lucide-react";

import { Reveal } from "@/src/components/ui/Reveal";
import { SectionHeading } from "@/src/components/ui/SectionHeading";
import { interests, profile, sectionCopy } from "@/src/data/portfolio";
import type { InterestIconName } from "@/src/types/portfolio";

const interestIcons = {
  activity: Activity,
  circuit: CircuitBoard,
  code: Code2,
  cpu: Cpu,
} satisfies Record<InterestIconName, typeof Activity>;

export function AboutSection() {
  return (
    <section className="section" id="hakkimda" aria-labelledby="about-heading">
      <div className="container">
        <Reveal>
          <SectionHeading
            description={sectionCopy.about.description}
            eyebrow={sectionCopy.about.eyebrow}
            id="about-heading"
            title={sectionCopy.about.title}
          />
        </Reveal>
        <div className="about-grid">
          <Reveal className="about-story" delay={0.06}>
            <span className="about-story__index">A / 01</span>
            <blockquote>{profile.shortSummary}</blockquote>
            <p>{profile.summary}</p>
            <div className="about-story__line" aria-hidden="true" />
          </Reveal>

          <Reveal className="interests-panel" delay={0.12}>
            <div className="panel-label">
              <span>{sectionCopy.about.interestsTitle}</span>
              <span>04 alan</span>
            </div>
            <ul className="interest-list">
              {interests.map((interest, index) => {
                const Icon = interestIcons[interest.icon];

                return (
                  <li key={interest.title}>
                    <span className="interest-list__number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="icon-box" aria-hidden="true">
                      <Icon size={20} strokeWidth={1.7} />
                    </span>
                    <span>
                      <strong>{interest.title}</strong>
                      <small>{interest.description}</small>
                    </span>
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
