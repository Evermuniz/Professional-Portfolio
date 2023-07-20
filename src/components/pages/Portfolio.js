import React from "react";
import "./../../styles/Section.css";
import "./../../styles/Portfolio.css";
import githubLogo from "./../../Images/github.svg";
import launchLogo from "./../../Images/box-arrow-up-right.svg";
import techBlogScreenshot from "./../../Images/techBlogScreenshot.jpeg";
import testScreenshot from "./../../Images/screenshot.jpeg";

export default function Portfolio() {
  const projects = [
    {
      name: "The Tech Blog",
      deployed: "https://muniz-tech-blog-62e3233fa5a7.herokuapp.com/",
      github: "https://github.com/Evermuniz/Tech-Blog",
      image: testScreenshot,
      technologies: "JavaScript, Node.js, Express.js, MySQL, Sequelize, Handlebars.js, Bcrypt, Dotenv, Heroku",
    },
    {
      name: "Become",
      deployed: "https://becomethebestyou.herokuapp.com/",
      github: "https://github.com/tylermifflin/Become",
      image: testScreenshot,
      technologies: "JavaScript, Node.js, Express.js, MySQL, Sequelize, Handlebars.js, Bcrypt, Dotenv, Heroku",
    },
    {
      name: "Note Taker",
      deployed: "https://nameless-sea-71643.herokuapp.com/",
      github: "https://github.com/Evermuniz/Express.js-Note-Taker",
      image: testScreenshot,
      technologies: "JavaScript, Node.js, Express.js, Heroku",
    },
    {
      name: "Weather Dashboard",
      deployed: "https://evermuniz.github.io/Weather-Dashboard/",
      github: "https://github.com/Evermuniz/Weather-Dashboard",
      image: testScreenshot,
      technologies: "JavaScript, HTML, CSS, Bootstrap, OpenWeather API",
    },
    {
      name: "PWA Text Editor",
      deployed: "https://pwa-jate-2023-7c576433adaf.herokuapp.com/",
      github: "https://github.com/Evermuniz/PWA-Text-Editor",
      image: testScreenshot,
      technologies: "JavaScript, Node.js, Express.js, MongoDB, Mongoose, Heroku",
    },
    {
      name: "JavaScript Fundamentals Quiz",
      deployed: "https://evermuniz.github.io/JS-Fundamentals-Quiz/",
      github: "https://github.com/Evermuniz/JS-Fundamentals-Quiz",
      image: testScreenshot,
      technologies: "JavaScript, HTML, CSS",
    },
  ];

  const projectList = projects.map((project, index) => (
    <div key={index} className="container">
      <div className="card">
        <h2>{project.name}</h2>
        <i className="fas fa-arrow-right"></i>
        <p>{project.technologies}</p>
        <div className="pic">
          <img className="img-fluid"src={project.image} alt={"screenshot"} />
        </div>
        <div className="social">
          <i className="container">
            <a
              href={project.deployed}
              target="_blank"
              rel="noreferrer"
              className=" d-flex justify-content-center align-items-center"
            >
              <img src={launchLogo} className="pb-2" />
            </a>
            <figcaption className="text-center text-dark">Deployed Application</figcaption>
          </i>
          <i className="container">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className=" d-flex justify-content-center align-items-center"
            >
              <img src={githubLogo} className="pb-2" />
            </a>
            <figcaption className="text-center text-dark">GitHub Repo</figcaption>
          </i>
        </div>
        <button></button>
      </div>
    </div>
  ));

  return (
    <section>
      <h1 className="d-flex justify-content-center p-5">Portfolio</h1>
      {projectList}
    </section>
  );
}
