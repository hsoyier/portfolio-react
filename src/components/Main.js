import React from 'react';
import Header from './Header';
import Footer from './Footer';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import bg from '../assets/bg-main.jpg'; 

const Main = () => {
  return (
    <React.Fragment>
      <Header />
      <img src={bg} alt="Rei Yoshizawa"/>
      <h1>Rei Yoshizawa</h1>
      <p>Front-End Developer</p>
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </React.Fragment>
  )
}

export default Main
