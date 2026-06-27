import "./Skills.css";

import {
  FaFire,
  FaTrophy,
  FaArrowRight,
} from "react-icons/fa";

import {
  SiGeeksforgeeks,
  SiLeetcode,
} from "react-icons/si";

const skills = [
  { name: "Python", image: "/python.png" },
  { name: "Django", image: "/django.png" },
  { name: "FastAPI", image: "/fastapi.png" },
  { name: "MySQL", image: "/mysql.png" },
  { name: "Git", image: "/git.png" },
  { name: "React", image: "/react.png" },
  { name: "JavaScript", image: "/js.png" },
  { name: "HTML", image: "/html.png" },
  { name: "CSS", image: "/css.png" },
  { name: "REST APIs", image: "/rest.png" },
];

function Skills() {
  return (
    <section className="skills" id="skills">

      <h2 className="skills-title">
        ✦ Skills & Coding Profiles ✦
      </h2>

      <p className="skills-subtitle">
        Technologies and tools I use to build scalable backend
        applications and modern web solutions.
      </p>

      {/* ================= SKILLS ================= */}

      <div className="skills-grid">

        {skills.map((skill) => (

          <div
            className="skill-card"
            key={skill.name}
          >

            <img
              src={skill.image}
              alt={skill.name}
            />

            <span>{skill.name}</span>

          </div>

        ))}

      </div>

      {/* ================= STATS ================= */}

      <div className="stats-card">

        <div className="stat-box">

          <FaFire className="stat-icon" />

          <div>

            <h3>300+</h3>

            <p>Day GFG Streak</p>

          </div>

        </div>

        <div className="divider"></div>

        <div className="stat-box">

          <FaTrophy className="stat-icon" />

          <div>

            <h3>600+</h3>

            <p>Problems Solved</p>

          </div>

        </div>

      </div>

      {/* ================= CODING PROFILES ================= */}

      <div className="profile-cards">

        {/* GFG */}

        <div className="profile-card gfg">

          <SiGeeksforgeeks className="profile-icon" />

          <div className="profile-content">

            <h3>GeeksforGeeks</h3>

            <p>
              Consistent problem solving and
              interview preparation.
            </p>

            <h2>500+</h2>

            <span>Problems Solved</span>

            <a
              href="https://www.geeksforgeeks.org/profile/himasreekaruf4yw?tab=activity"
              target="_blank"
              rel="noreferrer"
            >
              View Profile

              <FaArrowRight />

            </a>

          </div>

        </div>

        {/* LEETCODE */}

        <div className="profile-card leetcode">

          <SiLeetcode className="profile-icon" />

          <div className="profile-content">

            <h3>LeetCode</h3>

            <p>
              Data Structures,
              Algorithms and coding practice.
            </p>

            <h2>100+</h2>

            <span>Problems Solved</span>

            <a
              href="https://leetcode.com/u/Himasree-k/"
              target="_blank"
              rel="noreferrer"
            >
              View Profile

              <FaArrowRight />

            </a>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Skills;