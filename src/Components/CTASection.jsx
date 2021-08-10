/* Libraries */
import React from "react";
import CTA from "./CTA";
import ResumeButton from "./ResumeButton";

function CTASection({ handleModalOpen }) {
  return (
    <>
      <svg
        className="cta-section-svg "
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 2063.809 212.358"
      >
        <path
          d="M0,90.545l68.794-8.876c68.794-8.544,206.381-26.794,343.968-8.793,137.587,17.669,275.175,70.758,412.762,84.031s275.175-13.272,412.762-13.272,275.175,26.545,412.762,17.669c137.587-8.544,275.174-53.338,343.968-75.155L2063.809,64V276.358H0Z"
          transform="translate(0 -64)"
          fill="#0d6ede"
        />
      </svg>
      <div className="cta-section-bcg">
        <div className="container-width cta-section-container">
          <div className="cta-section-title">Want to get in touch with me?</div>
          <div className="cta-section-buttons">
            <CTA variant="white" handleModalOpen={() => handleModalOpen()} />
            <ResumeButton />
          </div>
        </div>
      </div>
    </>
  );
}

export default CTASection;
