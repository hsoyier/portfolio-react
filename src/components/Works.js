import React from "react";
import visual_translate from "../assets/visual_translate.png";

const Works = () => {
  return (
    <section id="projects" className="project">
      <h2>Works</h2>
      <ul className="project__list">
        <li className="project__item" id="project__item01">
          <div className="project__itemWrap">
            <a className="project__anchor" href="test.reiyoshizawa.com">
              <img src={visual_translate} alt="visual translate" />
            </a>
            <p className="project__title">
              <a href="test.reiyoshizawa.com">Visual Translate</a>
            </p>
            <p className="project__text">
              React Project. Fetch 2 APIs(Giphy API and Oxford Dictionary API)
            </p>
            <ul className="project__skillList">
              <li className="project__skill">React</li>
              <li className="project__skill">Ajax</li>
              <li className="project__skill">Git</li>
              <li className="project__skill">Responsive Web Design</li>
            </ul>
          </div>
        </li>
        <li className="project__item" id="project__item01">
          <div className="project__itemWrap">
            <a className="project__anchor" href="test.reiyoshizawa.com">
              <img src={visual_translate} alt="visual translate" />
            </a>
            <p className="project__title">
              <a href="test.reiyoshizawa.com">Visual Translate</a>
            </p>
            <p className="project__text">
              React Project. Fetch 2 APIs(Giphy API and Oxford Dictionary API)
            </p>
            <ul className="project__skillList">
              <li className="project__skill">React</li>
              <li className="project__skill">Ajax</li>
              <li className="project__skill">Git</li>
              <li className="project__skill">Responsive Web Design</li>
            </ul>
          </div>
        </li>

        <li className="project__item" id="project__item01">
          <div className="project__itemWrap">
            <a className="project__anchor" href="test.reiyoshizawa.com">
              <img src={visual_translate} alt="visual translate" />
            </a>
            <p className="project__title">
              <a href="test.reiyoshizawa.com">Visual Translate</a>
            </p>
            <p className="project__text">
              React Project. Fetch 2 APIs(Giphy API and Oxford Dictionary API)
            </p>
            <ul className="project__skillList">
              <li className="project__skill">React</li>
              <li className="project__skill">Ajax</li>
              <li className="project__skill">Git</li>
              <li className="project__skill">Responsive Web Design</li>
            </ul>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Works;
