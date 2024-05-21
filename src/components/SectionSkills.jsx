import React from "react";
import "./SectionSkills.scss";
import { SKILLS } from "../data.js";

export default function SectionSkills() {
  return (
    <section id="section-skills">
      <h2 className="section-skills-title">My Skills</h2>
      <div className="skills-container">
        {SKILLS.map((skill, index) => (
          <div key={index} className="skill-item">
            <h3 className="skills-title">{skill.title}</h3>
            <img className="skills-img" src={skill.img} alt={`${skill.title} logo`} />
          </div>
        ))}
      </div>
    </section>
  );
}
