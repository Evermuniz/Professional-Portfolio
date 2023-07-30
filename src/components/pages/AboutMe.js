import React from "react";
import "./../../styles/AboutMe.css";
import headshot from "../../Images/headshot.jpeg";

export default function AboutMe() {
  return (
    <div className="section">
      <h1>About Me</h1>
      <figure>
        <img src={headshot} alt="Ever Muniz" />
      </figure>

      <p>
        I am a Full Stack Web Developer with a background in software and people management within the convenience store
        industry. Committed to continuous learning and adept at problem-solving, I graduated from the University of Utah
        Coding Bootcamp. My technical expertise includes proficiency in HTML, CSS, JavaScript, Node.js, Express.js,
        MySQL, MongoDB, and React.js. Additionally, I am currently pursuing my undergraduate degree in Chemical
        Engineering at the University of Utah. Outside of my professional pursuits, I take pleasure in immersing myself
        in Utah's picturesque outdoors.
      </p>
    </div>
  );
}
