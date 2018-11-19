import React from "react";
import work_example01 from "../../assets/work_example01.jpg";

const Work02 = props => {
  return (
    <div className="example" id="example1">
      <button onClick={props.closeModal}>
        <i className="fas fa-times fa-3x" />
      </button>
      <h3>Tokyo Metropolitan Volunteerism Navigation Website</h3>
      <div className="example__inner">
        <div className="example__info">
          <p className="example__info__text">
            The web site is to promote the volunteers for the upcoming Tokyo
            2020 olympic. In Japan volunteering culture is not spreaded and not
            so common so that this web site is released. I was in charge of
            updating the web site when they add new topics. Mainly I was coding
            with HTML5, CSS3, JavaScript also utilized gulp, sass as local
            development enviorment. In addition I edited some of the design work
            using Adobe Photoshop.
          </p>
          <a
            className="webLink"
            href="http://www.city-volunteer.metro.tokyo.jp/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Web Site
          </a>
          <img
            className="example__info__image"
            src={work_example01}
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
              <dd>HTML5, CSS3, JavaScript, Adobe Photoshop</dd>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Work02;
