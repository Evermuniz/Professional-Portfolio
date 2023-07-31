import React from "react";
import "../styles/Header.css";
import logo from "../Images/Logo.png";

// the header used in all the pages
function Header() {
  return (
    <header className="header row container p-3 px-4">
      <div className="col-1 gx-4">
        <a>
          <img src={logo} alt="moutains icon" width="100" height="100" />
        </a>
      </div>
      <div className="col-11 justify-content-start d-flex align-items-center">
        <h1>Ever <span>Muniz</span></h1>
      </div>
    </header>
  );
}

export default Header;
