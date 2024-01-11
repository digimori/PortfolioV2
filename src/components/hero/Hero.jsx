import React from "react";
import "./hero.scss";

const Hero = () => {
  return (
    <div className="hero__container">
      <div className="hero__container-wrapper">
        <div className="hero__container-text">
          <h1>Paige Bendall</h1>
          <h2>Web Developer</h2>
          <div className="hero__container-text_buttons">
            <button>Latest Projects</button>
            <button>Contact Me</button>
          </div>
          <img src="#" alt="scroller" />
        </div>
      </div>
      <div className="hero__container-image">
        <img src="/src/assets/hero.png" alt="heroimage" />
      </div>
    </div>
  );
};

export default Hero;
