import React from 'react';
import profile from '../assets/profile.jpg'; 

const About = () => {
  window.addEventListener("scroll", () => {
    const scrollTop = document.documentElement.scrollTop;
    console.log(scrollTop);
    if (scrollTop > 1700) {
      const about__profile = document.getElementById("about__profile");
      const animation_profile = "animation_profile";
      about__profile.className += " " + animation_profile;

      const about__img = document.getElementById("about__img");
      const animation_profileImg = "animation_profileImg";
      about__img.className += " " + animation_profileImg;
    }
  });

  return (
    <section id="about" className="about">
      <div className="about__profile" id="about__profile">
        <p className="about__profile--name">Rei Yoshizawa</p>
        <p className="about__profile--title">About</p>
        <p className="about__profile--text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, accusamus minima. Explicabo dolore odit doloremque ipsam exercitationem. Odit a facere illo eligendi. Ut non omnis blanditiis exercitationem id architecto deserunt, inventore, molestias numquam praesentium aut nesciunt atque voluptatem sed. Rerum perspiciatis laborum nemo, enim maxime cum ut dolorum harum aperiam!</p>
      </div>
      <div className="about__img" id="about__img">
        <img src={profile} alt="Rei Yoshizawa" />
      </div>
    </section>
  )
}

export default About