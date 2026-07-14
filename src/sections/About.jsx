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
            <span> Backend Developer</span>
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
            Most recently, I worked as a <strong>Python Development
            Intern at Sify Digital Services</strong>, where I built
            REST APIs and Django ORM models, wrote views and
            serializers for business logic, and collaborated with
            the team using Agile practices.
          </p>

          <p>
            Beyond development, I've solved 600+ DSA problems on
            LeetCode and GeeksforGeeks to sharpen my problem-solving
            skills and prepare for technical interviews.
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

          <div className="info-card wide timeline-card">

            <h3>My Journey</h3>

            <ul className="timeline">

              <li>
                <span className="timeline-dot" />
                <div>
                  <strong>B.E. Computer Science</strong>
                  <span className="timeline-date">2022 – 2026</span>
                </div>
              </li>

              <li>
                <span className="timeline-dot" />
                <div>
                  <strong>Live Project Intern — Vivnovation Pvt Ltd</strong>
                  <span className="timeline-date">Jan 2025 – Mar 2025</span>
                </div>
              </li>

              <li>
                <span className="timeline-dot" />
                <div>
                  <strong>Python Development Intern — ShadowFox</strong>
                  <span className="timeline-date"><Aug2025></Aug2025></span>
                </div>
              </li>

              <li className="timeline-current">
                <span className="timeline-dot" />
                <div>
                  <strong>Now: Looking For Full-Time Roles</strong>
                  <span className="timeline-date">
                    Software Developer • Backend Developer • Python Developer
                  </span>
                </div>
              </li>

            </ul>

          </div>

          <div className="info-card compact">

            <h2>2</h2>

            <span>Internships Completed</span>

          </div>

          <div className="info-card compact">

            <h2>600+</h2>

            <span>DSA Problems Solved</span>

          </div>

          <div className="info-card compact">

            <h2>8.61</h2>

            <span>CGPA</span>

          </div>

          <div className="info-card compact">

            <h2>2026</h2>

            <span>B.E. CSE Graduate</span>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;