import React from 'react';
// import profile from '../assets/profile.jpg'; 

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about__profile">
        <p className="about__profile--name">Rei Yoshizawa</p>
        <p className="about__profile--title">About</p>
        <p className="about__profile--text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, accusamus minima. Explicabo dolore odit doloremque ipsam exercitationem. Odit a facere illo eligendi. Ut non omnis blanditiis exercitationem id architecto deserunt, inventore, molestias numquam praesentium aut nesciunt atque voluptatem sed. Rerum perspiciatis laborum nemo, enim maxime cum ut dolorum harum aperiam!</p>
      </div>
      <div className="about__img">
        {/* <img src={profile} alt="Rei Yoshizawa" /> */}
      </div>
    </section>
  )
}

export default About