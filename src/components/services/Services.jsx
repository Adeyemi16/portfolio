import React, { useState } from "react";
import './services.css';

const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What i offer</span>

      <div className="services__container contain grid">
        <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">
              Frontend <br /> Developer
            </h3>
          </div>

          <span className="services__button" onClick={() =>
            toggleTab(1)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div className={toggleState === 1 ? "services__modal active__modal" : "services__modal"}>
            <div className="services__modal-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

              <h3 className="services__modal-title">Frontend Developer</h3>
              <p className="services__modal-description">
                Service with more than 2 years of experience. Providing quality
                work to clients and companies.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>I
                  develop the user interface.
                  <p className="services__modal__info"></p>
                </li>

                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  Web page development.
                  <p className="services__modal__info"></p>
                </li>

                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>I
                  create ux element interactions.
                  <p className="services__modal__info"></p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-arrow services__icon"></i>
            <h3 className="services__title">
              Backend <br /> Developer
            </h3>
          </div>

          <span onClick={() => toggleTab(2)}
            className="services__button">
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div className={toggleState === 2 ? "services__modal active__modal" : "services__modal"}>
            <div className="services__modal-content">
              <i onClick={() =>
            toggleTab(0)} className="uil uil-times services__modal-close"></i>

              <h3 className="services__modal-title">Backend Developer</h3>
              <p className="services__modal-description">
                Backend for many websites including ecommerce, task management and so on
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>I
                  write schema for various aspects of the website.
                  <p className="services__modal__info"></p>
                </li>

                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  Web page development.
                  <p className="services__modal__info"></p>
                </li>

                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>I
                  write controllers for various functions.
                  <p className="services__modal__info"></p>
                </li>

                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>I
                  develop Api's for the frontend developer.
                  <p className="services__modal__info"></p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-edit services__icon"></i>
            <h3 className="services__title">
              Mobile <br /> Developer
            </h3>
          </div>

          <span onClick={() => toggleTab(3)} className="services__button">
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div className={toggleState === 3 ? "services__modal active__modal" : "services__modal"}>
            <div className="services__modal-content">
              <i onClick={() =>
            toggleTab(0)} className="uil uil-times services__modal-close"></i>

              <h3 className="services__modal-title">Mobile
                Developer</h3>
              <p className="services__modal-description">
                Developing interactive applications for android and ios
              </p>
 
              <ul className="services__modal-services grid">
                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>I
                  develop the mobile interface.
                  <p className="services__modal__info"></p>
                </li>

                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  I write backend code for the app
                  <p className="services__modal__info"></p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
