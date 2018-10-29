import React from 'react';
import Footer from './Footer';
import Navigation from './Navigation';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';

const Main = () => {
  return (
    <React.Fragment>
      <Navigation />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </React.Fragment>
  )
}

export default Main
