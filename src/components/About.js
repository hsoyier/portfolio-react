import React from "react";
import profile from "../assets/profile.jpg";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about__inner">
        <div className="about__profile" id="about__profile">
          <h2 id="about__title">About</h2>
          <div className="about__textBlock" id="about__textBlock">
            <div className="about__box">
              <p className="profile__name">Rei Yoshizawa</p>
              <p className="about__profile--text">
                Hi, I'm a Front-End developer with 3+ years experience. In the
                previous job, I worked for the clients such as Honda, Nikon,
                Breitling. I'm really passionate about programming.
              </p>
              <p className="about__profile--text">
                One of my strong points is never-give-up mind and
                <span className="bold">curiosity for the new technology</span>
                and tools. My recent goal as the developer is to become a
                full-stack developer so that I keep learning day by day.
              </p>
            </div>
            <div className="about__img">
              <img src={profile} alt="Rei Yoshizawa" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
