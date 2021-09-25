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
        github="https://github.com/Gr3it/School-Elaborate"
        link="https://hotelmeano.altervista.org/"
        repo
        hosted
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
            network infrastructures for a Hotel based in Meano, a small city of
            Trento. The network infrastructure has to been designed across 2
            locations: the hotel and the office building. It also has to
            implement an advanced wifi system for the hotel users and the
            offices. For the website the requirements were to create the main
            page showing the hotel build and what are the services offered by
            the hotel personal, farther more it has to include rooms prices,
            contact, and photos. The most important request for the site was to
            create a system that would let customers make a reservation of rooms
            on their own directly from the website.
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
            This page has the task to drive the customers through the multiple
            steps to complete a reservation. The booking process is divided into
            4 steps: stay period selection, rooms selection, personal
            information insertion, and total costs of the booking.
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
            At the first step, the customer has to select the period in which he
            wishes to stay. Those dates are used to show in the next step the
            rooms available.
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
            In the second step, the page shows on a 3d map of the hotel which
            rooms are already occupied, and which are available. The customer
            clicking on the map can select and deselect the rooms that want to
            book.
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
            In the third step, the customer has to insert his personal
            information that are needed to accomplish the booking. Those data
            include information such ad: first and second name, fiscal code,
            email, and date of birth. Those data will be stored in the hotel
            database.
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
            in the last step, the total cost of the overnight stay is presented
            to the customer, broken down in detail.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Hotel_Meano;
