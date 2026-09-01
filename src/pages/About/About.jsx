import React from 'react';
import './About.css';

export default function About() {
  return (
    <section className="about-section">
      <div className="about-container">

        <div className="about-image">
          <img
            src="/images/author-3.jpg"
            alt="Gym training"
          />
        </div>

        <div className="about-content">
          <span className="about-subtitle">ABOUT US</span>

          <h1>
            BUILD YOUR BODY.
            <br />
            <span>TRANSFORM YOUR LIFE.</span>
          </h1>

          <p>
            Welcome to our gym, where fitness meets dedication. We provide
            professional training, modern equipment, and personalized guidance
            to help you achieve your fitness goals.
          </p>

          <p>
            Our experienced trainers create effective workout plans based on
            your fitness level and goals. We also provide personalized
            nutrition guidance through our trainers to support your overall
            health and performance.
          </p>

          <div className="about-features">
            <div className="feature">
              <h3>01</h3>
              <div>
                <h4>Expert Trainers</h4>
                <p>Professional trainers to guide your fitness journey.</p>
              </div>
            </div>

            <div className="feature">
              <h3>02</h3>
              <div>
                <h4>Personalized Training</h4>
                <p>Workout plans designed according to your goals.</p>
              </div>
            </div>

            <div className="feature">
              <h3>03</h3>
              <div>
                <h4>Nutrition Guidance</h4>
                <p>Trainer-provided nutrition plans for better results.</p>
              </div>
            </div>
          </div>

          <button className="about-btn">LEARN MORE</button>
        </div>

      </div>
    </section>
  );
}