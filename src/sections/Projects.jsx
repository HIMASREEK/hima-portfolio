// src/sections/Projects.jsx

import "./Projects.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  return (
    <section className="projects">

      <h2 className="projects-title">
        ✦ Featured Projects ✦
      </h2>

      <p className="projects-subtitle">
        Projects that showcase my backend development,
        problem-solving and software engineering skills.
      </p>

      <div className="projects-grid">

        {/* PROJECT 1 */}

        <div className="project-card">

          <div className="project-image-container">

            <img
              src="/skin-tone-project.png"
              alt="Skin Tone Recommender"
              className="project-image"
            />

            <div className="project-overlay">

              <p>
                Developed an AI-powered application that performs
                real-time face detection and skin tone analysis
                using OpenCV DNN. Built a personalized color
                recommendation engine and deployed the application
                using Docker.
              </p>

            </div>

          </div>

          <div className="project-content">

            <h3>
              AI-Based Skin Tone Color Recommender
            </h3>

            <div className="project-tags">

              <span>Python</span>
              <span>FastAPI</span>
              <span>OpenCV</span>
              <span>NumPy</span>
              <span>Pandas</span>
              <span>Docker</span>

            </div>

            <div className="project-links">

              <a
                href="https://github.com/HIMASREEK/skin-tone-based-color-recommender"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
                GitHub
              </a>

              <a
                href="https://skin-tone-based-color-recommender.onrender.com"
                target="_blank"
                rel="noreferrer"
              >
                <FaExternalLinkAlt />
                Live Demo
              </a>

            </div>

          </div>

        </div>

        {/* PROJECT 2 */}

        <div className="project-card">

          <div className="project-image-container">

            <img
              src="/ecommerce-project.png"
              alt="Ecommerce Project"
              className="project-image"
            />

            <div className="project-overlay">

              <p>
                Built a full-stack e-commerce platform with
                authentication, product catalog, shopping cart,
                order management, REST APIs and secure session
                handling.
              </p>

            </div>

          </div>

          <div className="project-content">

            <h3>
              E-Commerce Web Application
            </h3>

            <div className="project-tags">

              <span>Python</span>
              <span>Django</span>
              <span>REST APIs</span>
              <span>JavaScript</span>
              <span>SQLite</span>
              <span>Bootstrap</span>

            </div>

            <div className="project-links">

              <a
                href="https://github.com/HIMASREEK/Tryvion-Ecommerce_website"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
                GitHub
              </a>

              <a
                href="https://tryvion-ecommerce-website.onrender.com/"
                target="_blank"
                rel="noreferrer"
              >
                <FaExternalLinkAlt />
                Live Demo
              </a>

            </div>

          </div>

        </div>

      </div>

      <div className="other-projects">

        <h3>Other Projects</h3>

        <div className="other-projects-list">

          <a
            href="https://github.com/HIMASREEK/Decision_maze"
            target="_blank"
            rel="noreferrer"
            className="other-project-item"
          >
            <FaGithub />
            Decision_maze
          </a>

          <a
            href="https://github.com/HIMASREEK/Time_capsule_API"
            target="_blank"
            rel="noreferrer"
            className="other-project-item"
          >
            <FaGithub />
            Time Capsule API
          </a>

          <a
            href="https://github.com/HIMASREEK/CurioLog"
            target="_blank"
            rel="noreferrer"
            className="other-project-item"
          >
            <FaGithub />
            CurioLog
          </a>

          <a
            href="https://github.com/HIMASREEK/Skill_swap_hub"
            target="_blank"
            rel="noreferrer"
            className="other-project-item"
          >
            <FaGithub />
            Skill SwapHub
          </a>
          <a
            href="https://github.com/HIMASREEK/Student_record_mangement_system"
            target="_blank"
            rel="noreferrer"
            className="other-project-item"
          >
            <FaGithub />
            Student Record Management System
          </a>
          <a
            href="https://github.com/HIMASREEK/todo"
            target="_blank"
            rel="noreferrer"
            className="other-project-item"
          >
            <FaGithub />
            TODO
          </a>
          <a
            href="https://github.com/HIMASREEK/weather-app"
            target="_blank"
            rel="noreferrer"
            className="other-project-item"
          >
            <FaGithub />
            Weather App
          </a>
        </div>

      </div>
    </section>
  );
}

export default Projects;