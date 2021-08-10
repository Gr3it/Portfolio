/* Libraries */
import emailjs from "emailjs-com";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import ReCAPTCHA from "react-google-recaptcha";
import { sitekey } from "../reCaptcha";

function Contact({ open = false, handleModalClose }) {
  const [captcha, setCaptcha] = useState(false);

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "Portfolio_template",
        e.target,
        "user_9JGriSyHcw9jMnMNVQZWF"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  const handleSubmit = (e) => {
    console.log(e.target.value);
  };

  console.log(captcha);

  return open
    ? ReactDOM.createPortal(
        <div className="contact-backdrop" onClick={() => handleModalClose()}>
          <form
            onSubmit={() => handleSubmit()}
            className="contact-content"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <div className="contact-title">Let's Talk!</div>
            <div className="contact-field">
              Name:
              <input
                className="contact-input"
                type="text"
                name="name"
                required
              />
            </div>
            <div className="contact-field">
              Email:
              <input className="contact-input" type="email" name="email" />
            </div>
            <div className="contact-field">
              Subject:
              <input className="contact-input" type="text" name="subject" />
            </div>
            <div className="contact-field">
              Message:
              <textarea
                className="contact-input"
                rows={2}
                name="message"
                style={{ resize: "none" }}
              />
            </div>
            <div className="contact-captcha">
              <ReCAPTCHA
                sitekey={sitekey}
                onChange={() => setCaptcha(true)}
                onExpired={() => setCaptcha(false)}
              />
            </div>
            <input
              type="submit"
              className="contact-send"
              value="Send Message"
            />
          </form>
        </div>,
        document.getElementById("portal")
      )
    : null;
}

export default Contact;
