import React from "react";
import profile from "../assets/profile.jpg";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about__inner">
        <div className="about__profile" id="about__profile">
          <h2 id="about__title">About</h2>
          <p className="profile__name" id="about__subTitle">
            Rei Yoshizawa
          </p>
          <p className="about__profile--text" id="about__text">
            Hi, I'm Front-End developer with 3+ years experiece. In the previous
            job I worked for the cliets such as Honda, Nikon, Breitling. I'm
            really passionate about programming.
          </p>
          <p className="about__profile--text">
            One of my strong point is never-giveup mind and
            <span className="bold">curiousity for the new technology</span>and
            tools. My recent goal as develolper is to become a full-stack
            developer so that I keep learning day by day.
          </p>
        </div>
        <div className="about__img" id="about__img">
          <img src={profile} alt="Rei Yoshizawa" />
        </div>
      </div>
    </section>
  );
};

export default About;
