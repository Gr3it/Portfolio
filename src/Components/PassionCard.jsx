/* Libraries */
import React from "react";

function PassionCard({
  title = "",
  text = "",
  svg = "",
  width = "",
  height = "",
}) {
  return (
    <>
      <div className="passion-container">
        <div className="passion-svg">
          <img
            src={process.env.PUBLIC_URL + "/Assets/SVG/" + svg}
            alt={svg}
            style={{ width: width, height: height }}
          />
        </div>
        <div className="passion-title">{title}</div>
        <div className="passion-text">{text}</div>
      </div>
    </>
  );
}

export default PassionCard;
