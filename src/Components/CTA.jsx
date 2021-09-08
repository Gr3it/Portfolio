import React from "react";

import "../CSS/CTA.css";

function CTA({ variant = "base", handleModalOpen }) {
  return (
    <div
      className={"cta-container cta-container-" + variant}
      onClick={() => handleModalOpen()}
    >
      <h3 className="buttons-text">Contact</h3>
    </div>
  );
}

export default CTA;
