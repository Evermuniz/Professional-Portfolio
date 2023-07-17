import React from "react";
import Project from "../Project";
import "./../../styles/Section.css";

export default function Portfolio() {
  const projects = [
    {
      name: "The Tech Blog",
      deployed: "https://muniz-tech-blog-62e3233fa5a7.herokuapp.com/",
      github: "https://github.com/Evermuniz/Tech-Blog",
      image: "",
    },
    {
      name: "Become",
      deployed: "https://becomethebestyou.herokuapp.com/",
      github: "https://github.com/tylermifflin/Become",
      image: "",
    },
    {
      name: "Note Taker",
      deployed: "https://nameless-sea-71643.herokuapp.com/",
      github: "https://github.com/Evermuniz/Express.js-Note-Taker",
      image: "",
    },
    {
      name: "Weather Dashboard",
      deployed: "https://evermuniz.github.io/Weather-Dashboard/",
      github: "https://github.com/Evermuniz/Weather-Dashboard",
      image: "",
    },
    {
      name: "PWA Text Editor",
      deployed: "https://pwa-jate-2023-7c576433adaf.herokuapp.com/",
      github: "https://github.com/Evermuniz/PWA-Text-Editor",
      image: "",
    },
    {
      name: "JavaScript Fundamentals Quiz",
      deployed: "https://evermuniz.github.io/JS-Fundamentals-Quiz/",
      github: "https://github.com/Evermuniz/JS-Fundamentals-Quiz",
      image: "",
    },
  ];

  return (
    <div className="section">
      <h1>Portfolio</h1>
      {projects.map((project, index) => (
        <Project
          name={project.name}
          deployed={project.deployed}
          github={project.github}
          image={project.image}
          key={index}
        />
      ))}
    </div>
  );
}
