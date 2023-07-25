import React from "react";
import "./../../styles/Section.css";
import "./../../styles/Portfolio.css";
import githubLogo from "./../../Images/github.svg";
import launchLogo from "./../../Images/box-arrow-up-right.svg";
import techBlog from "../../Images/techBlog.jpg"
import become from "../../Images/become.jpg"
import jate from "../../Images/jate.jpg"
import JSQuiz from "../../Images/JSQuiz.jpg"
import weatherDashboard from "../../Images/weatherDashboard.jpg"
import noteTaker from "../../Images/noteTaker.jpg"

export default function Portfolio() {
  const projects = [
    {
      name: "The Tech Blog",
      deployed: "https://muniz-tech-blog-62e3233fa5a7.herokuapp.com/",
      github: "https://github.com/Evermuniz/Tech-Blog",
      image: techBlog,
    },
    {
      name: "Become",
      deployed: "https://becomethebestyou.herokuapp.com/",
      github: "https://github.com/tylermifflin/Become",
      image: become,
    },
    {
      name: "Note Taker",
      deployed: "https://nameless-sea-71643.herokuapp.com/",
      github: "https://github.com/Evermuniz/Express.js-Note-Taker",
      image: noteTaker,
    },
    {
      name: "Weather Dashboard",
      deployed: "https://evermuniz.github.io/Weather-Dashboard/",
      github: "https://github.com/Evermuniz/Weather-Dashboard",
      image: weatherDashboard,
    },
    {
      name: "PWA Text Editor",
      deployed: "https://pwa-jate-2023-7c576433adaf.herokuapp.com/",
      github: "https://github.com/Evermuniz/PWA-Text-Editor",
      image: jate,
    },
    {
      name: "JavaScript Quiz",
      deployed: "https://evermuniz.github.io/JS-Fundamentals-Quiz/",
      github: "https://github.com/Evermuniz/JS-Fundamentals-Quiz",
      image: JSQuiz,
    },
  ];

  const projectList = projects.map((project, index) => (
    <div key={index} className="container d-flex w-75">
      <div className="card col p-0 border border-5">
        <div>
          <h2 className="ps-2">{project.name}</h2>
          <img className="img-fluid pic" src={project.image} alt={"screenshot"} />
        </div>

        <div className="social row col-2">
          <div className="d-flex align-items-center pb-5">
            <i className="card1">
              <a
                href={project.deployed}
                target="_blank"
                rel="noreferrer"
                className=" d-flex justify-content-center align-items-center link-primary link-underline-opacity-50"
              >
                <img src={launchLogo} className="pe-2" />
                Deployed Application
              </a>
            </i>
          </div>

          <div className="d-flex align-items-center ">
            <i className="card2">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className=" d-flex justify-content-center align-items-center link-primary link-underline-opacity-50"
              >
                <img src={githubLogo} className="pe-2" />
                GitHub Repository
              </a>
            </i>
          </div>
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
