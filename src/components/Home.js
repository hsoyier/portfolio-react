import React from 'react';
import bg from '../assets/bg-main.jpg'; 

const Home = () => {
  return (
    <React.Fragment>
      <div className="home">
        <img src={bg} alt="Rei Yoshizawa" className="home__img" />
        <div className="home__titleBlock">
          <h1 className="home__title">Rei Yoshizawa</h1>
          <p className="home__subTitle">Front-End Developer</p>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Home
