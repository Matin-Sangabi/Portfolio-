import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Matin Sangabi",
  initials: "DV",
  url: "https://matin-sangabi.io",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Full stack Engineer turned Entrepreneur. I love building things and helping people. Very active on Twitter.",
  summary:
    "a full-stack developer with 4+ years of experience in building modern web applications. I specialize in front-end development using React.js, Next.js, and modern UI tools like Tailwind CSS and shadcn/ui. On the back end, I work with Nest.js, Node.js, and both SQL and NoSQL databases. I'm passionate about learning and currently exploring AI and Web3, building real-world agents to push my skills even further. I thrive on solving challenging problems and creating clean, performant, and scalable products.",
  avatarUrl: "/me.jpeg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Postgres",
    "Docker",
    "MySql",
    "MongoDb",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "sangabiwork@gmail.com",
    tel: "+98 9178694033",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Matin-Sangabi",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/matin-sangabi-b7823a21b/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/MatinSangabii",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://dub.sh/dillion-youtube",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:sangabiwork@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Hoteldar24",
      href: "https://hoteldar24.com",
      badges: [],
      location: "Freelancer",
      title: "Full Stack Developer",
      logoUrl: "https://hoteldar24.com/simple-logo.svg",
      start: "Sept 2024",
      end: "may 2025",
      description:
        "PWA for Hotel/Accommodation Reservation ManagementDeveloped a full-stack Progressive Web App (PWA) named Hoteldar24, designed to manage reservations for hotels and guesthouses. The system includes advanced user permission handling through Next.js middleware and supports dynamic roles and access levels. Built using Next.js (App Router) for a modern, performant frontend architecture. Utilized React, React Query, React Hook Form, and Yup for efficient state management, form handling, and validation. Implemented a clean and accessible UI with shadcn/ui. Developed a secure backend API with Nest.js, connected to a MongoDB database.",
    },
    {
      company: "Flyksoft",
      badges: [],
      href: "https://app.flyksoft.com/v1/en/",
      location: "Remote",
      title: "Front-end Engineer",
      logoUrl: "https://front.flyksoft.com/v1/fav.png",
      start: "Sept 2024",
      end: "Present",
      description: `
          Joined Flyksoft, a Dubai-based tech company specializing in employee-centric beauty salon reservation systems, as a Front-End Developer, and was later promoted to Front-End Lead Developer to lead the development of the next-generation platform.
          Took ownership of the Admin Panel, responsible for managing salons, staff, appointments, and system settings.
          Led the redevelopment of the platform's frontend using modern technologies:
          React, Vite, React Query for fast and scalable client-side architecture
          shadcn/ui, Material UI (MUI), and Tailwind CSS for a highly polished, customizable UI/UX
          Collaborated closely with product designers and backend developers to ensure seamless integration and intuitive interfaces.
          Focused on performance, accessibility, and maintainability in building scalable components and views.
        `,
    },
    {
      company: "Inja Homes",
      href: "https://inja.homes/",
      badges: [],
      location: "Shiraz , Iran Fars",
      title: "Front-end Engineer",
      logoUrl: "https://inja.homes/Logo%20black.svg",
      start: "June 2024",
      end: "march 2025",
      description: `
        Joined an existing project with severe performance and structural issues. The frontend, originally built with MUI, had major bugs and scored only 45 in performance audits (e.g., Lighthouse). After taking over the codebase, I:
Refactored the UI from MUI to Tailwind CSS for cleaner design and more control.
Optimized Next.js configurations and replaced heavy/unused components with native Next.js solutions.
Debugged and restructured key parts of the frontend to improve UX and stability.
Boosted performance score from 45 to 92, significantly improving speed and SEO readiness.
        `,
    },
    {
      company: "Gaply Labs",
      href: "",
      badges: [],
      location: "Remote",
      title: "Front-end Developer",
      logoUrl:
        "https://static.evand.net/images/organizations/logos/original/988a03547324da0cee493852c9db19f2.jpg",
      start: "July 2022",
      end: "April 2025",
      description:
        "At Goplay, I have been working as a front-end developer, focusing on AI and Web3-related projects. One of the most notable projects I contributed to is QBX, a Telegram bot similar to Hamster, which offers enhanced user engagement. Additionally, I worked on the Auto-Render project, which was an exceptional learning experience for me, allowing me to further develop my skills in front-end. technologies like React.js, Next.js, and Web3.js.",
    },
    {
      company: "Asantamin Rahavard",
      href: "https://asan-tamin.ir",
      badges: [],
      location: "Freelancer",
      title: "Mern Stack Developer",
      logoUrl: "/lime.svg",
      start: "Dec 2022",
      end: "Aug 2024",
      description:
        "In this freelance position, I developed a full-scale e-commerce platform using Next.js (App Directory) for the front-end and Node.js with Express.js and MongoDB for the back-end. The platform includes a Progressive Web App (PWA) for the storefront, along with a fully-featured admin panel that automates business processes such as order management, purchase tracking, and control systems. This project has been an ongoing endeavor for the past seven months.",
    },
    {
      company: "Timnak",
      href: "https://timnak.ir",
      badges: [],
      location: "Shiraz , Iran Fars",
      title: "Front-end Developer",
      logoUrl:
        "https://timnak.ir/_next/image?url=http%3A%2F%2Ftimnak.ir%3A48345%2Fmedia%2Ffile_header_logo%2FHEADER.png&w=256&q=75",
      start: "july 2023",
      end: "Sep 2023",
      description:
        "At Timnak, I led the front-end development for Timnak.ir, a travel booking website offering visa and tour reservation services. This project allowed me to work extensively with React.js, Next.js, and Tailwind CSS to create an interactive and user-friendly interface.",
    },
  ],
  education: [
    {
      school: "BACHELORS OF POWER ELECTRICITY (Shahid Bahonar Shiraz ) ",
      href: "https://bahonarshiraz.nus.ac.ir/",
      degree: "17.80 Rank_no.5",
      logoUrl:
        "https://media.licdn.com/dms/image/v2/C560BAQET7r3vkgsl_Q/company-logo_100_100/company-logo_100_100/0/1630624926892?e=1753920000&v=beta&t=AbwOxa4VDhoNElQTBr75aiIbv_iNXW-YyJU1a0Nz-x4",
      start: "2017",
      end: "2021",
    },
    {
      school: "CS50x: Introduction to Computer Science",
      href: "https://pll.harvard.edu/themes/custom/twel_scholar/logo.svg",
      degree: "CS50x: Introduction to Computer Science",
      logoUrl:
        "https://camo.githubusercontent.com/3206f3affaa684c377e14621f78f9746ba4b0c9054e44fce2868d9ceeb2f30f4/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f632f63632f486172766172645f556e69766572736974795f636f61745f6f665f61726d732e7376672f38303070782d486172766172645f556e69766572736974795f636f61745f6f665f61726d732e7376672e706e67",
      start: "2024",
      end: "2024",
    },
  ],
  projects: [
    {
      title: "Hoteldar24",
      href: "https://hoteldar24.com",
      dates: "Sept 2024 - May 2025",
      active: true,
      description:
        "PWA for Hotel/Accommodation Reservation ManagementDeveloped a full-stack Progressive Web App (PWA) named Hoteldar24, designed to manage reservations for hotels and guesthouses. The system includes advanced user permission handling through Next.js middleware and supports dynamic roles and access levels",
      technologies: [
        "Next.js",
        "Typescript",
        "Nest.js",
        "MySql",
        "TailwindCSS",
        "Shadcn UI",
        "React Query",
        "Web push",
        "Pwa",
        "zustand",
      ],
      links: [
        {
          type: "Website",
          href: "https://hoteldar24.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Flyksoft",
      href: "https://app.flyksoft.com/v1/en/",
      dates: "sept 2024 - Present",
      active: true,
      description:
        "Led the redesign and development of the admin panel for a beauty salon reservation platform using React, Vite, Tailwind CSS, MUI, shadcn/ui, and React Query, with a strong focus on performance, scalability, and clean UI architecture.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn",
        "Mui",
        "React query",
        "Web push",
        "Pwa",
        "zustand",
      ],
      links: [
        {
          type: "Website",
          href: "https://app.flyksoft.com/v1/en/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Web3",
      href: "https://wagmi-coral.vercel.app/",
      dates: "2024",
      active: true,
      description:
        "Developed a Web3 application using Next.js App Directory and integrated it with WalletConnect and WAGMI to interact with a smart contract on the blockchain. The application retrieves the user's balance and allows them to mint NFTs. Additionally, users can stake their NFTs directly through the platform",
      technologies: [
        "Next.js",
        "Typescript",
        "Wagmi",
        "Wallet-connect",
        "TailwindCSS",
        "Hero ui",
        "Web push",
        "Pwa",
        "zustand",
      ],
      links: [
        {
          type: "Website",
          href: "https://wagmi-coral.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Matin-Sangabi/wagmi",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Push Notification System",
      href: "https://next-notifiction.vercel.app/",
      dates: "2024",
      active: true,
      description:
        "Developed a Push Notification system integrated with a Next.js application using the App Directory, Web Push, and a PWA setup. Users install the app and grant permission for notifications. Once enabled, users can send notifications to themselves and others.",
      technologies: [
        "Next.js",
        "Typescript",
        "Express",
        "Mongodb",
        "TailwindCSS",
        "Hero ui",
        "Web push",
        "Pwa",
        "zustand",
      ],
      links: [
        {
          type: "Website",
          href: "https://next-notifiction.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Front-source",
          href: "https://github.com/Matin-Sangabi/NEXT-NOTIFICTION",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Back-source",
          href: "https://github.com/Matin-Sangabi/web-push",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
  hackathons: [],
} as const;
