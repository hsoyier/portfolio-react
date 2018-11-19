import React from "react";
import project_example02 from "../../assets/project_example02.jpg";

const Project03 = props => {
  return (
    <div className="example" id="example1">
      <button onClick={props.closeModal}>
        <i className="fas fa-times fa-3x" />
      </button>
      <h3>Rei Yoshizawa Portfolio</h3>
      <div className="example__inner">
        <div className="example__info">
          <p className="example__info__text">
            One of my own project. I applied React framework for developing. At
            first my main focus point was to make fast and simple, one page web
            site. To make this web site more user-friendly I applied modal
            function for works and personal projects part insted of link to the
            another page. I also added some CSS3 animations to make more elegant
            page.
          </p>
          <div className="example__info__anchor">
            <a
              className="webLink"
              href="http://reiyoshizawa.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Web Site
            </a>
            <a
              className="githubLink"
              href="https://github.com/reiyoshizawa/portfolio-react"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </div>
          <img
            className="example__info__image"
            src={project_example02}
            alt="Rei Yoshizawa Portfolio"
          />
        </div>
        <div className="example__detail">
          <ul className="example__list">
            <li className="example__list__item">
              <dt>Charge</dt>
              <dd>Front End Developer</dd>
            </li>
            <li className="example__list__item">
              <dt>What I used</dt>
              <dd>
                HTML5, CSS3, JavaScript, React, Sass, BEM, Responsive Web Design
              </dd>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Project03;
