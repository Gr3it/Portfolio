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
    <div className="passion-container">
      <div className="passion-svg">
        <img
          src={process.env.PUBLIC_URL + "/Assets/SVG/" + svg}
          alt={svg}
          style={{ width: width, height: height }}
        />
      </div>
      <h1 className="passion-title">{title}</h1>
      <p className="paragraph">{text}</p>
    </div>
  );
}

export default PassionCard;
