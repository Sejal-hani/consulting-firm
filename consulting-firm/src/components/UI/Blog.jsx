import React, { useState } from "react";
import "../../styles/Blog.css";

import videoImg from "../../images/video.png";
import articleImg from "../../images/article.png";
import caseStudyImg from "../../images/case-study.png";

const blogData = [
  { imgUrl: videoImg, title: "Video", desc: "To know about our work, watch some videos." },
  { imgUrl: articleImg, title: "Articles", desc: "Do you want to read articles about our work?" },
  { imgUrl: caseStudyImg, title: "Case Study", desc: "Check out case studies of our previous work." },
];

const Blog = () => {
  const [active, setActive] = useState(1); // Start with the middle one

  const next = () => setActive((prev) => (prev === blogData.length - 1 ? 0 : prev + 1));
  const prev = () => setActive((prev) => (prev === 0 ? blogData.length - 1 : prev - 1));

  return (
    <section className="blog">
      <div className="container">
        <div className="blog__top-content">
          <h6 className="subtitle">Our Blog</h6>
          <h2>Let's have a look from our <span className="highlight">Blog</span></h2>
        </div>

        <div className="blog__carousel">
          <button className="nav-btn left" onClick={prev}>‹</button>

          <div className="blog__track">
            {blogData.map((item, index) => {
              // Logic to determine if slide is active, left, or right
              let position = "nextSlide"; 
              if (index === active) {
                position = "activeSlide";
              } else if (
                index === active - 1 || 
                (active === 0 && index === blogData.length - 1)
              ) {
                position = "lastSlide";
              }

              return (
                <div
                  key={index}
                  className={`blog__item ${position}`}
                  onClick={() => setActive(index)} // Trigger on CLICK
                >
                  <h3>{item.title}</h3>
                  <div className="blog__img">
                    <img src={item.imgUrl} alt={item.title} />
                  </div>
                  <p className="blog__desc">{item.desc}</p>
                  <span className="learn__more">Learn More →</span>
                </div>
              );
            })}
          </div>

          <button className="nav-btn right" onClick={next}>›</button>
        </div>
      </div>
    </section>
  );
};

export default Blog;