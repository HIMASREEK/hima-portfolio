import "./Contact.css";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFileAlt,
  FaCode,
  FaFire,
  FaLaptopCode,
  FaGraduationCap,
} from "react-icons/fa";

function Contact() {
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
            <FaEnvelope className="contact-icon" />

            <h3>Email</h3>

            <p className="contact-info">
              himasreekarunakaran2812@gmail.com
            </p>
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

        <div className="quick-stats">

          <div className="stat">
            <FaCode />
            <h3>500+</h3>
            <p>Problems Solved</p>
          </div>

          <div className="stat">
            <FaFire />
            <h3>300+</h3>
            <p>Day GFG Streak</p>
          </div>

          <div className="stat">
            <FaLaptopCode />
            <h3>10+</h3>
            <p>Projects</p>
          </div>

          <div className="stat">
            <FaGraduationCap />
            <h3>2026</h3>
            <p>CSE Graduate</p>
          </div>

        </div>

        <div className="thank-you">
          Thank You For Visiting ❤️
        </div>

      </div>

    </section>
  );
}

export default Contact;