import {
  Activity,
  BriefcaseBusiness,
  CircuitBoard,
  Code2,
  Cpu,
  FlaskConical,
  Gauge,
  Layers3,
  MonitorDot,
  Radio,
  Settings2,
  Wrench,
} from "lucide-react";

import type { IconName, SkillCategory } from "@/src/types/portfolio";

const icons = {
  activity: Activity,
  briefcase: BriefcaseBusiness,
  circuit: CircuitBoard,
  code: Code2,
  cpu: Cpu,
  flask: FlaskConical,
  gauge: Gauge,
  layers: Layers3,
  monitor: MonitorDot,
  radio: Radio,
  settings: Settings2,
  wrench: Wrench,
} satisfies Record<IconName, typeof Activity>;

interface SkillCardProps {
  category: SkillCategory;
}

export function SkillCard({ category }: SkillCardProps) {
  const CategoryIcon = icons[category.icon];

  return (
    <article className="skill-card">
      <div className="skill-card__header">
        <span className="icon-box" aria-hidden="true">
          <CategoryIcon size={22} strokeWidth={1.7} />
        </span>
        <div>
          <h3>{category.title}</h3>
          <p>{category.description}</p>
        </div>
      </div>
      <ul className="skill-list">
        {category.skills.map((skill) => {
          const Icon = icons[skill.icon];

          return (
            <li key={skill.name}>
              <Icon aria-hidden="true" size={17} strokeWidth={1.8} />
              <span>{skill.name}</span>
              {skill.qualifier ? <small>{skill.qualifier}</small> : null}
            </li>
          );
        })}
      </ul>
    </article>
  );
}
