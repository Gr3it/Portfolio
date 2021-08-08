/* Libraries */
import React from "react";

function MenuElement({ title = "", target = "" }) {
  return (
    <>
      <div className="menu-nav-elements">
        <a href={"#" + target}>{title}</a>
        <svg
          className="SVG-Tratto"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 143 25.22"
        >
          <path
            d="M5,26.11S117.74-17.13,145,17"
            transform="translate(-3.5 -2.39)"
            fill="none"
            stroke="#0d6ede"
            strokeLinecap="round"
            strokeWidth="3"
          />
        </svg>
      </div>
    </>
  );
}

export default MenuElement;
