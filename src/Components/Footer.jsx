/* Libraries */
import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="footer-container container-width">
        <div className="footer-data">
          <img
            src={process.env.PUBLIC_URL + "/Logo.svg"}
            alt="Logo"
            className="footer-logo"
          />
          <a
            href="https://github.com/Gr3it"
            rel="noreferrer nooperner"
            target="_blank"
            className="footer-link"
          >
            Portfolio Repository
          </a>
          <div className="footer-email">
            Email: <br />
            emmanuele.zini11@gmail.com
          </div>
          <div className="footer-copyright">2021 Created By Emanuele Zini</div>
        </div>
        <div className="footer-project">
          <div className="footer-title">Project</div>
          <Link to={"/"} className="footer-link">
            Cooming Soon
          </Link>
          <Link to={"/hotel-meano"} className="footer-link">
            Hotel Meano
          </Link>
          <Link to={"/flynet"} className="footer-link">
            Flynet
          </Link>
        </div>
        <div className="footer-experiments">
          <div className="footer-title">Experiment</div>
          <a
            href="https://github.com/Gr3it/Building_plant"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            3D Building plan
          </a>
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            PlaceHolder
          </a>
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            PlaceHolder
          </a>
        </div>
        <div className="footer-about">
          <div className="footer-title">About Me</div>
          <a href="/" className="footer-link">
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
          <a
            href="https://www.twitch.tv/gr3it"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            Twitch
          </a>
        </div>
      </div>
    </>
  );
}

export default Footer;
