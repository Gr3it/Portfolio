import React from "react";

import "../CSS/ProjectPages.css";
import "../CSS/Explore.css";

import ProjectMenu from "../Components/ProjectMenu";
import Footer from "../Components/Footer";

function CryptoPriceTracker({ color }) {
  document.documentElement.style.setProperty("--Scrollbar-color", color);
  return (
    <div className="flex-columns align-center">
      <ProjectMenu
        githubLink="https://github.com/Gr3it/Crypto-Price-Tracker-Web"
        webSiteLink="https://crypto-price-tracker.it"
        github
        webSite
      />
      <div className="project-home container-large">
        <h2 className="home-subtitle project-subtitle">Crypto Price Tracker</h2>
        <h1 className="project-title">
          Tracking live crypto prices and plotting price charts
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
            src={process.env.PUBLIC_URL + "/Assets/CryptoPriceTracker/Home.png"}
            alt="Site Homepage"
          />
        </div>
      </div>
      <div className="flex-columns container-large">
        <div className="project-description">
          <h1 className="width100 sub-section-title">The challenge</h1>
          <p className="width100 paragraph-justify">
            I decided to develop this website with the aim to learn how to use a
            chart library and to call APIs. A price tracker was the best fit for
            putting in practice my knowledge on plotting charts and using APIs
            together on one single website. This project wants to be a simple.
            It includes a menu through which the user can change some settings,
            like: currency and the color theme.
          </p>
        </div>
      </div>
      <div
        className="project-presentation-images"
        style={{ backgroundColor: color }}
      >
        <div className="grid-image-container">
          <img
            src={
              process.env.PUBLIC_URL + "/Assets/CryptoPriceTracker/Scrolled.png"
            }
            alt="Scrolled homepage"
          />
          <img
            src={
              process.env.PUBLIC_URL + "/Assets/CryptoPriceTracker/Ethereum.png"
            }
            alt="Ethereum page"
          />
          <img
            src={process.env.PUBLIC_URL + "/Assets/CryptoPriceTracker/Home.png"}
            alt="Homepage"
          />
          <img
            src={
              process.env.PUBLIC_URL + "/Assets/CryptoPriceTracker/Bitcoin.png"
            }
            alt="Bitcoin page"
          />
          <img
            src={
              process.env.PUBLIC_URL + "/Assets/CryptoPriceTracker/Search.png"
            }
            alt="Search"
          />
          <img
            src={
              process.env.PUBLIC_URL +
              "/Assets/CryptoPriceTracker/BinanceCoin.png"
            }
            alt="Binance Coin Page"
          />
        </div>
      </div>
      <div className="flex-columns container-large">
        <div className="project-description">
          <h1 className="width100 sub-section-title">The pages</h1>
          <p className="width100 paragraph-justify">
            On the site, we can find two main components. The main page shows
            all the crypto ordered by market cap in an infinite scrolling page.
            The specific crypto page shows all the info about a crypto currency.
          </p>
        </div>
        <div className="project-row">
          <div className="project-row-image" style={{ backgroundColor: color }}>
            <img
              src={
                process.env.PUBLIC_URL + "/Assets/CryptoPriceTracker/Search.png"
              }
              alt="Search"
            />
          </div>
          <p className="width50 paragraph-justify">
            The homepage loads the data in a dynamic mode in groups of one
            hundred. When the end of the current data is reached the subsequent
            data will be loaded. This page also includes a search bar that
            allows the users to search the crypto by name.{" "}
          </p>
        </div>
        <div className="project-row">
          <div className="project-row-image" style={{ backgroundColor: color }}>
            <img
              src={
                process.env.PUBLIC_URL +
                "/Assets/CryptoPriceTracker/BinanceCoin.png"
              }
              alt="Crypto Page"
            />
          </div>
          <p className="width50 paragraph-justify">
            When a cryptocurrency is clicked a dedicated page will open. This
            page will include all the information about the currency, a simple
            bidirectional converter, and the price chart. The scope of the price
            chart can be switched between <i>30 days</i> and <i>max</i>. While
            the first provides thanks to the smaller time frame plotting, more
            details and precision; the second presents all the data since the
            creation of the selected cryptocurrency.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CryptoPriceTracker;
