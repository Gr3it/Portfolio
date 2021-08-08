/* Libraries */
import React from "react";
import ReactDOM from "react-dom";

function Contact({ open = false, handleModal }) {
  return open
    ? ReactDOM.createPortal(
        <div className="contact-backdrop" onClick={() => handleModal()}>
          <div
            className="contact-content"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <div className="contact-title">Let's Talk!</div>
            <div className="contact-field">Name *</div>
            <div className="contact-field">Email *</div>
            <div className="contact-field">Subject *</div>
            <div className="contact-field">Message *</div>
            <div className="contact-captcha">captcha</div>
            <div className="contact-send">Send Message</div>
          </div>
          <div className="contact-content contact-shadow"></div>
        </div>,
        document.getElementById("portal")
      )
    : null;
}

export default Contact;
