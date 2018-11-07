import React, { Component } from 'react';
import './normalize.css';
import './App.css';
import './animation.css';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Works from './components/Works';
import Contact from './components/Contact';

export default class App extends Component {
  render() {  
    return (
      <div className="wrapper" id="wrapper">
        <div className="container">
          <Navigation />
          <Home />
          <About />
          <Works />
          <Skills />
          <Contact />
          <Footer />
        </div>
      </div>
    )
  }
}
