import React from "react";

const Sns = () => {
  return (
    <section id="sns" className="sns">
      <h2>Follow Me</h2>
      <p className="sns__text">
        Especially check out my GitHub account please. You will see how I love
        programming.
      </p>
      <ul className="sns__list">
        <li className="sns__list--item">
          <a href="https://github.com/reiyoshizawa">
            <i className="fab fa-github fa-2x" />
          </a>
        </li>
        <li className="sns__list--item">
          <a href="https://www.linkedin.com/in/rei-yoshizawa-0a3322b6/">
            <i className="fab fa-linkedin fa-2x" />
          </a>
        </li>
        <li className="sns__list--item">
          <a href="https://twitter.com/ReiYoshizawa_?lang=ja">
            <i className="fab fa-twitter-square fa-2x" />
          </a>
        </li>
        <li className="sns__list--item">
          <a href="https://www.instagram.com/reydejapon/?hl=ja">
            <i className="fab fa-instagram fa-2x" />
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Sns;
