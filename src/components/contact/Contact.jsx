import React, { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";

import "./Contact.css";
import { ThemeContext } from "../../context";

const Contact = () => {
  const formRef = useRef();
  const [mailSent, setMailSent] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_1rk1osg",
        "template_1pu5pvb",
        formRef.current,
        "7tSKy0iTScOhCHInS"
      )
      .then(
        (result) => {
          setMailSent(true);
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c" style={{ backgroundColor: darkMode && "#1A1A40" }}>
      <div className="c-left">
        <div className="c-head">
          <h1>Let's talk</h1>
          <h2>Ask me anything or just say hi...</h2>
        </div>
        <div className="c-info">
          <div className="c-info-item">
            <div className="c-info-icon">
              <i className="bi bi-envelope-fill"></i>
            </div>
            <a
              href="mailto:subhamsaibehera11@gmail.com"
              className="c-info-desc"
            >
              subhamsaibehera11@gmail.com
            </a>
          </div>
          <div className="c-info-item">
            <div className="c-info-icon">
              <i className="bi bi-telephone-fill"></i>
            </div>
            <a className="c-info-desc" href="tel:+916370460764">
              +91 6370 460 764
            </a>
          </div>
        </div>
      </div>

      <div className="c-right">
        <form className="c-form" ref={formRef} onSubmit={handleSubmit}>
          <div className="c-input-wrapper">
            <div className="c-form-label">Name</div>
            <input
              style={{ backgroundColor: darkMode && "#1a1a40" }}
              type="text"
              name="from_name"
              id="from_name"
              placeholder="John Doe"
              className="c-form-item"
              required={true}
            />
          </div>
          <div className="c-input-wrapper">
            <div className="c-form-label">Email</div>
            <input
              style={{ backgroundColor: darkMode && "#1a1a40" }}
              type="email"
              name="from_email"
              id="from_email"
              placeholder="john@gmail.com"
              className="c-form-item"
              required={true}
            />
          </div>
          <div className="c-input-wrapper">
            <div className="c-form-label">Message</div>
            <textarea
              style={{ resize: "none", backgroundColor: darkMode && "#1a1a40" }}
              name="message"
              id="message"
              cols="30"
              rows="5"
              className="c-form-item"
              placeholder="Your message"
              required={true}
            />
          </div>
          <button
            disabled={mailSent}
            style={{ backgroundColor: darkMode && "#2fbbaf" }}
          >
            <span>
              {mailSent ? <i className="bi bi-check-lg"></i> : "Send"}
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
