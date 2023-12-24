import React from "react";
import './about.css'
import AboutImg from "./about.png";
import Info from "./Info";
const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My Introduction</span>
      
      <div className="about__container contain grid">
        <img src={AboutImg} alt="" className="about__img" />
        <div className="about__data">
          <Info />

          <p className="about__description">Fullstack
            developer, I create web pages with UI / UX user interface,
            I have years of web development education and i am open to job opportunities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
