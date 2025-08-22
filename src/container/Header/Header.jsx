import React from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";
import "./Header.scss";
import { AppWrap,MotionWrap } from "../../wrapper";

const Header = () => {
  return (
    <section className="about-section app__flex" id="about">
      <motion.div
        className="about-image"
        whileInView={{ opacity: [0, 1], scale: [0.9, 1] }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <div className="image-frame">
          <img src={images.mike} alt="Content Writer" />
        </div>
      </motion.div>

      <motion.div
        className="about-text"
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="about-heading">
          Bridging <span className="highlight">Words</span> and{" "}
          <span className="highlight">Data</span> — Meet{" "}
          <span className="highlight">CHIKAMSO</span>
        </h1>
        <p className="about-subheading">
          Content Writer · Machine Learning Explorer · Strategy-Driven Storyteller
        </p>
        <p className="about-description">
          Versatile content writer and marketing strategist with a strong background in
          entertainment journalism, creative storytelling, and digital content development.
          Experienced in writing for high-profile platforms under Valnet, covering pop culture,
          film, television, and celebrity finance. Adept at SEO optimization, UX content
          development, and narrative-driven projects. Currently expanding into machine learning —
          blending analytical depth with creative clarity to deliver results that engage and convert.
        </p>
      </motion.div>
    </section>
  );
};

export default AppWrap(
  MotionWrap(Header, "app__footer"),
  "home",
  "app__whitebg"
);