import "./About.css";

import {
  FaPython,
  FaServer,
  FaDatabase,
  FaReact,
  FaFileDownload,
} from "react-icons/fa";

function About() {
  return (
    <section className="about" id="about">

      <h2 className="section-title">
        ✦ About Me ✦
      </h2>

      <p className="section-subtitle">
        Passionate about building scalable backend applications,
        solving real-world problems, and continuously learning
        modern software development technologies.
      </p>

      <div className="about-container">

        {/* LEFT SIDE */}

        <div className="about-left">

          <h3>
            Computer Science Graduate &
            <span> Python Developer</span>
          </h3>

          <p>
            Hi, I'm <strong>Himasree</strong>, a Computer Science Engineering
            graduate with a strong passion for backend development and
            software engineering.
          </p>

          <p>
            I enjoy designing clean, scalable applications using
            <strong> Python, Django, FastAPI</strong> and relational
            databases while following industry-standard coding
            practices.
          </p>

          <p>
            Through personal projects and continuous practice,
            I've built REST APIs, full-stack web applications,
            AI-powered solutions and database-driven systems that
            strengthened both my development and problem-solving
            skills.
          </p>

          <p>
            Alongside development, I actively solve Data Structures
            and Algorithms problems to improve logical thinking and
            prepare for technical interviews.
          </p>

          <div className="about-highlights">

            <div className="highlight">
              <FaPython />
              <span>Python Development</span>
            </div>

            <div className="highlight">
              <FaServer />
              <span>REST API Development</span>
            </div>

            <div className="highlight">
              <FaDatabase />
              <span>Database Design</span>
            </div>

            <div className="highlight">
              <FaReact />
              <span>React Frontend</span>
            </div>

          </div>

          <a
            href="/resume.pdf"
            className="resume-btn"
            target="_blank"
            rel="noreferrer"
          >
            <FaFileDownload />
            Download Resume
          </a>

        </div>

        {/* RIGHT SIDE */}

        <div className="about-right">

          <div className="info-card">

            <h2>10+</h2>

            <span>Projects Built</span>

          </div>

          <div className="info-card">

            <h2>600+</h2>

            <span>DSA Problems Solved</span>

          </div>

          <div className="info-card">

            <h2>300+</h2>

            <span>Day GFG Streak</span>

          </div>

          <div className="info-card">

            <h2>2026</h2>

            <span>B.E. CSE Graduate</span>

          </div>

          <div className="info-card wide">

            <h3>Currently Looking For</h3>

            <p>
              Python Developer • Backend Developer •
              Software Engineer
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;
