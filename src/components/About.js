import React from 'react';
import profile from '../assets/profile.jpg'; 

const About = () => {
  // window.addEventListener("scroll", () => {
  //   const scrollTop = document.documentElement.scrollTop;
  //   console.log(scrollTop);
  //   if (scrollTop > 1700) {
  //     const about__profile = document.getElementById("about__profile");
  //     const animation_profile = "animation_profile";
  //     about__profile.className += " " + animation_profile;

  //     const about__img = document.getElementById("about__img");
  //     const animation_profileImg = "animation_profileImg";
  //     about__img.className += " " + animation_profileImg;
  //   }
  // });

  return (
    <section id="about" className="about">
      <div className="about__profile" id="about__profile">
        <p className="about__profile--name">Rei Yoshizawa</p>
        <p className="about__profile--title">About</p>
        <p className="about__profile--text">
          Hi, I'm Front-End developer with 2 years experiece. In the previous job I worked for the clietns such as Honda, Nikon, Breitling and did coding with gulp, sass, etc. Currently my passion is towards React framework. 
        </p>
        <p className="about__profile--text">
          One of my strong point is never-giveup mind and curiousity for the new technology and tools. My recent goal as develolper is to become a full-stack developer so that I keep learning day by day.
        </p>
      </div>
      <div className="about__img" id="about__img">
        <img src={profile} alt="Rei Yoshizawa" />
      </div>
    </section>
  )
}

export default About