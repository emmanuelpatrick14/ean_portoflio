import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import { Tooltip } from "react-tooltip";
import "./Skills.scss";

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

      // Custom sorting function
      const customSortOrder = ["JavaScript", "CSS", "React","Node JS", "TypeScript", "Next.JS"];

      const sortedSkills = skillsData.sort((a, b) => {
        console.log(8)
        const aIndex = customSortOrder.indexOf(a.name);
        const bIndex = customSortOrder.indexOf(b.name);
        
        // If both skills are in customSortOrder, sort by their indices
        if (aIndex !== -1 && bIndex !== -1) {
          return aIndex - bIndex;
        }
        // If only one skill is in customSortOrder, it comes first
        else if (aIndex !== -1) {
          return -1;
        } else if (bIndex !== -1) {
          return 1;
        }
        // If neither skill is in customSortOrder, sort alphabetically
        else {
          return a.name.localeCompare(b.name);
        }
      });

      setSkills(sortedSkills);
    };

    // Fetch experiences and skills data
    fetchExperiences();
    fetchSkills();
  }, []);
  return (
    <>
      <h2 className="head-text">Skills & Experience</h2>
      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills?.map((skill, i) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item  app__flex"
              key={`${i}`}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp">
          {experiences.map((experience) => (
            <motion.div className="app__skills-exp-item" key={experience.year}>
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.works.map((work) => (
                  <div key={work.name}>
                    {console.log(work.desc)}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.name}
                      key={work.name}
                      s
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                    </motion.div>
                    <Tooltip
                      id={work.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                    >
                      {work.desc}
                    </Tooltip>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills ,'app__skills'),'skills','app__whitebg');