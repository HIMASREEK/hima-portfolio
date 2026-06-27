import "./hero.css";
import avatar from "../assets/avatar.png";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

function Hero() {
  return (
    <section className="hero">

      {/* LEFT CONTENT */}
      <div className="hero-content">

        <h1 className="hero-name">
          Himasree K
        </h1>

        <h2 className="hero-role">
          Python Developer
        </h2>

        <p className="hero-description">
          Passionate Python developer with experience building web
          applications and backend systems using Django and FastAPI.
          Focused on writing clean code, solving complex problems,
          and creating efficient software solutions.
        </p>

        <div className="hero-actions">

          <a
            href="/resume.pdf"
            className="resume-btn"
            target="_blank"
            rel="noreferrer"
          >
            Download Resume
          </a>

          <div className="social-icons">

            <a
              href="https://github.com/HIMASREEK"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/himasree28"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:himasreekarunakaran2812@gmail.com"
            >
              <FaEnvelope />
            </a>

          </div>

        </div>

        <div className="scroll-indicator">
          Scroll To Explore ↓
        </div>

      </div>

      {/* RIGHT SIDE AVATAR */}

      <div className="hero-avatar">
        <img
          src={avatar}
          alt="Himasree Avatar"
          className="avatar-img"
        />
      </div>

    </section>
  );
}

export default Hero;