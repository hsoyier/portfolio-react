import React from "react";

const Project01 = () => {
  return (
    <div className="example" id="example1">
      <h3>work01</h3>
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
            <li className="example__list__item">
              <a
                href="              http://www.city-volunteer.metro.tokyo.jp/index.html
"
              >
                Visit Web Site
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Project01;
