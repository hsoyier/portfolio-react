import React, { Component } from 'react';
import './App.css';
import './normalize.css';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="container">
          <Navigation />
          <Home />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </div>
    )
  }
}
