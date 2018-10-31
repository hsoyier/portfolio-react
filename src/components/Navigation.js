import React from 'react';

// Route should be wrapped by div tag
const Navigation = () => {
  return (
    <header className="header">
      <div className="header__info">
        <h1 className="logo">Rei</h1>
        <nav className="nav">
          <ul className="navList">
            <li className="navList__item"><a href="#about">About</a></li>
            <li className="navList__item"><a href="#projects">Works</a></li>
            <li className="navList__item"><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div> 
      <ul className="sns__list sns__header">
        <li className="sns__list--item"><a href="https://github.com/reiyoshizawa"><i class="fab fa-github"></i></a></li>
        <li className="sns__list--item"><a href="https://www.linkedin.com/in/rei-yoshizawa-0a3322b6/"><i class="fab fa-linkedin"></i></a></li>
        <li className="sns__list--item"><a href="https://twitter.com/ReiYoshizawa_?lang=ja"><i class="fab fa-twitter-square"></i></a></li>
        <li className="sns__list--item"><a href="https://www.instagram.com/reydejapon/?hl=ja"><i class="fab fa-instagram"></i></a></li>
      </ul>
    </header>
  )
}

export default Navigation
