/* Libraries */
import React from "react";

/* Component/Pages */
import ProjectMenu from "../Components/ProjectMenu";
import Footer from "../Components/Footer";

function Flynet({ color }) {
  return (
    <div className="flex-columns align-center">
      <ProjectMenu github="https://github.com/Gr3it/Servlet-Flynet" repo />
      <div className="project-home container-large">
        <h2 className="home-subtitle">Flynet</h2>
        <h1 className="project-title">
          Cagliari airport website, flights infos and manage panel
        </h1>
      </div>
      <div
        className="project-first-image flex-center"
        style={{ backgroundColor: color }}
      >
        <div className="container-large">
          <img
            className="width100"
            src={process.env.PUBLIC_URL + "/Assets/Flynet/Home.jpg"}
            alt="Site Homepage"
          />
        </div>
      </div>
      <div className="flex-columns container-large">
        <div className="project-description">
          <h1 className="width100 sub-section-title">The challenge</h1>
          <p className="width100 paragraph-justify">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>
      <div
        className="project-presentation-images"
        style={{ backgroundColor: color }}
      >
        <div className="grid-image-container">
          <img
            src={process.env.PUBLIC_URL + "/Assets/Flynet/Home.jpg"}
            alt="Home"
          />
          <img
            src={process.env.PUBLIC_URL + "/Assets/Flynet/Arrivals.jpg"}
            alt="Arrivals"
          />
          <img
            src={process.env.PUBLIC_URL + "/Assets/Flynet/Login.jpg"}
            alt="Login"
          />
          <img
            src={process.env.PUBLIC_URL + "/Assets/Flynet/Maps.jpg"}
            alt="Maps"
          />
          <img
            src={process.env.PUBLIC_URL + "/Assets/Flynet/Search.jpg"}
            alt="Search"
          />
          <img
            src={process.env.PUBLIC_URL + "/Assets/Flynet/Admin.jpg"}
            alt="Admin"
          />
        </div>
      </div>
      <div className="flex-columns container-large">
        <div className="project-description">
          <h1 className="width100 sub-section-title">The challenge</h1>
          <p className="width100 paragraph-justify">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </p>
        </div>
        <div className="project-row">
          <div
            className="project-row-image-dual"
            style={{ backgroundColor: color }}
          >
            <img
              src={process.env.PUBLIC_URL + "/Assets/Flynet/Arrivals.jpg"}
              alt="Arrivals Page"
            />
            <img
              src={process.env.PUBLIC_URL + "/Assets/Flynet/Departures.jpg"}
              alt="Departures Page"
            />
          </div>
          <p className="width50 paragraph-justify">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita
          </p>
        </div>
        <div className="project-row">
          <div className="project-row-image" style={{ backgroundColor: color }}>
            <img
              src={process.env.PUBLIC_URL + "/Assets/Flynet/Search.jpg"}
              alt="Search Page"
            />
          </div>
          <p className="width50 paragraph-justify">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita
          </p>
        </div>
        <div className="project-row">
          <div className="project-row-image" style={{ backgroundColor: color }}>
            <img
              src={process.env.PUBLIC_URL + "/Assets/Flynet/Admin.jpg"}
              alt="Admin Page"
            />
          </div>
          <p className="width50 paragraph-justify">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Flynet;
