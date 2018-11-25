import React from "react";
import profile from "../assets/logo.png";

// Route should be wrapped by div tag
const Header = () => {
  return (
    <header className="header">
      <div className="header__inner">
        <div className="header__info">
          <h1 className="logo">
            <a href="/">
              <img src={profile} alt="logo" />
            </a>
          </h1>
        </div>
        <nav className="nav">
          <ul className="navList">
            <li className="navList__item navList__item01">
              <a className="introtext" href="#about">
                About
              </a>
            </li>
            <li className="navList__item navList__item02">
              <a className="introtext" href="#works">
                Works
              </a>
            </li>
            <li className="navList__item navList__item03">
              <a className="introtext" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
