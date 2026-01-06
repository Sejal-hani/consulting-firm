import React, { useState, useEffect, useRef } from "react";
import "../../styles/Blog.css";

import videoImg from "../../images/video.png";
import articleImg from "../../images/article.png";
import caseStudyImg from "../../images/case-study.png";

const blogData = [
  {
    imgUrl: videoImg,
    title: "Video Insights",
    desc: "Watch expert-led videos showcasing our solutions, processes, and real-world results.",
  },
  {
    imgUrl: articleImg,
    title: "Expert Articles",
    desc: "Read in-depth articles on technology trends, digital transformation, and best practices.",
  },
  {
    imgUrl: caseStudyImg,
    title: "Client Case Studies",
    desc: "Explore how we’ve helped businesses solve challenges and achieve measurable outcomes.",
  },
];

const AUTO_DELAY = 4000;

const Blog = () => {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);

  const startAutoSlide = () => {
    stopAutoSlide();
    timerRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % blogData.length);
    }, AUTO_DELAY);
  };

  const stopAutoSlide = () => {
    if (timerRef.current) clearInterval(timerRef.current);
  };

  useEffect(() => {
    startAutoSlide();
    return stopAutoSlide;
  }, []);

  const next = () => {
    setIndex((prev) => (prev + 1) % blogData.length);
    startAutoSlide(); // reset timer after click
  };

  const prev = () => {
    setIndex((prev) =>
      prev === 0 ? blogData.length - 1 : prev - 1
    );
    startAutoSlide(); // reset timer after click
  };

  return (
    <section className="blog" id="blog">
      <div className="container">

        <div className="blog__top-content">
          <h6 className="subtitle">Insights & Resources</h6>
          <h2>
            Explore Insights, Case Studies &{" "}
            <span className="highlight">Expert Perspectives</span>
          </h2>
        </div>

        <div className="blog__carousel">
          <button className="nav-btn left" onClick={prev}>‹</button>

          <div className="blog__viewport">
            <div
              className="blog__track"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {blogData.map((item, i) => (
                <div className="blog__item" key={i}>
                  <div className="blog__img">
                    <img src={item.imgUrl} alt={item.title} />
                  </div>

                  <h3>{item.title}</h3>

                  <p className="blog__desc">{item.desc}</p>

                  <span className="learn__more">Read More →</span>
                </div>
              ))}
            </div>
          </div>

          <button className="nav-btn right" onClick={next}>›</button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
