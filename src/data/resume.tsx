import { Icons } from "@/components/icons";
import { Data } from "@/types";
import { CodeIcon, HomeIcon, LucideIcon } from "lucide-react";

export const DATA: Data = {
  name: "Selim Jacquet",
  initials: "SJ",
  url: "https://iamselimj.vercel.app",
  location: "Brussels, BE",
  locationLink: "https://www.google.com/maps/place/brussels",
  description:
    "The Modern Full-Stack Developer",
  summary:
    "I'm a self-taught full stack developer. I've learned everything by myself after work & during my free times, using all the free & paid ressources at my disposal. I followed a lot of tutorials on YouTube, some paid courses with the best teacher in the world and of course, a lot of pratical exercices & projects, not to mention the hours spent reading documentation and debugging code.",
  avatarUrl: "/me.jpg",
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
    { href: "/", icon: HomeIcon, label: "About" },
    { href: "/", icon: HomeIcon, label: "Works" },
    { href: "/", icon: HomeIcon, label: "Educations" },
    { href: "/", icon: HomeIcon, label: "Certifications" },
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
  projects: [
    {
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
  certifications: [
    {
      title: "Mastering Next.js with TypeScript",
      state: "Waiting",
      description:
        "Everything you need to build full-stack applications with Next.js 13+ (App Router) and TypeScript",
      image:
        "/nextjs.svg",
      links: [],
    },
    {
      title: "React 18: Intermediate Topics",
      state: "Waiting",
      description:
        "Take your React skills to the next level by mastering state management and routing.",
      image:
        "/react.svg",
      links: [],
    },
    {
      title: "React 18 for Beginners",
      state: "Waiting",
      description:
        "A step-by-step guide to building web apps with React 18+ and TypeScript.",
      image:
        "/react.svg",
      links: [],
    },
    {
      title: "The Ultimate Docker Course",
      state: "Waiting",
      description:
        "Everything you need to master Docker in one clear, concise, and practical course.",
      image:
        "/docker.svg",
      links: [],
    },
    {
      title: "The Ultimate Git Course",
      state: "Waiting",
      description:
        "Everything you need to know to use Git & GitHub to work effectively as a team.",
      image:
        "/git.svg",
      links: [],
    },
    {
      title: "The Complete SQL Course",
      state: "Waiting",
      description:
        "Everything you need to design and query databases in one course.",
      image:
        "/sql.svg",
      links: [],
    },
    {
      title: "The Complete Node.js Course",
      state: "Waiting",
      description:
        "Learn to build highly-scalable, fast and secure RESTful APIs with Node, Express, and MongoDB.",
      image:
        "/nodejs.svg",
      links: [],
    },
    {
      title: "The Ultimate TypeScript Course",
      state: "Waiting",
      description:
        "Learn to make your JavaScript applications scale.",
      image:
        "/typescript.svg",
      links: [],
    },
    {
      title: "Ultimate JavaScript Part2: Advanced Topics",
      state: "Progress",
      description:
        "Level up your JavaScript skills and prepare for technical interviews.",
      image:
        "/javascript.svg",
      links: [],
    },
    {
      title: "Ultimate JavaScript Part1: Fundamentals",
      state: "Completed",
      description:
        "Master the fundamentals of programming in JavaScript.",
      image:
        "/javascript.svg",
      links: [],
    },
    {
      title: "Ultimate HTML & CSS: Part 3",
      state: "Completed",
      description:
        "Learn to convert Photoshop design mockups into real websites.",
      image:
        "/html.svg",
      links: [],
    },
    {
      title: "Ultimate HTML & CSS: Part 2",
      state: "Completed",
      description:
        "Master advanced HTML5 & CSS3 concepts behind fast, beautiful and mobile-friendly websites.",
      image:
        "/html.svg",
      links: [],
    },
    {
      title: "Ultimate HTML & CSS: Part 1",
      state: "Completed",
      description:
        "Master the fundamentals of web development with HTML5 & CSS3.",
      image:
        "/html.svg",
      links: [],
    },
    {
      title: "Ultimate Java Part3: Advanced Topics",
      state: "Completed",
      description:
        "All about Exceptions, Generics, Collections, Lambdas, Streams, Multi-threading and Asynchronous Programming.",
      image:
        "/java.svg",
      links: [],
    },
    {
      title: "Ultimate Java Part2: Object-Oriented Programming",
      state: "Completed",
      description:
        "Learn to build robust, maintainable software with object-oriented programming techniques.",
      image:
        "/java.svg",
      links: [],
    },
    {
      title: "Ultimate Java Part1: Fundamentals",
      state: "Completed",
      description:
        "Discover Java - the most popular programming language underpinning most apps and websites.",
      image:
        "/java.svg",
      links: [],
    }
  ],
} as const;
