/* Libraries */
import React from "react";

/* Component/Pages */
import MenuElement from "./MenuElement";

function Menu() {
  /* Title element array */
  const menu_data = [
    { title: "My Project", target: "project" },
    { title: "My Experiments", target: "experiments" },
    { title: "About Me", target: "about" },
  ];

  return (
    <header className="menu-background flex-center">
      <div className="menu-container container-large">
        <svg
          className="menu-logo"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
        >
          <rect width="100" height="100" rx="6" fill="#0d6ede" />
          <g>
            <path
              d="M43.19,57.93v8.21h9.89v7.62H43.19v8.92H57.92v7.93H33.46V50H57.92v7.91Z"
              fill="#fff"
            />
            <path
              d="M73.82,82.47H90.7v8.14H63V83L79.74,58.1H63V50H90.7v7.42Z"
              fill="#fff"
            />
          </g>
        </svg>
        <MenuElement key="home" title="Home" selected />
        {menu_data.map((element) => (
          <MenuElement
            key={element.title}
            title={element.title}
            target={element.target}
          />
        ))}
      </div>
    </header>
  );
}

export default Menu;
