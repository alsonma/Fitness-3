import React from "react";
import "./Programs.css";

function Program() {
  return (
    <section className="program-section">
      <div className="program-container">
        <div className="program-row">

          {/* Program Content */}
          <div className="program-content">
            <div className="section-title">
              <h2>Our Program</h2>
              <p>
                Our fitness experts can help you discover new training
                techniques and exercises that offer a dynamic and efficient
                full-body workout.
              </p>
            </div>

            <div className="program-items">

              <div className="single-program-item">
                <img src="/images/icon-1.png" alt="Weight Lifting" />
                <h5>Weight Lifting</h5>
                <p>
                  We have a wide choice of classes that are a great complement
                  to any training programme.
                </p>
              </div>

              <div className="single-program-item color-1">
                <img src="/images/icon-2.png" alt="Body Building" />
                <h5>Body Building</h5>
                <p>
                  We have a wide choice of classes that are a great complement
                  to any training programme.
                </p>
              </div>

              <div className="single-program-item color-2">
                <img src="/images/icon-3.png" alt="Healthy" />
                <h5>Healthy</h5>
                <p>
                  We have a wide choice of classes that are a great complement
                  to any training programme.
                </p>
              </div>

              <div className="single-program-item color-3">
                <img src="/images/icon-4.png" alt="Cardio" />
                <h5>Cardio</h5>
                <p>
                  We have a wide choice of classes that are a great complement
                  to any training programme.
                </p>
              </div>

            </div>
          </div>

          {/* Video */}
          <div className="program-video-container">
            <div className="program-video">
              <img
                src="/images/video-bg.jpg"
                alt="Gym Training"
              />

              <div className="play-btn">
                <a
                  href="https://www.youtube.com/watch?v=SlPhMPnQ58k"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>▶</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Program;

