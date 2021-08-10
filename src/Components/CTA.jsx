/* Libraries */
import React from "react";

function CTA({ variant = "base", handleModalOpen }) {
  return (
    <>
      <div
        className={"cta-container cta-container-" + variant}
        onClick={() => handleModalOpen()}
      >
        Contact
      </div>
    </>
  );
}

export default CTA;
