
import React from "react";
import "./News.css";

function News() {
  const news = [
    {
      image: "./src/assets/latest-1.jpg",
      date: "Dec 11, 2026",
      comments: "6 Comments",
      title: "5 Essential Exercises for Building Stronger Muscles",
    },
    {
      image: "./src/assets/latest-2.jpg",
      date: "Dec 19, 2026",
      comments: "6 Comments",
      title: "Everything You Need to Know Before Your First Gym Workout",
    },
    {
      image: "./src/assets/latest-3.jpg",
      date: "Dec 23, 2026",
      comments: "6 Comments",
      title: "5 Tips to Improve Your Fitness and Reach Your Goals",
    },
  ];

  return (
    <section className="latest-news-section">
      <div className="latest-news-container">

        {/* Section Title */}
        <div className="section-title">
          <h2>Latest News</h2>
          <p>A range of services adapted to your needs</p>
        </div>

        {/* News Cards */}
        <div className="latest-news-grid">
          {news.map((item, index) => (
            <div className="latest-items" key={index}>

              <div className="latest-pic">
                <img src={item.image} alt={item.title} />
              </div>

              <div className="latest-text">

                <div className="latest-tag">
                  <div className="tag-clock">
                    <span>◷</span>
                    {item.date}
                  </div>

                  <div className="tag-comments">
                    <span>💬</span>
                    {item.comments}
                  </div>
                </div>

                <h5>
                  <a href="#">{item.title}</a>
                </h5>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default News;
