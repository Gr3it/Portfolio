import React from "react";
import { Link } from "react-router-dom";

import "../CSS/Footer.css";

function Footer() {
  return (
    <footer className="flex-center footer" id="footer">
      <div className="container-large footer-container">
        <div className="footer-columns">
          <img
            src={process.env.PUBLIC_URL + "/Logo.svg"}
            alt="Logo"
            className="footer-logo"
          />
          <a
            href="https://github.com/Gr3it/portfolio"
            rel="noreferrer noopener"
            target="_blank"
            className="footer-link"
          >
            Portfolio Repository
          </a>
          <p className="footer-email">
            Email: <br />
            <a href="mailto:contact@emanuelezini.com" className="footer-link">
              contact@emanuelezini.com
            </a>
          </p>
          <p className="footer-copyright">
            2021 Created By Emanuele Zini
            <br />
            Content Writer Assistant: Martina Zini
          </p>
        </div>
        <div className="footer-columns">
          <h1 className="footer-title">Projects</h1>
          <Link to={"/crypto-price-tracker"} className="footer-link">
            Crypto Price Tracker
          </Link>
          <Link to={"/color-screentest"} className="footer-link">
            Color Screentest
          </Link>
          <Link to={"/hotel-meano"} className="footer-link">
            Hotel Meano
          </Link>
          <Link to={"/flynet"} className="footer-link">
            Flynet
          </Link>
        </div>
        <div className="footer-columns">
          <h1 className="footer-title">Experiments</h1>
          <a
            href="https://github.com/Gr3it/Building_plant"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            3D Building plan
          </a>
          <a
            href="https://github.com/Gr3it/learning-loading-animation"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            Loading Animation
          </a>
          <a
            href="https://github.com/Gr3it/learning-gradient-text"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            Gradient color text
          </a>
        </div>
        <div className="footer-columns">
          <h1 className="footer-title">About Me</h1>
          <a
            href="/Zini_Emanuele_English.pdf"
            download="Emanuele Zini CV"
            className="footer-link"
          >
            Resume
          </a>
          <a
            href="https://github.com/Gr3it"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            GitHub
          </a>
          <a
            href="https://buidlguidl.com/builders/0x2F79c1ae4d60Bb2DfF0389782359E3676712e6E3"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            Build Guild
          </a>
          <a
            href="https://www.sololearn.com/profile/19666283"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            SoloLearn
          </a>
          <a
            href="https://cssbattle.dev/player/emanuele_zini"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            CSS-Battle
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
