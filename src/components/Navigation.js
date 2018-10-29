import React from 'react';

// Route should be wrapped by div tag
const Navigation = () => {
  return (
    <React.Fragment>
      <nav className="nav">
        <ul className="navList">
          <li className="navList__item"><a href="#about">About</a></li>
          <li className="navList__item"><a href="#projects">Projects</a></li>
          <li className="navList__item"><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </React.Fragment>
  )
}

export default Navigation
