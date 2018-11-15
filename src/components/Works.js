import React from "react";
import visual_translate from "../assets/visual_translate.png";

const Works = () => {
  return (
    <section id="projects" className="project">
      <div className="project__inner">
        <h2>Works</h2>
        <ul className="project__list">
          <li className="project__item" id="project__item01">
            <div className="project__itemWrap">
              <a
                className="project__anchor"
                href="http://www.city-volunteer.metro.tokyo.jp/index.html"
              >
                <img src={visual_translate} alt="visual translate" />
              </a>
              <p className="project__title">
                <a href="http://www.city-volunteer.metro.tokyo.jp/index.html">
                  Tokyo Metropolitan Volunteerism Navigation Website
                </a>
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
              <a
                className="project__anchor"
                href="https://www.honda.co.jp/orangedealer/orezou/"
              >
                <img src={visual_translate} alt="visual translate" />
              </a>
              <p className="project__title">
                <a href="https://www.honda.co.jp/orangedealer/orezou/https://www.honda.co.jp/orangedealer/orezou/">
                  Honda Orange Dealer
                </a>
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
              <a
                className="project__anchor"
                href="https://www.breitling.co.jp/"
              >
                <img src={visual_translate} alt="visual translate" />
              </a>
              <p className="project__title">
                <a href="https://www.breitling.co.jp/">Breitling Japan</a>
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
      </div>
    </section>
  );
};

export default Works;
