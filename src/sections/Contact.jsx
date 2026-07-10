import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFileAlt,
  FaPaperPlane,
} from "react-icons/fa";

// TODO: Replace these with your own EmailJS values
// Sign up free at https://www.emailjs.com
const EMAILJS_SERVICE_ID = "service_bw1zyuw";
const EMAILJS_TEMPLATE_ID = "template_dkd2oe3";
const EMAILJS_PUBLIC_KEY = "5dK4ONO50zZBRvJKS";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");
  // idle | sending | success | error

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setStatus("sending");

    emailjs
      .send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          time: new Date().toLocaleString(),
        },
        EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        setStatus("error");
      });
  };

  return (
    <section className="contact">

      <div className="contact-container">

        <h2 className="contact-title">
          Let's Build Something Together
        </h2>

        <p className="contact-description">
          I'm actively seeking Python Developer,
          Backend Developer and Software Engineer
          opportunities.
        </p>

        <p className="contact-description secondary">
          I enjoy building scalable backend systems,
          REST APIs and real-world applications using
          Python, Django and FastAPI.
        </p>

        <div className="contact-links">

          <a
            href="mailto:himasreekarunakaran2812@gmail.com"
            className="contact-card"
          >
            <FaEnvelope />
            <span>Email</span>
          </a>

          <a
            href="https://www.linkedin.com/in/himasree28/"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <FaLinkedin />
            <span>LinkedIn</span>
          </a>

          <a
            href="https://github.com/HIMASREEK"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <FaGithub />
            <span>GitHub</span>
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <FaFileAlt />
            <span>Resume</span>
          </a>

        </div>

        {/* ================= CONTACT FORM ================= */}

        <div className="contact-form-wrapper">

          <h3 className="form-title">
            Reach Out Directly
          </h3>

          <p className="form-subtitle">
            Hiring or want to connect? Send a message and
            I'll get back to you by email.
          </p>

          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >

            <div className="form-row">

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />

            </div>

            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            />

            <button
              type="submit"
              className="form-submit-btn"
              disabled={status === "sending"}
            >
              <FaPaperPlane />
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <p className="form-status success">
                Message sent successfully! I'll get back to you soon.
              </p>
            )}

            {status === "error" && (
              <p className="form-status error">
                Something went wrong. Please try again or email me directly.
              </p>
            )}

          </form>

        </div>

        <div className="thank-you">
          Thank You For Visiting ❤️
        </div>

      </div>

    </section>
  );
}

export default Contact;