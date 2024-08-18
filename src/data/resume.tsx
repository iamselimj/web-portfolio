import { Icons } from "@/components/icons";
import { Data } from "@/types";
import { CodeIcon, HomeIcon, LucideIcon, NotebookIcon } from "lucide-react";

export const DATA: Data = {
  name: "Selim Jacquet",
  initials: "SJ",
  url: "localhost:3000",
  location: "Brussels, BE",
  locationLink: "https://www.google.com/maps/place/brussels",
  description:
    "Full-Stack TypeScript Developer based in Brussels.",
  summary:
    "I'm a self-taught full stack developer. I've learned everything by myself after work & during my free times, using all the free & paid ressources at my disposal. I followed a lot of tutorials on YouTube, some paid courses with the best teacher in the world and of course, a lot of pratical exercices & projects, not to mention the hours spent reading documentation and debugging code.",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Solidity",
    "SQL",
    "Docker",
    "Rust",
    "Go",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
    { href: "#projects", icon: CodeIcon, label: "Projects" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+32474749911",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/iamselimj",
        icon: Icons.github as LucideIcon,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/iamselimj/",
        icon: Icons.linkedin as LucideIcon,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mail:iamselimj@proton.me",
        icon: Icons.email as LucideIcon,
        navbar: true,
      },
    },
  },
  work: [
    {
      company: "Multi Task Accountant",
      href: "",
      badges: [],
      location: "",
      title: "Le Logement Molenbeekois",
      logoUrl: "/llm.jpg",
      start: "2021",
      end: "2024",
      description:
        "Le Logement Molenbeeois is a Public Real Estate Company. They had a management crisis a few years before so they accumulated a huge delay in the financial department. My mission was to provide support to the different services that make up the financial department.",
    },
    {
      company: "Web Marketing Trainer",
      href: "",
      badges: [],
      location: "",
      title: "CFITech",
      logoUrl: "/CFITech.png",
      start: "2020",
      end: "2021",
      description:
        "The training center have a 1-year web development training program for job seekers and wanted students to have several courses on digital marketing. This allowed me to have access to a Trainer Training & a Training in UX Research at the University of Brussels.",
    },
    {
      company: "Multipurpose Worker",
      href: "",
      badges: [],
      location: "",
      title: "Carrefour Market",
      logoUrl: "/carrefour_market.png",
      start: "2018",
      end: "2019",
      description:
        "Carrefour is a big shop",
    },
    {
      company: "Storekeeper & Restocker",
      href: "",
      badges: [],
      location: "",
      title: "Delhaize",
      logoUrl: "/delhaize.png",
      start: "2016",
      end: "2017",
      description:
        "Delhaize is a big group.",
    },
  ],
  education: [
    {
      school: "User Experience Design and Research",
      href: "",
      degree: "ULB - Continuing Education",
      logoUrl: "/ulb.png",
      start: "2021",
      end: "2021",
    },
    {
      school: "Data-Driven Marketing & Innovation",
      href: "",
      degree: "Skillsfactory",
      logoUrl: "/skillsfactory.png",
      start: "2019",
      end: "2020",
    },
    {
      school: "IT Techician",
      href: "",
      degree: "EPFC",
      logoUrl: "/epfc.jpg",
      start: "2012",
      end: "2014",
    },
    {
      school: "Photography",
      href: "",
      degree: "National Institute of Radioelectricity and Cinematography",
      logoUrl: "/inraci.jpg",
      start: "2008",
      end: "2012",
    },
    {
      school: "Latin & Science",
      href: "",
      degree: "Royal Athenaeum of Watermael-Boitsfort",
      logoUrl: "/la-brise.jpeg",
      start: "2005",
      end: "2008",
    },
  ],
  projects: [{
    title: "Solana Decentralized Application",
    href: "",
    dates: "August 2024",
    active: true,
    description:
      "",
    technologies: ["React.js", "Next.js", "Typescript", "Solana"],
    links: [
      {
        type: "Website",
        href: "",
        icon: <Icons.globe className="size-3" />,
      },
    ],
    image: "",
    video:
      "",
  },
  {
    title: "Raydium Sniper Bot",
    href: "",
    dates: "September 2024",
    active: true,
    description:
      "The bot listens for new liquidity pools on Raydium (DEX) on Solana. When a new token is created, it executes transactions when predefined conditions are met.",
    technologies: [
      "Node.js",
      "Typescript",
      "Solana",
      "Raydium"
    ],
    links: [
      {
        type: "GitHub",
        href: "",
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: "/solana-sniper-trading-bot.png",
    video:
      "",
  },
  ],
  hackathons: [
    {
      title: "Mastering Next.js with TypeScript",
      dates: "Waiting...",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "/nextjs.svg",
      links: [],
    },
    {
      title: "React 18: Intermediate Topics",
      dates: "Waiting...",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "/react.svg",
      links: [],
    },
    {
      title: "React 18 for Beginners",
      dates: "Waiting...",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "/react.svg",
      links: [],
    },
    {
      title: "The Ultimate Docker Course",
      dates: "Waiting...",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "/docker.svg",
      links: [],
    },
    {
      title: "The Ultimate Git Course",
      dates: "Waiting...",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "/git.svg",
      links: [],
    },
    {
      title: "The Complete SQL Course",
      dates: "Waiting...",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "/sql.svg",
      links: [],
    },
    {
      title: "The Complete Node.js Course",
      dates: "Waiting...",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "/nodejs.svg",
      links: [],
    },
    {
      title: "The Ultimate TypeScript Course",
      dates: "Waiting...",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "/typescript.svg",
      links: [],
    },
    {
      title: "Ultimate JavaScript Part2: Advanced Topics",
      dates: "Waiting...",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "/javascript.svg",
      links: [],
    },
    {
      title: "Ultimate JavaScript Part1: Fundamentals",
      dates: "Completed",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "/javascript.svg",
      links: [],
    },
    {
      title: "Ultimate HTML & CSS: Part 3",
      dates: "Completed",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "/html.svg",
      links: [],
    },
    {
      title: "Ultimate HTML & CSS: Part 2",
      dates: "Completed",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "/html.svg",
      links: [],
    },
    {
      title: "Ultimate HTML & CSS: Part 1",
      dates: "Completed",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "/html.svg",
      links: [],
    },
    {
      title: "Ultimate Java Part3: Advanced Topics",
      dates: "Completed",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "/java.svg",
      links: [],
    },
    {
      title: "Ultimate Java Part2: Object-Oriented Programming",
      dates: "Completed",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "/java.svg",
      links: [],
    },
    {
      title: "Ultimate Java Part1: Fundamentals",
      dates: "Completed",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "/java.svg",
      links: [],
    }
  ],
} as const;
