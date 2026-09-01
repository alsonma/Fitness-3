import React from "react";
import "./Team.css";

function Team() {
  const trainers = [
    {
      image: "../../assets/trainer-1.jpg",
      specialization: "Gymer",
      name: "Martin Alex",
      description:
        "Body Building, the original LES MILLS barbell class, will sculpt, tone and strengthen your entire body, fast!",
    },
    {
      image: "/images/trainer-2.jpg",
      specialization: "Body Building",
      name: "Martin Alex",
      description:
        "Body Building, the original LES MILLS barbell class, will sculpt, tone and strengthen your entire body, fast!",
    },
    {
      image: "/images/trainer-3.jpg",
      specialization: "Yoga",
      name: "Martin Alex",
      description:
        "Body Building, the original LES MILLS barbell class, will sculpt, tone and strengthen your entire body, fast!",
    },
    {
      image: "/images/trainer-3.jpg",
      specialization: "Cardio",
      name: "Martin Alex",
      description:
        "Body Building, the original LES MILLS barbell class, will sculpt, tone and strengthen your entire body, fast!",
    },
  ];

  return (
    <section className="team-section">
      <div className="team-container">

        {/* Section Header */}
        <div className="team-header">
          <div className="section-title">
            <h2>Our Trainer</h2>
            <p>
              Our fitness experts can help you discover new training
              techniques.
            </p>
          </div>

          <a href="#" className="primary-btn">
            View All <span>»</span>
          </a>
        </div>

        {/* Trainers */}
        <div className="team-members">
          {trainers.map((trainer, index) => (
            <div className="trainer-card" key={index}>

              {/* Trainer Image */}
              <div className="member-pic">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                />
              </div>

              {/* Trainer Information */}
              <div className="member-text">
                <span>{trainer.specialization}</span>

                <h5>{trainer.name}</h5>

                <p>{trainer.description}</p>

                <div className="member-social">
                  <a href="#" aria-label="Facebook">
                    f
                  </a>

                  <a href="#" aria-label="Twitter">
                    𝕏
                  </a>

                  <a href="#" aria-label="Pinterest">
                    p
                  </a>

                  <a href="#" aria-label="Vimeo">
                    v
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Team;



