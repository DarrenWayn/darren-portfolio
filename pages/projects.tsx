import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectsNavbar from "../components/ProjectsNavbar";
import { projects as projectsData } from "../data";
import { Category } from "../types";
import Head from "next/head";
import { motion } from "framer-motion"

const Projects = () => {
  const [projects, setProjects] = useState(projectsData);
  const [active, setActive] = useState("all");
  const show = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const handlerFilterCategory = (category: Category | "all") => {
    if (category === "all") {
      setProjects(projectsData);
      setActive(category);
      return;
    }

    const newArray = projectsData.filter((project) =>
      project.category.includes(category)
    );
    setProjects(newArray);
    setActive(category);
  };

  return (
      <div className="px-5 py-2 overflow-y-scroll" style={{ height: "65vh" }}>
        <Head>
          <title>Front-End Developer | Projects | Darren Wayn</title>
        </Head>
        <ProjectsNavbar
          handlerFilterCategory={handlerFilterCategory}
          active={active}
        />
      <motion.div
        className="show"
        variants={show}
        initial="hidden"
        animate="visible"
        >
        <div className="relative grid grid-cols-12 gap-4 my-3">
          {projects.map((project) => (
            <div key={project.id} className="col-span-12 p-2 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-200">
              <ProjectCard project={project} key={project.name} />
            </div>
          ))}
        </div>
      </motion.div>
      </div>
  );
};

export default Projects;
