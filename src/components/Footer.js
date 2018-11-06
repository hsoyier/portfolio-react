import React from 'react';

const Footer = () => {
  return (
    <section className="sns">
      <ul className="sns__list">
        <li className="sns__list--item"><a href="https://github.com/reiyoshizawa"><i className="fab fa-github"></i></a></li>
        <li className="sns__list--item"><a href="https://www.linkedin.com/in/rei-yoshizawa-0a3322b6/"><i className="fab fa-linkedin"></i></a></li>
        <li className="sns__list--item"><a href="https://twitter.com/ReiYoshizawa_?lang=ja"><i className="fab fa-twitter-square"></i></a></li>
        <li className="sns__list--item"><a href="https://www.instagram.com/reydejapon/?hl=ja"><i className="fab fa-instagram"></i></a></li>
      </ul>
      <p className="copyright">@Rei Yoshizawa Portfolio Web Site</p>      
    </section>
  )
}

export default Footer
