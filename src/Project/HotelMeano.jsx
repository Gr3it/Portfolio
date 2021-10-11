import React from "react";

import "../CSS/ProjectPages.css";
import "../CSS/Explore.css";

import ProjectMenu from "../Components/ProjectMenu";
import Footer from "../Components/Footer";

function Hotel_Meano({ color }) {
  document.documentElement.style.setProperty("--Scrollbar-color", color);
  return (
    <div className="flex-columns align-center">
      <ProjectMenu
        githubLink="https://github.com/Gr3it/School-Elaborate"
        webSiteLink="https://hotelmeano.altervista.org/"
        github
        webSite
      />
      <div className="project-home container-large">
        <h2 className="home-subtitle project-subtitle">Hotel Meano</h2>
        <h1 className="project-title">
          Presentation of the hotel and implementation of a booking system
        </h1>
        <div
          onClick={() => {
            document.getElementById("anchor-image").scrollIntoView();
          }}
          className="explore-container"
        >
          <h2 className="explore-text">Explore more</h2>
          <svg
            className="explore-svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M413.1 222.5l22.2 22.2c9.4 9.4 9.4 24.6 0 33.9L241 473c-9.4 9.4-24.6 9.4-33.9 0L12.7 278.6c-9.4-9.4-9.4-24.6 0-33.9l22.2-22.2c9.5-9.5 25-9.3 34.3.4L184 343.4V56c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v287.4l114.8-120.5c9.3-9.8 24.8-10 34.3-.4z"
            ></path>
          </svg>
        </div>
      </div>
      <div
        className="project-first-image flex-center"
        style={{ backgroundColor: color }}
      >
        <div className="container-large">
          <div
            id="anchor-image"
            style={{ position: "absolute", top: "-6.875rem", left: 0 }}
          ></div>
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
            The goal of this project was to develop a website and redesign the
            network infrastructures for a hotel based in the small town of
            Meano, nearby Trento. We were asked to create the main webpage of
            the hotel, which had to show the hotel’s building and include the
            services offered to the guests as well as room prices and contact
            information. The network infrastructure required to be designed
            across two locations: the hotel and the office building. The most
            important request for the website was to conceive a system through
            which customers could make a reservation online. An additional
            directive was to implement an advanced Wifi system both for the
            hotel’s guests and offices.
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
          <h1 className="width100 sub-section-title">The booking page</h1>
          <p className="width100 paragraph-justify">
            This page leads the customer through the multiple-step process of
            making a reservation. The four-step process is presented in the
            following section.
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
            The guest is first asked to select the desired length of stay. This
            information is used by the system to show which rooms are available
            for the booking.
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
            The next page will lead to a 3D map of the hotel displaying which
            rooms are available for a reservation and which ones are already
            booked. The customer can select and deselect the rooms of interest
            by interacting with the map.
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
            Once selected the desired room, the guest is asked to fill in their
            personal information relevant for the finalizing of the booking,
            such as name, surname, ID information, and email. The data will be
            stored in the hotel database.
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
            At the last step, the total amount and details of the reservation
            are presented to the customer. The information for paying the
            deposit, which is used as a confirmation of the booking is provided.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Hotel_Meano;
