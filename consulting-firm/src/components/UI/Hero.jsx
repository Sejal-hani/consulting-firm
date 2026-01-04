import React from 'react';
import '../../styles/Hero.css';

import heroDarkImg from '../../images/hero-img.png';
import lightHeroBg from '../../images/light-hero-bg.jpg';

const Hero = ({ theme }) => {
  return (
    <section className="hero__section">
      <div className="container">
        <div className="hero__wrapper">

          <div className="hero__content">
            <h2>We're Creating Perfect</h2>
            <h2>Digital Products</h2>
            <h2 className="highlight">Promote your brand</h2>

            <p className="description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati ad
              eos sint tempora ipsam laborum, similique hic, ipsum laboriosam
              blanditiis eum porro itaque quas minus. Laboriosam rerum animi
              perferendis tempore?
            </p>

            <div className="hero__btns">
              <button className="primary__btn">Get Started Now</button>
              <button className="secondary__btn">Discover More</button>
            </div>
          </div>

          <div className="hero__img">
            <img
              src={theme === 'light' ? lightHeroBg : heroDarkImg}
              alt="Digital products promotion"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
