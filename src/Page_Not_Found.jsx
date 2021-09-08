import React from "react";

import "./CSS/PageNotFound.css";

function Page_Not_Found() {
  return (
    <div className="not-found-container">
      <h6 className="watermark-404 watermark-text">404</h6>
      <h1 className="section-title text-center">
        Oops! We couldn't find that page.
      </h1>
      <a href="/" className="not-found-go-home">
        <h1 className="buttons-text">Go Back Home</h1>
      </a>
    </div>
  );
}

export default Page_Not_Found;
