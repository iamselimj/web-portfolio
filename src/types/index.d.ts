import { type LucideIcon } from "lucide-react";

interface SocialLink {
  name: string;
  url: string;
  icon: LucideIcon;
  navbar: boolean;
}

interface Contact {
  email: string;
  tel: string;
  social: {
    GitHub: SocialLink;
    LinkedIn: SocialLink;
    email: SocialLink;
  };
}

interface NavbarItem {
  href: string;
  icon: LucideIcon;
  label: string;
}

interface WorkExperience {
  company: string;
  href: string;
  badges: string[];
  location: string;
  title: string;
  logoUrl: string;
  start: string;
  end: string;
  description: string;
}

interface Education {
  school: string;
  href: string;
  degree: string;
  logoUrl: string;
  start: string;
  end: string;
}

interface ProjectLink {
  type: string;
  href: string;
  icon: JSX.Element;
}

interface Project {
  title: string;
  href: string;
  dates: string;
  active: boolean;
  description: string;
  technologies: string[];
  links: ProjectLink[];
  image: string;
  video: string;
}

interface Hackathon {
  title: string;
  dates: string;
  description: string;
  image: string;
  links: string[];
}

interface Data {
  name: string;
  initials: string;
  url: string;
  location: string;
  locationLink: string;
  description: string;
  summary: string;
  avatarUrl: string;
  skills: string[];
  navbar: NavbarItem[];
  contact: Contact;
  work: WorkExperience[];
  education: Education[];
  projects: Project[];
  hackathons: Hackathon[];
}
