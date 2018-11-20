import React from "react";
import project_example01 from "../../assets/project_example01.jpg";

const Project01 = props => {
  return (
    <div className="example" id="example1">
      <button onClick={props.closeModal}>
        <i className="fas fa-times fa-3x" />
      </button>
      <h3>Visual Translate</h3>
      <div className="example__inner">
        <div className="example__info">
          <p className="example__info__text">
            One of my own project. I designed and developed myself. In this
            website, you can search the translated word for several languages
            and also the giphy animations related to the searched word.
            Sometimes people can't get enough understanding of the word even if
            the word is translated for own language. This website show not only
            the images but also fun time looking at looping giphy animations. I
            choose to React as a framework. 2 different APIs, Google translation
            API, and Giphy API are applied. I focused on creating well-organized
            component structures.
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
              href="https://github.com/oyyer/visual-translate"
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
              <dd>Front End Developer, Designer</dd>
            </li>
            <li className="example__list__item">
              <dt>What I used</dt>
              <dd>
                HTML5, CSS3, JavaScript, React, Sass, BEM, Responsive Web
                Design, Web API(Google Translate API, Giphy API)
              </dd>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Project01;
