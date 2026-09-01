
import React, { useState } from "react";
import "./Class.css";

function Class() {
  const [activeClass, setActiveClass] = useState(0);

  const classes = [
    {
      title: "Body Building",
      image: "./src/assets/class-1.jpg",
      authorImage: "./src/assets/author-1.jpg",
      description:
        "Body Building is designed to sculpt, tone and strengthen your entire body. Focusing on weight training and high repetition movements, you'll build strength, burn calories and develop lean muscle conditioning.",
    },
    {
      title: "Racing Running",
      image: "./src/assets/class-2.jpg",
      authorImage: "./src/assets/author-2.jpg",
      description:
        "Improve your speed, stamina and endurance with our racing and running sessions. These workouts are designed to improve cardiovascular fitness and help you reach your performance goals.",
    },
    {
      title: "Yoga Fitness",
      image: "./src/assets/class-3.jpg",
      authorImage: "./src/assets/author-3.jpg",
      description:
        "Yoga Fitness combines strength, flexibility and controlled breathing. Improve your balance, mobility and mental focus through carefully designed yoga sessions.",
    },
    {
      title: "Kick Boxing",
      image: "./src/assets/class-4.jpg",
      authorImage: "./src/assets/author-4.jpg",
      description:
        "Kick boxing is an energetic full-body workout that improves strength, coordination, speed and endurance while helping you stay active and confident.",
    },
    {
      title: "Cardio Workout",
      image: "./src/assets/class-5.jpg",
      authorImage: "./src/assets/author-5.jpg",
      description:
        "Our cardio workouts are designed to improve heart health, stamina and overall fitness. Enjoy dynamic exercises that keep you moving and energized.",
    },
    {
      title: "Martial Arts",
      image: "./src/assets/class-6.jpg",
      authorImage: "./src/assets/author-6.jpg",
      description:
        "Learn martial arts techniques while improving strength, balance, flexibility and discipline. Our sessions are suitable for different fitness levels.",
    },
  ];

  return (
    <section className="class-section">
      <div className="class-container">

        {/* Section Header */}
        <div className="class-header">
          <div className="section-title">
            <h2>Our Class</h2>
            <p>
              Our fitness experts can help you discover new training
              techniques and exercises that offer a dynamic and efficient
              full-body workout.
            </p>
          </div>

          <a href="#" className="primary-btn">
            View All Schedule
          </a>
        </div>

        {/* Active Class */}
        <div className="class-item">
          <div className="class-main">

            <div className="class-image">
              <img
                src={classes[activeClass].image}
                alt={classes[activeClass].title}
              />
            </div>

            <div className="class-text">
              <h3>{classes[activeClass].title}</h3>

              <p>{classes[activeClass].description}</p>

              <a href="#" className="schedule-btn">
                View Schedule
                <span> →</span>
              </a>
            </div>

          </div>
        </div>

        {/* Class Navigation */}
        <div className="class-author">
          <div className="class-nav">
            {classes.map((item, index) => (
              <button
                key={index}
                className={`class-nav-item ${
                  activeClass === index ? "active" : ""
                }`}
                onClick={() => setActiveClass(index)}
              >
                <div className="author-text">
                  <img
                    src={item.authorImage}
                    alt={item.title}
                  />
                  <h5>{item.title}</h5>
                </div>
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Class;

