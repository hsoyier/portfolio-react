import React from 'react';
import bg from '../assets/bg-main.jpg'; 

const About = () => {
  return (
    <section>
      <img src={bg} alt="Rei Yoshizawa"/>
      <p className="about__title">Rei Yoshizawa</p>
      <p className="about__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque recusandae quisquam ad vel, repellat facilis commodi aliquam fugiat nesciunt iste error exercitationem enim reiciendis tenetur quibusdam vero quis quasi et? Accusamus assumenda eos sit veritatis, dignissimos sunt necessitatibus amet quas commodi. Fugit impedit nulla ducimus voluptatum distinctio repellendus amet autem.</p>
      <div>
        <p>Skills</p>
        <p>Tools</p>
        <p>Next to...</p>
      </div>
    </section>
  )
}

export default About