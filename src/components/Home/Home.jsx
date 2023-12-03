import React, { Component } from "react";
import { Socials } from "./Socials";
import { Data } from "./Data"
import ScrollDown from "./ScrollDown";
import "./home.css";
class Home extends Component {
  state = {};
  render() {
    return (
      <section className="home section" id="home">
        <div className="home__container contain grid">
          <div className="home__content grid">
            <Socials />

            <div className="home__img"></div>

             <Data /> 
          </div>
          <ScrollDown />
        </div>
      </section>
    );
  }
}

export default Home;
