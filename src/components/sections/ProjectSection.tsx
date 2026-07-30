import { ProjectCard } from "@/src/components/ui/ProjectCard";
import { Reveal } from "@/src/components/ui/Reveal";
import { SectionHeading } from "@/src/components/ui/SectionHeading";
import { featuredProject, sectionCopy } from "@/src/data/portfolio";

export function ProjectSection() {
  return (
    <section className="section" id="proje" aria-labelledby="project-heading">
      <div className="container">
        <Reveal>
          <SectionHeading
            description={sectionCopy.project.description}
            eyebrow={sectionCopy.project.eyebrow}
            id="project-heading"
            title={sectionCopy.project.title}
          />
        </Reveal>
        <Reveal delay={0.08}>
          <ProjectCard project={featuredProject} />
        </Reveal>
      </div>
    </section>
  );
}
