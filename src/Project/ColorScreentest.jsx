import React, { useEffect, useRef } from "react";

import "../CSS/ProjectPages.css";
import "../CSS/Explore.css";

import ProjectMenu from "../Components/ProjectMenu";
import Footer from "../Components/Footer";

function ColorScreentest({ color }) {
  document.documentElement.style.setProperty("--Scrollbar-color", color);

  const videoRef = useRef(null);

  useEffect(() => {
    let options = {
      rootMargin: "0px",
      threshold: [0.25, 0.75],
    };

    let handlePlay = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          videoRef.current.play();
        } else {
          videoRef.current.pause();
        }
      });
    };

    let observer = new IntersectionObserver(handlePlay, options);

    observer.observe(videoRef.current);
  });

  return (
    <div className="flex-columns align-center">
      <ProjectMenu
        githubLink="https://github.com/Gr3it/Color-Screentest"
        github
      />
      <div className="project-home container-large">
        <h2 className="home-subtitle project-subtitle">Color Screentest</h2>
        <h1 className="project-title">
          The easiest app for test display defects and compare colors amongst
          various devices
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
          <video autoPlay loop muted ref={videoRef}>
            <source
              src={
                process.env.PUBLIC_URL + "/Assets/ColorScreentest/Trailer.mp4"
              }
            />
            <source
              src={
                process.env.PUBLIC_URL + "/Assets/ColorScreentest/Trailer.webm"
              }
            />
          </video>
        </div>
      </div>
      <div className="flex-columns container-large">
        <div className="project-description">
          <h1 className="width100 sub-section-title">The challenge</h1>
          <p className="width100 paragraph-justify">
            As I wanted to try to develop an app for mobile, I decided to test
            and develop my knowledge of React-Native. I conceived the project to
            be able to put in practice the diverse main features of this
            programming language, such as useState, StyleSheet, custom
            components, 3rd party modules, and some android custom code for
            manage user light and dark mode. The project wants to be a simple
            application, that through different menus allows you to change the
            color of the app background.
          </p>
        </div>
      </div>
      <div
        className="project-presentation-images"
        style={{ backgroundColor: color }}
      >
        <img
          className="project-second-image"
          src={process.env.PUBLIC_URL + "/Assets/ColorScreentest/3Devices.jpg"}
          alt="3 Devices screen showcase"
        />
      </div>
      <div className="flex-columns container-large">
        <div className="project-description">
          <h1 className="width100 sub-section-title">The App</h1>
          <p className="width100 paragraph-justify">
            The app with a tap on the display shows an overlay composed of two
            menu with which the user can change the background color by
            selecting some preset or just by create the color of the background
            by their own through 3 sliders that control the 3 RGB parameters
            (red, green, blue). While the overlay is open you can tap outside of
            the menu for hiding until you tap again.
          </p>
        </div>
        <div className="project-row">
          <img
            className="project-row-image"
            src={
              process.env.PUBLIC_URL + "/Assets/ColorScreentest/ScreenMenu1.jpg"
            }
            alt="First Menu screenshot"
          />

          <p className="width50 paragraph-justify">
            The first menu that we find in the modal is composed by three slider
            related to the three parameters of RGB, Red, Green and Blue. With
            those slider we can change the individual values of the color of the
            background. To the right of the sliders we find a text label that
            show the current value of the corresponding color
          </p>
        </div>
        <div className="project-row">
          <img
            className="project-row-image"
            src={
              process.env.PUBLIC_URL + "/Assets/ColorScreentest/ScreenMenu2.jpg"
            }
            alt="Second Menu screenshot"
          />
          <p className="width50 paragraph-justify">
            The menu that we find to the right of the modal is composed by 24
            color present that let you change rapidly and easily the background
            color. Selecting a preset color will also modify the values of the
            slider on the other menu allowing you to make slight changes of the
            color selected.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ColorScreentest;
