

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Projects.scss";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [activeCategory, setActiveCategory] = useState("content");
  const [expanded, setExpanded] = useState({});

  useEffect(() => {
    client
      .fetch(`*[_type == "projects"] | order(publishedAt desc)`)
      .then((data) => setProjects(data))
      .catch(console.error);
  }, []);

  const filteredProjects = projects.filter(
    (project) => project.category === activeCategory
  );

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  const toggleDescription = (index) => {
    setExpanded((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const descriptionLimit = 120;

  return (
    <>
      <h2 className="head-text" style={{ textAlign: "center", lineHeight: 1.4 }}>
        <span style={{ color: "#313bac" }}>My Projects:</span>{" "}
        Content Writing & Machine Learning
      </h2>

      {/* Category Tabs */}
      <div className="category-tabs">
        <button
          onClick={() => handleCategoryChange("content")}
          className={activeCategory === "content" ? "active" : ""}
        >
          Content Writing
        </button>
        <button
          onClick={() => handleCategoryChange("ml")}
          className={activeCategory === "ml" ? "active" : ""}
        >
          Machine Learning
        </button>
      </div>

      {/* Project Cards */}
      <div className="app__profiles">
        {filteredProjects.map((project, index) => {
          const fullText = project.description || "";
          const isExpanded = expanded[index];
          const shouldTruncate = fullText.length > descriptionLimit;
          const displayedText = isExpanded
            ? fullText
            : fullText.slice(0, descriptionLimit) + (shouldTruncate ? "..." : "");

          return (
            <motion.div
              whileHover={{ scale: 1.03, boxShadow: "0 12px 24px rgba(0,0,0,0.1)" }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.3 }}
              className="app__profile-item enhanced-card"
              key={`project.title+${index}`}
            >
              <img
                src={urlFor(project.imgUrl)}
                alt={project.title}
                loading="lazy"
              />
              <h2 className="bold-text" style={{ marginTop: 20 }}>
                {project.title}
              </h2>

              <p className="app__project-description">{displayedText}</p>
              {shouldTruncate && (
                <button
                  onClick={() => toggleDescription(index)}
                  className="read-more-btn"
                >
                  {isExpanded ? "Show less" : "Read more"}
                </button>
              )}

              {project.publishedAt && (
                <p className="app__project-date">
                  Published: {" "}
                  {new Date(project.publishedAt).toLocaleDateString("en-GB", {
                    year: "numeric",
                    month: "short",
                    day: "2-digit",
                  })}
                </p>
              )}

              <div className="card-buttons">
                <a
                  href={project.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-btn"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          );
        })}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Projects, "app__about"),
  "projects",
  "app__whitebg"
);