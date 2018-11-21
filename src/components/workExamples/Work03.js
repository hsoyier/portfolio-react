import React from "react";
import work_example03 from "../../assets/work_example03.jpg";

const Work03 = props => {
  return (
    <div className="example" id="example1">
      <button onClick={props.closeModal}>
        <i className="fas fa-times fa-3x" />
      </button>
      <h3>Honda Orange Dealer</h3>
      <div className="example__inner">
        <div className="example__info">
          <p className="example__info__text">
            Honda Orange Dealer is one of the featured pages in Honda web site.
            It's released to promote traffic safety campaign, especially for the
            children. The cute elephant is chosen as the character for
            attracting the kids. I was in charge of coding with HTML, CSS,
            JavaScript.
          </p>
          <a
            className="webLink"
            href="https://www.honda.co.jp/orangedealer/orezou/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Website
          </a>
          <img
            className="example__info__image"
            src={work_example03}
            alt="Honda Orange Dealer"
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
              <dd>HTML, CSS, JavaScript</dd>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Work03;
