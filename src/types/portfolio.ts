export type IconName =
  | "activity"
  | "briefcase"
  | "circuit"
  | "code"
  | "cpu"
  | "flask"
  | "gauge"
  | "layers"
  | "monitor"
  | "radio"
  | "settings"
  | "wrench";

export type InterestIconName = Extract<
  IconName,
  "activity" | "circuit" | "code" | "cpu"
>;

export interface NavigationItem {
  href: `#${string}`;
  label: string;
}

export interface Interest {
  description: string;
  icon: InterestIconName;
  title: string;
}

export interface Skill {
  icon: IconName;
  name: string;
  qualifier?: string;
}

export interface SkillCategory {
  description: string;
  icon: IconName;
  skills: Skill[];
  title: string;
}

export interface Education {
  department: string;
  grade: string;
  institution: string;
  status: string;
}

export interface Project {
  description: string;
  outcomes: string[];
  responsibilities: string[];
  title: string;
  tools: string[];
}

export interface Language {
  level: string;
  name: string;
}
