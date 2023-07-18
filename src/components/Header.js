import React from "react";
import "../styles/Header.css";
import logo from "../Images/LogoNoText.png";

function Header() {
  return (
    <header className="header row container px-4">
      <div className="col-1 gx-4">
        <a>
          <img src={logo} alt="Bootstrap" width="50" height="50" />
        </a>
      </div>
      <div className="col-6 justify-content-start ">
        <h1>Ever Muniz</h1>
      </div>
    </header>
  );
}

export default Header;
