import React from "react";
import "./scss/style.scss";

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="home__inner">
        <h2 className="title">
          <span className="title__name introtext">Hi, I'm Rei</span>
          <span className="title__position introtext">Front-End Developer</span>
        </h2>
        <p className="title__detail up-easeIn">
          I'm a Vancouver based Front-End Developer. Since I started my career
          as the developer I've obsessed with most of the topic about tech. I'm
          so grateful to be a part of this
          <span className="bold">wonderful and exciting industry</span>and
          hopefully, I would make something creative and innovational to amaze
          the world soon.
        </p>
      </div>
    </section>
  );
};

export default Home;
