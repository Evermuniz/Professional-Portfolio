import React from "react";
import "./../../styles/Portfolio.css";
// all the screenshots used to render the portfolio cardds
import githubLogo from "./../../Images/github.svg";
import launchLogo from "./../../Images/box-arrow-up-right.svg";
import techBlog from "../../Images/techBlog.jpeg";
import become from "../../Images/become.jpeg";
import jate from "../../Images/jate.jpeg";
import JSQuiz from "../../Images/jsQuiz.jpeg";
import weatherDashboard from "../../Images/weatherDashboard.jpeg";
import noteTaker from "../../Images/noteTaker.jpeg";
import drillSergeant from "../../Images/drillSergeant.jpeg";

export default function Portfolio() {
  // the array of objects used to build each individual project in the portfolio page
  const projects = [
    {
      name: "The Tech Blog",
      deployed: "https://muniz-tech-blog-62e3233fa5a7.herokuapp.com/",
      github: "https://github.com/Evermuniz/Tech-Blog",
      image: techBlog,
    },
    {
      name: "PWA Text Editor",
      deployed: "https://pwa-jate-2023-7c576433adaf.herokuapp.com/",
      github: "https://github.com/Evermuniz/PWA-Text-Editor",
      image: jate,
    },
    {
      name: "Drill Sergeant",
      deployed: "https://evermuniz.github.io/JS-Fundamentals-Quiz/",
      github: "https://drill-sergeant-dda0cd61e869.herokuapp.com/",
      image: drillSergeant,
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
  ];

  // using one component to loop through all the projects in the array above by using the index as a key
  const projectList = projects.map((project, index) => (
    <div key={index} className="container d-flex justify-content-center mb-5 portfolio mt-5">
      <div className="card cardContainer grayscale row ">
        <img src={project.image} className="card-img-top img-fluid screenshot" alt="application screenshot" />
        <div className="card-body ">
          <h5 className="card-title">{project.name}</h5>
          <div className="row justify-content-center d-flex text-center mt-4 grid">
            <div className="row g-col-3 d-flex justify-content-center">
              <a href={project.deployed} className="btn btn-primary text-nowrap">
                <img src={launchLogo} className="me-3" />
                Application
              </a>
            </div>

            <div className="row g-col-3 mt-3 d-flex justify-content-center">
              <a href={project.github} className="btn btn-primary text-nowrap">
                <img src={githubLogo} className="me-3" />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <section>
      <h1 className="mt-5">Portfolio</h1>
      {projectList}
    </section>
  );
}
