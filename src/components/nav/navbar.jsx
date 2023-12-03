import React, { Component, useState } from "react";
import "../assets/unicons/css/line.css";
import "./navbar.css";    
const Navb = () => {
  const [Toggle, showMenu] = useState(false);
    return (
      <header className="header">
        <nav className="nav contain">
          <p href="index.html" className="nav_logo">Adeyemi</p>
          <div className={Toggle ? "nav_menu show-menu" : "nav_menu"}> 
            <ul className="nav_list grid">
              <li className="nav_item">
                <p href="#home" className="nav_link active-link">
                  <i className="uil uil-estate nav_icon"></i>Home
                </p>
              </li>

              <li className="nav_item">
                <p href="#about" className="nav_link active-link">
                  <i className="uil uil-user nav_icon"></i>User
                </p>
              </li>

              <li className="nav_item">
                <p href="#skills" className="nav_link active-link">
                  <i className="uil uil-file-alt nav_icon"></i>Skills
                </p>
              </li>
              <li className="nav_item">
                <p href="#services" className="nav_link active-link">
                  <i className="uil uil-briefcase nav_icon"></i>Services
                </p>
              </li>
              <li className="nav_item">
                <p href="#portfolio" className="nav_link active-link">
                  <i className="uil uil-scenery nav_icon"></i>Portfolio
                </p>
              </li>
              <li className="nav_item">
                <p href="#contact" className="nav_link active-link">
                  <i className="uil uil-message nav_icon"></i>Contact
                </p>
              </li>
            </ul>
            <i className="uil uil-times nav_close" onClick={() => showMenu(!Toggle)}></i>
          </div>
          <div className="nav_toggle" onClick={() => showMenu(!Toggle)}>
            <i className="uil uil-apps"></i>
          </div>
        </nav>
      </header>
    );
  }


export default Navb;
