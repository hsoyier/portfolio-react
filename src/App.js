import React, { Component } from "react";
import "./normalize.css";
import "./App.scss";
import "./animation.scss";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Works from "./components/Works";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Animation from "./components/Animation";

export default class App extends Component {
  render() {
    return (
      <div className="wrapper" id="wrapper">
        <Animation />
        <div className="container">
          <Header />
          <Home />
          <Works />
          <Projects />
          <About />
          <Skills />
          <Contact />
          <Footer />
        </div>
      </div>
    );
  }
}
