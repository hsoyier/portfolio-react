import React from "react";
import project_example01 from "../../assets/project_example01.jpg";

const Project01 = props => {
  return (
    <div className="example" id="example1">
      <button onClick={props.closeModal}>
        <i className="fas fa-times fa-3x" />
      </button>
      <h3>Tokyo Metropolitan Volunteerism Navigation Website</h3>
      <div className="example__inner">
        <div className="example__info">
          <p className="example__info__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At beatae
            dolorum eum nostrum accusantium natus eveniet quidem, rerum aperiam
            quod exercitationem ullam ut, nemo veritatis ex deleniti nisi. Id
            blanditiis dolorum voluptate maxime! Modi, aspernatur omnis porro
            corporis, fugit, minus facere vitae sapiente rem rerum excepturi
            asperiores! Fugit, sint ipsum.
          </p>
          <div className="example__info__anchor">
            <a
              className="webLink"
              href="http://visual-translate/reiyoshizawa.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Web Site
            </a>
            <a
              className="githubLink"
              href="https://github.com/reiyoshizawa/visual-translate"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </div>
          <img
            className="example__info__image"
            src={project_example01}
            alt="Tokyo Metropolitan Volunteerism Navigation Website"
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
              <dd>HTML5, CSS3, JavaScript</dd>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Project01;
