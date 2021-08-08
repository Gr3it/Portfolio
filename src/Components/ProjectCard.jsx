/* Libraries */
import React from "react";
import { Link } from "react-router-dom";

function ProjectCard({
  right = false,
  title = "",
  tags = "",
  url = "",
  date = "",
  img = "",
}) {
  return (
    <>
      <div className={right ? "card-container right-side" : "card-container"}>
        <div className={right ? "card-box right-side" : "card-box"}>
          <div className="card-info">
            <div className="card-title">{title}</div>
            <div className="card-tags">{tags}</div>
            <Link to={"/" + url} className="card-view-container">
              <div className="card-view">
                View Project
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="card-arrow"
                >
                  <path d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"></path>
                </svg>
              </div>
            </Link>
          </div>
          <div className="card-img">
            <img
              src={process.env.PUBLIC_URL + "/Assets/" + img}
              alt="Project Preview"
            />
          </div>
        </div>
        <div className={right ? "card-date card-date-right-side" : "card-date"}>
          {date}
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
