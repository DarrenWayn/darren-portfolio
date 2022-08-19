import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
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
    category: ["next.js"],
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
    name: "Google Clone",
    image_path: "/images/googleclone.png",
    deployed_url: "https://dw-googlecloneapi.netlify.app",
    github_url: "https://github.com/DarrenWayn/goggl",
    category: ["react.js"],
    description:
      "A Google Clone Website that have the exact pages such search, news, images, and videos",
    key_techs: ["React", "Axios", "Google Search API", "TailwindCSS"],
  },
  {
    id: 4,
    name: "Simple Netflix Clone",
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
    name: "Travel Advisor Rapid API",
    image_path: "/images/traveladvisor-api.png",
    deployed_url: "https://dw-reacttravelapi.netlify.app",
    github_url: "https://github.com/DarrenWayn/travel-advisor-api",
    category: ["react.js"],
    description:
      "This site have a Card that cover Restaurants, Hotel, and Attraction that used to look for the best of it in each countries and cities using Travel Advisor Rapid Api",
    key_techs: ["React", "Axios", "Material UI", "Google Map & Weather API"],
  },
  {
    id: 6,
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
    id: 7,
    name: "Input Form",
    image_path: "/images/simple-input-form.png",
    deployed_url: "https://dw-inputform-react.netlify.app/",
    github_url: "https://github.com/DarrenWayn/inputform-react",
    category: ["react.js"],
    description: "This site is a simple input form that use mostly react hooks",
    key_techs: ["React", "Sass", "Html5"],
  },
  {
    id: 8,
    name: "Pig Game",
    image_path: "/images/pig-game.png",
    deployed_url: "https://dw-pig-game.netlify.app/",
    github_url: "https://github.com/DarrenWayn/js_fundemental",
    category: ["javascript"],
    description: "this have random dice feature use forEach method",
    key_techs: ["Javascript", "CSS", "Html5"],
  },
  {
    id: 9,
    name: "Input Form",
    image_path: "/images/guessmynumber.png",
    deployed_url: "https://dw-pig-game.netlify.app/",
    github_url: "https://github.com/DarrenWayn/js_fundemental",
    category: ["javascript"],
    description:
      "Guess your number and win it! it throws a random number and you need to guess it!",
    key_techs: ["Javascript", "CSS", "Html5"],
  },
];
