import {
  home,
  about,
  work,
  projects,
  contact,
  homeWhite,
  aboutWhite,
  workWhite,
  projectsWhite,
  contactWhite,
  github,
  githubWhite,
  linkedin,
  frontendMentor,
  html,
  css,
  js,
  react,
  ts,
  node,
  express,
  mongo,
  redux,
  git,
  figma,
  tailwind,
  nextjs,
  framer,
  luminous,
  proompt,
  netflix,
  rental,
  space,
} from "../assets";

const navLinks = [
  {
    name: "Home",
    path: "/",
    icons: {
      light: homeWhite,
      dark: home,
    },
  },
  {
    name: "About",
    path: "/about",
    icons: {
      light: aboutWhite,
      dark: about,
    },
  },
  // {
  //   name: "Work",
  //   path: "/work",
  //   icons: {
  //     light: workWhite,
  //     dark: work,
  //   },
  // },
  {
    name: "Projects",
    path: "/projects",
    icons: {
      light: projectsWhite,
      dark: projects,
    },
  },
  {
    name: "Contact",
    path: "/contact",
    icons: {
      light: contactWhite,
      dark: contact,
    },
  },
];

const headerLinks = [
  {
    name: "Github",
    icons: {
      light: github,
      dark: githubWhite,
    },
    path: "https://github.com/HickeryDickery",
  },
  {
    name: "LinkedIn",
    icons: {
      light: linkedin,
      dark: linkedin,
    },
    path: "https://www.linkedin.com/in/khizar-nawab/",
  },
  {
    name: "Frontend Mentor",
    icons: {
      light: frontendMentor,
      dark: frontendMentor,
    },
    path: "https://www.frontendmentor.io/profile/HickeryDickery",
  },
];

const skills = [
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: js,
  },
  {
    name: "TypeScript",
    icon: ts,
  },
  {
    name: "React",
    icon: react,
  },

  {
    name: "Node",
    icon: node,
  },
  // {
  //   name: "Express",
  //   icon: express,
  // },
  {
    name: "MongoDB",
    icon: mongo,
  },
  {
    name: "NextJS",
    icon: nextjs,
  },
  {
    name: "Redux",
    icon: redux,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Tailwind",
    icon: tailwind,
  },
  // {
  //   name: "Framer Motion",
  //   icon: framer,
  // },
];

const proj = [
  {
    name: "Proompt",
    description:
      "An AI Prompt Sharing platform to allow everyone to benefit from ingenious ways of getting excellent results from prompt-based AI tools and softwares.",
    github: "https://github.com/HickeryDickery/proompt",
    deployment: "https://proompt-sigma.vercel.app/",
    tags: ["nextjs", "next-auth", "reactjs", "mongodb", "tailwindcss"],
    image: proompt,
  },
  {
    name: "Luminous",
    description:
      "A React Native Android application that allows Student Societies and University Administration to add Events which would be added to a map in the app using the Google Maps API.",
    github:
      "https://github.com/nibi420/Luminous_2.0/tree/HickeryDickery-patch-1",
    deployment: "",
    tags: ["react-native", "mongodb", "node", "expressjs", "expo"],
    image: luminous,
  },
  {
    name: "Rent-a-Car",
    description:
      "A single page NextJS application which fetches information from RapidAPI and displays it in the manner of a car rental website.",
    github: "https://github.com/HickeryDickery/car_rental",
    deployment: "https://car-rental-seven-lemon.vercel.app/",
    tags: ["nextjs", "reactjs", "tailwindcss", "rapidapi"],
    image: rental,
  },
  {
    name: "Space Tourism",
    description:
      "A multi-page frontend website of a fictional space tourism company.",
    github: "https://github.com/HickeryDickery/space_tourism",
    deployment: "https://space-tourism-nu-eight.vercel.app/",
    tags: ["reactjs", "tailwindcss", "framer-motion"],
    image: space,
  },
  {
    name: "Netflix Clone",
    description:
      "A single page frontend React app which fetches information about movies and TV shows from TMDB and displays them in the format of the Netflix website.",
    github: "https://github.com/HickeryDickery/netflix-clone",
    deployment: "https://netflix-clone-biski.web.app/",
    tags: ["reactjs", "css"],
    image: netflix,
  },
];

export { navLinks, headerLinks, skills, proj };
