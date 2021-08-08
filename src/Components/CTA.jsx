/* Libraries */
import React from "react";

function CTA({ variant = "base", handleModal }) {
  return (
    <>
      <div
        className={"cta-container cta-container-" + variant}
        onClick={() => handleModal()}
      >
        Contact
      </div>
    </>
  );
}

export default CTA;
