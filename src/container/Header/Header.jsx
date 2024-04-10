import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";
import "./Header.scss";
import { AppWrap } from "../../wrapper";

const Header = () => {
  const texts = ["Emmanuel Patrick", "A Full Stack Enguneer","A Web Developer", ];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState(texts[0]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 4000); 
    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);

  useEffect(() => {
    setCurrentText(texts[currentTextIndex]);
  }, [currentTextIndex]);

  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-intro">
          <div className="intro-cmp app__flex">
            <p className="p-text" style={{color:'#5b5b5b',fontFamily:"sans-serif", fontWeight:"800", marginBottom:'20px',fontSize:"1.2rem"}}>
              Welcome to my portfolio website
            </p>
            <div style={{}}>
              <h1 className="head-text">👋 Hi, I'm <span style={{color:"green"}}>{currentText}</span></h1>
            </div>
          </div>

          <div className="tag-cmp app__flex">
            <p className="app__head-desc">
              Dynamic Full Stack Developer with a year of experience in the tech
              industry, showcasing impressive skills in crafting modern web
              applications and ensuring seamless user interactions. Proficient
              in frontend technologies such as React and Next.js, coupled with
              backend expertise in Express.js and NestJs. Strong grasp of web
              accessibility standards. History of delivering projects on time
              and within budget through effective collaboration. Seeking to
              apply technical expertise and track record to contribute to a
              dynamic team.
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img src={images.profile} alt="profile_bg" />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={images.circle}
          alt="profile_circle"
          className="overlay_circle"
        />
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, "home");
