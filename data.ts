import { RiComputerLine } from "react-icons/ri";
import { AiOutlineApi } from "react-icons/ai";
import { IProject, Service, Skill } from "./types";

import { BsCircleFill } from "react-icons/bs";

export const services: Service[] = [
  {
    id: 1,
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>   and <b>React.js</b> ",
  },
  {
    id: 2,
    Icon: AiOutlineApi,
    title: "API Development",
    about: "I can create API using <b>scrapper Api</b>  & <b>Node API</b> ",
  },
];

export const languages: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Python",
    level: "45",
  },
  {
    Icon: BsCircleFill,
    name: "Java Script",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "Typescript",
    level: "45",
  },
  {
    Icon: BsCircleFill,
    name: "React Js",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "Next Js",
    level: "65",
  },
  {
    Icon: BsCircleFill,
    name: "Brownie",
    level: "60",
  },
];

export const tools: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Canva",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "Framer",
    level: "45",
  },
];

export const projects: IProject[] = [
  {
    id: 1,
    name: "Real Estate API",
    description:
      "This app shows a Buy and Rent Real Estate Available in US/Europe using BuyOut Rapid Api",
    image_path: "/images/realestate-api.png",
    deployed_url: "https://dw-realestate-api.vercel.app/",
    github_url: "https://github.com/DarrenWayn/realestate-api",
    category: ["next.js", "coursework"],
    key_techs: ["Next.js", "Chakra UI", "NProgress", "Rapid API"],
  },
  {
    id: 2,
    name: "Crypto News & Exchanges",
    image_path: "/images/cryptonews-api.png",
    deployed_url: "https://dw-cryptoapireact.netlify.app",
    github_url: "https://github.com/DarrenWayn/cryptoApiReact",
    category: ["react.js"],
    description:
      "This site is build using CoinRanking Api to create Exchanges page and coins, this site also using Chart Js to display Chart Prices History of each coins",
    key_techs: [
      "React",
      "Antd Design",
      "Rapid API",
      "Redux",
      "Chart Js",
      "Millify",
    ],
  },
  {
    id: 3,
    name: "Company Profile",
    image_path: "/images/company-profile.png",
    deployed_url: "https://dw-company-profile.vercel.app/",
    github_url: "https://github.com/DarrenWayn/netflix-clone",
    category: ["next.js"],
    description:
      "this site is heavy on css effect like parallax and modern scroll animation expired by apple website",
    key_techs: ["Next", "Axios", "TailwindCSS"],
  },
  {
    id: 4,
    name: "Netflix Clone",
    image_path: "/images/netflix-clone.png",
    deployed_url: "https://dw-netflix-clone.netlify.app",
    github_url: "https://github.com/DarrenWayn/netflix-clone",
    category: ["react.js"],
    description:
      "This site is a netflix clone build on top firebase to access authentication login and payment functionality using stripe",
    key_techs: [
      "React",
      "Axios",
      "Pure CSS",
      "The Movie DB API",
      "FireBase Auth",
      "Stripe",
    ],
  },
  {
    id: 5,
    name: "TodoList",
    image_path: "/images/todos.png",
    deployed_url: "https://dw-todolist-react.netlify.app/",
    github_url: "https://github.com/DarrenWayn/todolist-react",
    category: ["react.js"],
    description:
      "This site is build using React that have added, edit, and delete feature",
    key_techs: ["React", "Sass", "Html5"],
  },
  {
    id: 6,
    name: "Input Form",
    image_path: "/images/simple-input-form.png",
    deployed_url: "https://dw-inputform-react.netlify.app/",
    github_url: "https://github.com/DarrenWayn/inputform-react",
    category: ["react.js"],
    description: "This site is a simple input form that use mostly react hooks",
    key_techs: ["React", "Sass", "Html5"],
  },
  {
    id: 7,
    name: "Pig Game",
    image_path: "/images/pig-game.png",
    deployed_url: "https://dw-pig-game.netlify.app/",
    github_url: "https://github.com/DarrenWayn/js_fundemental",
    category: ["javascript"],
    description: "this have random dice feature use forEach method",
    key_techs: ["Javascript", "CSS", "Html5"],
  },
  {
    id: 8,
    name: "Guess My Number",
    image_path: "/images/guess-my-number.png",
    deployed_url: "https://dw-guessmynumber.netlify.app/",
    github_url: "https://github.com/DarrenWayn/js_fundemental",
    category: ["javascript"],
    description:
      "Guess your number and win it! it throws a random number and you need to guess it!",
    key_techs: ["Javascript", "CSS", "Html5"],
  },
];
