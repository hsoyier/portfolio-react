import React from 'react';
import mainImg from '../assets/main.jpg'; 

const Home = () => {
  return (
    <div className="home__block"> 
      <div className="home__bg">
        <div className="home__bg--b"></div>  
        <div className="home__bg--w">
          <div className="home__imgBg"></div>
          <img className="home__img" src={mainImg} alt=""/>
        </div> 
        <p className="home__firstname"><span>R</span><span>e</span><span>i</span></p>
        <p className="home__lastname">I'm Vancouver based Front-End Developer. My passion is always towards new technology.</p>    
      </div> 
    </div>
  )
}

export default Home
