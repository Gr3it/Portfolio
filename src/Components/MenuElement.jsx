/* Libraries */
import React from "react";

function MenuElement({
  title = "",
  target = "",
  selected = false,
  handleMenuClose = () => {},
  hamburger = false,
}) {
  return (
    <div
      className="menu-nav-elements"
      onClick={
        hamburger
          ? () => {
              handleMenuClose();
              document.getElementById(target).scrollIntoView();
            }
          : () => {
              document.getElementById(target).scrollIntoView();
            }
      }
    >
      <h1 className={(selected ? "color-blue " : "") + "menu-title"}>
        {title}
      </h1>
      <svg
        className="menu-svg"
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
  );
}

export default MenuElement;
