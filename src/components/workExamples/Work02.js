import React from "react";
import work_example02 from "../../assets/work_example02.jpg";

const Work02 = props => {
  return (
    <div className="example" id="example1">
      <button onClick={props.closeModal}>
        <i className="fas fa-times fa-3x" />
      </button>
      <h3>Breitling Japan</h3>
      <div className="example__inner">
        <div className="example__info">
          <p className="example__info__text">
            This is Breitling Japan official website. I was in charge of
            updating the pages when the event occurs or the new watch model is
            released or other stuff related to Breitling. I was coding with
            HTML, CSS, JavaScript(jQuery). Also, I edited the photos using Adobe
            Photoshop and sometimes Adobe After Effect.
          </p>
          <a
            className="webLink"
            href="https://www.breitling.co.jp/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Website
          </a>
          <img
            className="example__info__image"
            src={work_example02}
            alt="Breitling Japan"
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
                HTML, CSS, JavaScript, Adobe Photoshop, Adobe After Effect
              </dd>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Work02;
