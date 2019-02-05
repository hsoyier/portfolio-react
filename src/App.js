import React, { Component } from 'react'
import './normalize.css'
import './App.scss'
import './animation.scss'
import Head from './Head'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
// import Works from './components/Works/Works'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Animation from './components/Animation'

export default class App extends Component {
  render() {
    return (
      <div>
        <Head />
        <div className="wrapper" id="wrapper">
          <Animation />
          <div className="container">
            <Header />
            <Home />
            {/* <Works /> */}
            <Projects />
            <About />
            <Skills />
            <Contact />
            <Footer />
          </div>
        </div>
      </div>
    )
  }
}
