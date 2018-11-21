import React from "react";

const Contact = props => {
  return (
    <div className="contacts">
      <div className="inner">
        <section className="contact" id="contact">
          <h2 id="contact__title">Contact</h2>
          <p className="contact__text" id="contact__text">
            Don’t hesitate to contact me if you want to know more about What I
            do. I am currently based in Vancouver. Please contact me whenever
            you want, Thanks!
          </p>
          <div className="contact__btnBlock" id="contact__btnBlock">
            <button className="contact__btn" id="contact__btn">
              <a
                href="mailto:reiyoshizawa0418@gmail.com"
                className="contact__anchor"
              >
                Contact me
              </a>
            </button>
            <button className="contact__btn" id="contact__btn">
              <a
                href="../assets/reiyoshizawa_resume.pdf"
                download="reiyoshizawa_resume"
                className="resume"
              >
                Resume
              </a>
            </button>
          </div>
        </section>
        <section className="sns">
          <h2 id="sns__title">Follow Me</h2>
          <p className="sns__text" id="sns__text">
            Check out my accounts. Especially my GitHub account, please. You
            will see how I love programming.
            <span className="bold">
              (You will see I'm programming every day)
            </span>
          </p>
          <ul className="sns__list" id="sns__list">
            <li className="sns__list--item">
              <a
                className="github"
                href="https://github.com/oyyer"
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
                href="https://twitter.com/oyyer_"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter-square fa-2x" />
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Contact;
