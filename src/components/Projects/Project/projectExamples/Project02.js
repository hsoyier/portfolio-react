import React from "react";
import project_example02 from "../assets/project_example02.jpg";

const Project02 = props => {
  return (
    <div className="example" id="example1">
      <button onClick={props.closeModal}>
        <i className="fas fa-times fa-3x" />
      </button>
      <h3>Joyevent</h3>
      <div className="example__inner">
        <div className="example__info">
          <p className="example__info__text">
            One of my own project. You can search the upcoming events on this
            website. I applied Eventbrite API. Wherever city or country you
            search promptly It shows the events near the searched word.
          </p>
          <div className="example__info__anchor">
            <a
              className="webLink"
              href="http://joyevent.reiyoshizawa.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Website
            </a>
            <a
              className="githubLink"
              href="https://github.com/hsoyier/joyevent"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github fa-lg" />
              Github
            </a>
          </div>
          <img
            className="example__info__image"
            src={project_example02}
            alt="Joyevent"
          />
        </div>
        <div className="example__detail">
          <ul className="example__list">
            <li className="example__list__item">
              <dt>Charge</dt>
              <dd>Front End Developer, Designer</dd>
            </li>
            <li className="example__list__item">
              <dt>What I used</dt>
              <dd>
                HTML5, CSS3, JavaScript, React, Sass, BEM, Bootstrap, Responsive
                Web Design, Web API(Eventbrite API)
              </dd>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Project02;
