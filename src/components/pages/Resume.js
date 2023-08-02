import React from "react";
import "../../styles/Resume.css"
// icons imported that are used in the cards
import backEnd from "../../Images/database-fill-gear.svg";
import frontEnd from "../../Images/pc-display.svg";
import api from "../../Images/arrow-down-up.svg";
import launch from "../../Images/rocket-takeoff.svg";

export default function Resume() {

const onButtonClick = () => {
  fetch("Ever_Muniz_Resume.pdf").then((response) => {
    response.blob().then((blob) => {
      // Creating new object of PDF file
      const fileURL = window.URL.createObjectURL(blob);
      // Setting various property values
      let alink = document.createElement("a");
      alink.href = fileURL;
      alink.download = "Ever Muniz Resume";
      alink.click();
    });
  });
};



  return (
    <div className="section">
      <h1>Resume</h1>

      <div className="card m-auto resume mt-5">
        <div className="card-body text-center">
          <a onClick={onButtonClick} className="text-decoration-none text-light-emphasis">
            Download my resume
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              className="bi bi-file-earmark-arrow-down-fill ms-2"
              viewBox="0 0 16 16"
            >
              <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zm-1 4v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L7.5 11.293V7.5a.5.5 0 0 1 1 0z" />
            </svg>
          </a>{" "}
        </div>
      </div>

      <div className="justify-content-center skills">
        <div className="card m-auto mb-5 mt-5">
          <div className="card-header">
            {" "}
            <img src={frontEnd} alt="server icon" className="mb-3" />
            Front-end Proficiencies{" "}
          </div>
          <ul className="list-group list-group-flush rounded">
            <li className="list-group-item">HTML</li>
            <li className="list-group-item">CSS</li>
            <li className="list-group-item">JavaScript</li>
            <li className="list-group-item">jQuery</li>
            <li className="list-group-item">React</li>
            <li className="list-group-item">PWAs</li>
          </ul>
        </div>

        <div className="card mb-5 m-auto">
          <ul className="list-group list-group-flush rounded">
            <li className="list-group-item">Node.js</li>
            <li className="list-group-item">Express.js</li>
            <li className="list-group-item">JWT</li>
            <li className="list-group-item">MySQL</li>
            <li className="list-group-item">MongoDB</li>
            <li className="list-group-item">MERN Stack</li>
          </ul>
          <div className="card-header">
            <img src={backEnd} alt="pc and mobile display icons" className="mb-3" />
            Back-end Proficiencies{" "}
          </div>
        </div>

        <div className="card m-auto mb-5">
          <div className="card-header">
            <img src={api} alt="icon of arrows pointing in opposite directions" className="mb-3" />
            API Design{" "}
          </div>
          <ul className="list-group list-group-flush rounded">
            <li className="list-group-item">Client-Server ModelAPI</li>
            <li className="list-group-item">REST</li>
            <li className="list-group-item">JSON</li>
            <li className="list-group-item">AJAX</li>
            <li className="list-group-item">GraphQL</li>
          </ul>
        </div>

        <div className="card m-auto mb-5">
          <ul className="list-group list-group-flush rounded">
            <li className="list-group-item">Heroku</li>
            <li className="list-group-item">Git</li>
            <li className="list-group-item">GitHub Pages</li>
            <li className="list-group-item">Shell Scripting</li>
            <li className="list-group-item">Unit Testing</li>
            <li className="list-group-item">Linting</li>
          </ul>
          <div className="card-header">
            <img src={launch} alt="icon of rocket" className="mb-3" />
            Deployment and Delivery{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
