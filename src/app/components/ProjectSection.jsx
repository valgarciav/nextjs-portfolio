"use client";
import React, { useState, useRef } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag';
import { motion, useInView } from "framer-motion";


const projectData = [
    {
        id: 1,
        title: "Mina Chat",
        description: "Realtime private chat app using React and Firebase for authentication",
        image: "",
        tag: ["All", "React"],
        gitUrl: "https://github.com/valgarciav/mina-chat",
        previewUrl: "/",
    },
    {
        id: 1,
        title: "Weather App",
        description: "Weather App Using JavaScript, HTML and CSS. Current weather data is gathered from Fess API fey from OpenWeatherMap and displays the weather information like Temperature,  Weather condition, Humidity and Wind Speed according to the city. ",
        image: "/image/projects/weather.jpeg",
        tag: ["All", "Javascript"],
        gitUrl: "https://github.com/valgarciav/weather-app",
        previewUrl: "/",
    },
    {
        id: 2,
        title: "Product Search",
        description: "Product inventory search application using Javascript, HTML and CSS",
        image: "/image/projects/product-search.jpeg",
        tag: ["All", "Javascript"],
        gitUrl: "https://github.com/valgarciav/ProductSearchJS",
        previewUrl: "/",
    },
    {
        id: 3,
        title: "Calculator",
        description: "Functional calculator application using Javascript, HTML and CSS",
        image: "/image/projects/calc.jpeg",
        tag: ["All", "Javascript"],
        gitUrl: "https://github.com/valgarciav/JavaScript-Calculator",
        previewUrl: "/",
    },
    {
        id: 4,
        title: "Music Library",
        description: "",
        image: "/image/projects/musicSearch.png",
        tag: ["All", "Javascript"],
        gitUrl: "https://github.com/valgarciav/RR-Music-Library",
        previewUrl: "https://main.dyqm2lf1uonfr.amplifyapp.com/",
    },
    {
        id: 5,
        title: "Web Game",
        description: "",
        image: "/image/projects/webGameJS.png",
        tag: ["All", "Javascript"],
        gitUrl: "https://github.com/valgarciav/FSI-Creating-a-Choose-Your-Own-Adventure-Game",
        previewUrl: "https://main.d2hhm31zgqii90.amplifyapp.com/",
    },
    // {
    //     id: 6,
    //     title: "React Portfolio ",
    //     description: "",
    //     image: "/image/projects/react-profile.png",
    //     tag: ["All", "React"],
    //     gitUrl: "https://github.com/valgarciav/react-portfolio-website",
    //     previewUrl: "https://master.d39x3ccala6w7r.amplifyapp.com/",
    // },

];
const ProjectSection = () => {
    const [tag, setTag ] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});

    const handleTagChange = (newTag) => {
        setTag(newTag);
      };
    
    const filteredProjects = projectData.filter((project) =>
        project.tag.includes(tag)
      );

      const cardVariants = {
        initial: { y:50, opacity:0 },
        animate: {y:0, opacity: 1},
      };

  return (
    <section id="projects">
        <h2>
            My Projects
        </h2>
        <div className='text-white flex flex-row justify-center items-center gap-2 py-6 '>
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Javascript"
          isSelected={tag === "Javascript"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="React"
          isSelected={tag === "React"}
        />
        </div>
        <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  )
}

export default ProjectSection