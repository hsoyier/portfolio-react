import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="project">
      <h2>Projects</h2>
      <ul className="project__list">
        <li className="project__item">
          <div className="project__itemWrap">
            <img src="http://placehold.it/250x300" alt="dummy" />
            <p className="project__title">Project Title</p>
            <p className="project__discription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati delectus excepturi aliquid optio suscipit vero.</p>    
          </div>
         </li>
        <li className="project__item">
          <div className="project__itemWrap">
            <img src="http://placehold.it/250x300" alt="dummy" />
            <p className="project__title">Project Title</p>
            <p className="project__discription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati delectus excepturi aliquid optio suscipit vero.</p>    
          </div>
        </li>
        <li className="project__item">
          <div className="project__itemWrap">
            <img src="http://placehold.it/250x300" alt="dummy" />
            <p className="project__title">Project Title</p>
            <p className="project__discription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati delectus excepturi aliquid optio suscipit vero.</p>    
          </div>
        </li>
      </ul>
    </section>
  )
}

export default Projects
