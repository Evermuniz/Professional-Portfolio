import React from "react";
import "./../../styles/AboutMe.css";
import headshot from "../../Images/headshot.jpeg";

// About Me page
export default function AboutMe() {
  return (
    <div className="aboutMe">
      <h1 className="mt-5">About Me</h1>
      <figure className="mt-5">
        <img src={headshot} alt="Ever Muniz" className="rounded img-fluid" />
      </figure>

      <div className="d-flex justify-content-center">
        <p className="text-center mt-5 pb-5">
          I'm a Web Developer with a background in software and people management within the convenience
          store industry. Committed to continuous learning and adept at problem-solving, I graduated from The University
          of Utah Coding Bootcamp. My technical expertise includes proficiency in both front- and back-end web
          development. Additionally, I am currently pursuing an undergraduate degree in Chemical Engineering at The
          University of Utah. Outside of my professional pursuits, I take pleasure in immersing myself in Utah's
          picturesque outdoors.
        </p>
      </div>
    </div>
  );
}
