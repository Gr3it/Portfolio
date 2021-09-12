import React from "react";

import "../CSS/ProjectPages.css";

import ProjectMenu from "../Components/ProjectMenu";
import Footer from "../Components/Footer";

function Hotel_Meano({ color }) {
  return (
    <div className="flex-columns align-center">
      <ProjectMenu
        github="https://github.com/Gr3it/School-Elaborate"
        link="https://hotelmeano.altervista.org/"
        repo
        hosted
      />
      <div className="project-home container-large">
        <h2 className="home-subtitle">Hotel Meano</h2>
        <h1 className="project-title">
          Hotel Meano website: presentation of the hotel and booking
        </h1>
      </div>
      <div
        className="project-first-image flex-center"
        style={{ backgroundColor: color }}
      >
        <div className="container-large">
          <img
            className="width100"
            src={process.env.PUBLIC_URL + "/Assets/HotelMeano/Home.jpg"}
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
            src={process.env.PUBLIC_URL + "/Assets/HotelMeano/Contact.png"}
            alt="Contact"
          />
          <img
            src={process.env.PUBLIC_URL + "/Assets/HotelMeano/Proposals.jpg"}
            alt="Proposals"
          />
          <img
            src={process.env.PUBLIC_URL + "/Assets/HotelMeano/Activities.jpg"}
            alt="Activities"
          />
          <img
            src={process.env.PUBLIC_URL + "/Assets/HotelMeano/PhotoGallery.jpg"}
            alt="PhotoGallery"
          />
          <img
            src={process.env.PUBLIC_URL + "/Assets/HotelMeano/Prices.jpg"}
            alt="Prices"
          />
          <img
            src={process.env.PUBLIC_URL + "/Assets/HotelMeano/About.jpg"}
            alt="About"
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
          <div className="project-row-image" style={{ backgroundColor: color }}>
            <img
              src={process.env.PUBLIC_URL + "/Assets/HotelMeano/Page1.jpg"}
              alt="Date Selection"
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
              src={process.env.PUBLIC_URL + "/Assets/HotelMeano/Page2.jpg"}
              alt="Room Selection"
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
              src={process.env.PUBLIC_URL + "/Assets/HotelMeano/Page3.jpg"}
              alt="Personal Data Registration"
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
              src={process.env.PUBLIC_URL + "/Assets/HotelMeano/Page4.jpg"}
              alt="Receipt Page"
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

export default Hotel_Meano;
