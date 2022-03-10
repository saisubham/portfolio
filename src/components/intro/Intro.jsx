import React from "react";

import Hero from "../../img/subham.png";
import "./Intro.css";

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-greet">Hi 👋 I am</h2>
          <h1 className="i-name">Subham Sai Behera</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Programmer</div>
              <div className="i-title-item">Backend Dev</div>
              <div className="i-title-item">Frontend Dev</div>
              <div className="i-title-item">Artist</div>
            </div>
          </div>
          <div className="i-bio">
            I am a Computer Science undergraduate from NIT Rourkela. I develop
            both frontend and backend applications and am always eager to learn
            new and interesting technologies.
          </div>
        </div>
      </div>
      <div className="i-right">
        <div className="i-hero-bg"></div>
        <img className="i-hero" src={Hero} alt="Subham Sai Behera" />
      </div>
    </div>
  );
};

export default Intro;
