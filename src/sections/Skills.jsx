import "./Skills.css";

import {
  FaFire,
  FaTrophy,
  FaArrowRight,
  FaBriefcase,
  FaPython,
  FaJs,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaDatabase,
} from "react-icons/fa";

import {
  SiGeeksforgeeks,
  SiLeetcode,
  SiDjango,
  SiFastapi,
  SiFlask,
  SiMysql,
  SiPostgresql,
  SiMongodb,
} from "react-icons/si";

const skillGroups = [
  {
    category: "Languages & Frontend",
    items: [
      { name: "Python", icon: <FaPython /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "React", icon: <FaReact /> },
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> },
    ],
  },
  {
    category: "Backend & APIs",
    items: [
      { name: "Django", icon: <SiDjango /> },
      { name: "Django REST Framework", icon: <SiDjango /> },
      { name: "FastAPI", icon: <SiFastapi /> },
      { name: "Flask", icon: <SiFlask /> },
      { name: "REST APIs", icon: <FaDatabase /> },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "MySQL", icon: <SiMysql /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "MongoDB", icon: <SiMongodb /> },
    ],
  },
  {
    category: "Tools & DevOps",
    items: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub Actions", icon: <FaGithub /> },
      { name: "Docker", icon: <FaDocker /> },
    ],
  },
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

      {/* ================= SKILLS (PILL GROUPS) ================= */}

      <div className="skills-groups">

        {skillGroups.map((group) => (

          <div
            className="skill-group"
            key={group.category}
          >

            <h3 className="skill-group-title">
              {group.category}
            </h3>

            <div className="skill-group-box">

              <div className="skills-pills">

                {group.items.map((skill) => (

                  <div
                    className="skill-pill"
                    key={skill.name}
                  >

                    <span className="skill-pill-icon">
                      {skill.icon}
                    </span>

                    <span>{skill.name}</span>

                  </div>

                ))}

              </div>

            </div>

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

        <div className="divider"></div>

        <div className="stat-box">

          <FaBriefcase className="stat-icon" />

          <div>

            <h3>2</h3>

            <p>Internships Completed</p>

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