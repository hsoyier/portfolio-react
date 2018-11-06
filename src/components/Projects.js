import React from 'react';

const Projects = () => {
  window.addEventListener("scroll", () => {
    const scrollTop = document.documentElement.scrollTop;
    console.log(scrollTop);
    if (scrollTop > 500) {
      const project__item01 = document.getElementById("project__item01");
      const animation_projects01 = "animation_projects01";
      project__item01.className += " " + animation_projects01;

      const project__item02 = document.getElementById("project__item02");
      const animation_projects02 = "animation_projects02";
      project__item02.className += " " + animation_projects02;

      const project__item03 = document.getElementById("project__item03");
      const animation_projects03 = "animation_projects03";
      project__item03.className += " " + animation_projects03;
    }
  });

  return (  
    <section id="projects" className="project">
      <h2>Projects</h2>
      <ul className="project__list">
        <li className="project__item" id="project__item01">
          <div className="project__itemWrap">
            <img src="http://placehold.it/250x300" alt="dummy" />
            <p className="project__title">Project Title</p>
            <p className="project__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati delectus excepturi aliquid optio suscipit vero.</p>    
          </div>
         </li>
        <li className="project__item" id="project__item02">
          <div className="project__itemWrap">
            <img src="http://placehold.it/250x300" alt="dummy" />
            <p className="project__title">Project Title</p>
            <p className="project__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati delectus excepturi aliquid optio suscipit vero.</p>    
          </div>
        </li>
        <li className="project__item" id="project__item03">
          <div className="project__itemWrap">
            <img src="http://placehold.it/250x300" alt="dummy" />
            <p className="project__title">Project Title</p>
            <p className="project__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati delectus excepturi aliquid optio suscipit vero.</p>    
          </div>
        </li>
      </ul>
    </section>
  )
}

export default Projects
