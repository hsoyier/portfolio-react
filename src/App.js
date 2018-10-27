import React, { Component } from 'react'
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

export default class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="container">
          <Header />
          <Footer />
        </div>
      </div>
    )
  }
}
