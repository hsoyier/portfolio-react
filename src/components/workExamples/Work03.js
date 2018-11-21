import React from "react";
import work_example03 from "../../assets/work_example03.jpg";

const Work03 = props => {
  return (
    <div className="example" id="example1">
      <button onClick={props.closeModal}>
        <i className="fas fa-times fa-3x" />
      </button>
      <h3>JADA Education Package</h3>
      <div className="example__inner">
        <div className="example__info">
          <p className="example__info__text">
            JADA Education Package is created for promoting the instructors to
            keep the anti-doping policy. I was in charge of coding static page
            from scratch.
          </p>
          <a
            className="webLink"
            href="https://www.playtrue2020-sp4t.jp/edu_package/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Website
          </a>
          <img
            className="example__info__image"
            src={work_example03}
            alt="JADA Education Package"
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

export default Work03;
