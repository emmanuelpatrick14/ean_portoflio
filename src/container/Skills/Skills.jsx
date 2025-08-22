import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Skills.scss";
import PortableTextComponent from "../../wrapper/PortableTextComponent";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    const fetchExperiences = async () => {
      const query = '*[_type == "experiences"]';
      const experiencesData = await client.fetch(query);
      setExperiences(experiencesData);
    };

    const fetchSkills = async () => {
      const skillsQuery = '*[_type == "skills"]';
      const skillsData = await client.fetch(skillsQuery);
      setSkills(skillsData);
    };

    fetchExperiences();
    fetchSkills();
  }, []);

  const writingSkills = skills.filter((skill) => skill.category === "writing");
  const mlSkills = skills.filter((skill) => skill.category === "machine-learning");

  const technicalSkills = [
    "Technical SEO", "CRO", "Microsoft Office Suite", "Editing & Proofreading",
    "WordPress Web Design", "Content Writing", "Digital Marketing",
    "Google Adwords", "Keyword Research", "Project Management",
    "Sports Journalism", "Copywriting", "Microsoft Azure"
  ];

  return (
    <>
      {/* Technical Skills */}
      <div className="app__skills-tech">
        <h2 className="head-text">Technical Skills</h2>
        <ul className="tech-skills-list">
          {technicalSkills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>

      {/* Skill Categories */}
      <h2 className="head-text">Skills & Technologies</h2>
      <div className="app__skills-container">
        <motion.div className="app__skills-category">
          <h3 className="category-title">Content Writing</h3>
          <div className="app__skills-list">
            {writingSkills.map((skill, i) => (
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="app__skills-item app__flex"
                key={`writing-${i}`}
              >
                <div
                  className="app__skills-icon"
                  style={{ backgroundColor: skill.bgColor || "#f3f3f3" }}
                >
                  <img src={urlFor(skill.icon)} alt={skill.name} />
                </div>
                <p className="p-text">{skill.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="category-divider">
          <div className="line"></div>
        </div>

        <motion.div className="app__skills-category">
          <h3 className="category-title">Machine Learning</h3>
          <div className="app__skills-list">
            {mlSkills.map((skill, i) => (
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="app__skills-item app__flex"
                key={`ml-${i}`}
              >
                <div
                  className="app__skills-icon"
                  style={{ backgroundColor: skill.bgColor || "#f3f3f3" }}
                >
                  <img src={urlFor(skill.icon)} alt={skill.name} />
                </div>
                <p className="p-text">{skill.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Experiences */}
      <div className="app__skills-exp">
        {experiences.map((experience) => (
          <motion.div className="app__skills-exp-item" key={experience.year}>
            <div className="app__skills-exp-year">
              <p className="bold-text app__skills-year">{experience.year}</p>
            </div>
            <motion.div className="app__skills-exp-works">
              {experience.works.map((work) => (
                <div key={work.name}>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="app__skills-exp-work"
                    data-tip
                    data-for={work.name}
                  >
                    <h3 className="bold-text">{work.name}</h3>
                    <p className="p-text">{work.company}</p>
                  </motion.div>
                  <h4 className="skills-description">
                    <PortableTextComponent value={work.desc} truncateAfter={10} />
                  </h4>
                </div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(MotionWrap(Skills, "app__skills"), "skills", "app__whitebg");
