import React from "react";

const Works = () => {
  return (
    <section id="projects" className="project">
      <h2>Works</h2>
      <ul className="project__list">
        <li className="project__item" id="project__item01">
          <div className="project__itemWrap">
            <img src="http://placehold.it/250x300" alt="dummy" />
            <p className="project__title">Project Title</p>
            <p className="project__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              delectus excepturi aliquid optio suscipit vero.
            </p>
          </div>
        </li>
        <li className="project__item" id="project__item02">
          <div className="project__itemWrap">
            <img src="http://placehold.it/250x300" alt="dummy" />
            <p className="project__title">Project Title</p>
            <p className="project__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              delectus excepturi aliquid optio suscipit vero.
            </p>
          </div>
        </li>
        <li className="project__item" id="project__item03">
          <div className="project__itemWrap">
            <img src="http://placehold.it/250x300" alt="dummy" />
            <p className="project__title">Project Title</p>
            <p className="project__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              delectus excepturi aliquid optio suscipit vero.
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Works;
