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
        <div className="home__firstnameBg"></div>
        <p className="home__firstname"><span>R</span><span>E</span><span>I</span></p>
        <div className="home__lastnameBg"></div>
        <p className="home__lastname">
          <span>F</span><span>r</span><span>o</span><span>n</span><span>t</span><span>-</span><span>E</span><span>n</span><span>d</span>
        </p>
        <p className="home__lastname second">
         <span>D</span><span>e</span><span>v</span><span>e</span><span>l</span><span>o</span><span>p</span><span>e</span><span>r</span>
        </p>          
      </div> 
    </div>
  )
}

export default Home
