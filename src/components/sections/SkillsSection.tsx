import { Reveal } from "@/src/components/ui/Reveal";
import { SectionHeading } from "@/src/components/ui/SectionHeading";
import { SkillCard } from "@/src/components/ui/SkillCard";
import { sectionCopy, skillCategories } from "@/src/data/portfolio";

export function SkillsSection() {
  return (
    <section
      className="section section--soft"
      id="beceriler"
      aria-labelledby="skills-heading"
    >
      <div className="container">
        <Reveal>
          <SectionHeading
            description={sectionCopy.skills.description}
            eyebrow={sectionCopy.skills.eyebrow}
            id="skills-heading"
            title={sectionCopy.skills.title}
          />
        </Reveal>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <Reveal delay={index * 0.06} key={category.title}>
              <SkillCard category={category} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
