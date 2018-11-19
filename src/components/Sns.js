import React from "react";

const Sns = () => {
  return (
    <section id="sns" className="sns">
      <h2 id="sns__title">Follow Me</h2>
      <p className="sns__text" id="sns__text">
        Check out my accounts. Especially my GitHub account please. You will see
        how I love programming.
        <span className="bold">(You will see I'm programming every day)</span>
      </p>
      <ul className="sns__list" id="sns__list">
        <li className="sns__list--item">
          <a
            className="github"
            href="https://github.com/reiyoshizawa"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github fa-2x" />
          </a>
        </li>
        <li className="sns__list--item">
          <a
            className="linkedin"
            href="https://www.linkedin.com/in/rei-yoshizawa-0a3322b6/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin fa-2x" />
          </a>
        </li>
        <li className="sns__list--item">
          <a
            className="twitter"
            href="https://twitter.com/ReiYoshizawa_?lang=ja"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter-square fa-2x" />
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Sns;
