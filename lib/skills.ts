import { IconType } from "react-icons";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiSupabase,
  SiPostgresql,
  SiGit,
  SiFigma,
  SiVercel,
} from "react-icons/si";

export type Skill = {
  name: string;
  sub: string;
  color: string;
  Icon: IconType;
};

export const skills: Skill[] = [
  { name: "React", sub: "hooks · RHF", color: "#61DAFB", Icon: SiReact },
  { name: "Next.js", sub: "app router", color: "#ffffff", Icon: SiNextdotjs },
  {
    name: "TypeScript",
    sub: "zod · typed",
    color: "#3178C6",
    Icon: SiTypescript,
  },
  { name: "JavaScript", sub: "ES6+", color: "#F7DF1E", Icon: SiJavascript },
  { name: "Tailwind", sub: "shadcn/ui", color: "#38BDF8", Icon: SiTailwindcss },
  { name: "HTML5", sub: "semantic", color: "#E34F26", Icon: SiHtml5 },
  { name: "CSS3", sub: "responsive", color: "#1572B6", Icon: SiCss },
  {
    name: "Supabase",
    sub: "auth · realtime",
    color: "#3FCF8E",
    Icon: SiSupabase,
  },
  {
    name: "PostgreSQL",
    sub: "relational",
    color: "#4169E1",
    Icon: SiPostgresql,
  },
  { name: "Git", sub: "github", color: "#F05032", Icon: SiGit },
  { name: "Figma", sub: "wireframe", color: "#F24E1E", Icon: SiFigma },
  { name: "Vercel", sub: "deploy", color: "#ffffff", Icon: SiVercel },
];
