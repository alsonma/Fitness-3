import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-subtitle">WELCOME TO FITNESS 3</p>

        <h1>
          BUILD YOUR
          <br />
          STRONGER SELF
        </h1>

        <p className="hero-description">
          Transform your body, improve your strength, and achieve your fitness
          goals with expert trainers and personalized workout plans.
        </p>

        <div className="hero-buttons">
          <button className="hero-btn">JOIN NOW</button>
          <button className="hero-outline-btn">EXPLORE PROGRAMS</button>
        </div>
      </div>

      <div className="hero-image">
        <img
          src="./src/assets/gallery-1.jpg"
          alt="Gym Workout"
        />
      </div>
    </section>
  );
}

export default Hero;