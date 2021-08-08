/* Libraries */
import React from "react";

/* Component/Pages */
import CTA from "./CTA";
import MenuElement from "./MenuElement";

function Menu({ handleModal }) {
  const menu_data = [
    { title: "My Project", target: "project" },
    { title: "My Experiments", target: "experiments" },
    { title: "About Me", target: "about" },
  ];

  return (
    <>
      <div className="menu flex-center">
        <div className="menu-container container-width">
          <svg
            className="menu-logo"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
          >
            <rect
              id="Background"
              width="100"
              height="100"
              rx="10"
              fill="#0d6ede"
            />
            <g id="Text">
              <path
                id="E"
                d="M43.19,57.93v8.21h9.89v7.62H43.19v8.92H57.92v7.93H33.46V50H57.92v7.91Z"
                fill="#fff"
              />
              <path
                id="Z"
                d="M73.82,82.47H90.7v8.14H63V83L79.74,58.1H63V50H90.7v7.42Z"
                fill="#fff"
              />
            </g>
          </svg>

          {menu_data.map((element) => (
            <MenuElement
              key={element.title}
              title={element.title}
              target={element.target}
            />
          ))}
          <div className="menu-cta-container">
            <CTA variant="blue" handleModal={() => handleModal()} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu;
