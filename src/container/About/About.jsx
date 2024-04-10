import React from "react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { AppWrap, MotionWrap } from "../../wrapper";

import { urlFor, client } from "../../client";

import "./About.scss";

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    client
      .fetch(`*[_type == "abouts"] | order(description asc)`)
      .then((data) => {
        setAbouts(data);
      })
      .catch(console.error);
  }, []);

  return (
    <>
      <h2 className="head-text">
        I Know That <span>Good Development</span> <br /> means
        <span> Good Business</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={`about.title+${index}`}
          >
            <img src={urlFor(about.imgUrl)} alt={about} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="" style={{ marginTop: 10 ,fontSize:'0.9rem',color: '#6b7688'}}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
