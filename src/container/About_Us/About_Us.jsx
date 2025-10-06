import React from "react";
import { motion } from "framer-motion";
import "./About_Us.scss";

// Dummy Images (replace with actual assets)
// import { about01, about02 } from "../../assets";

// 250-word description for Helping Hands Widows Foundation
const aboutText = `
Founded in 2015, Helping Hands Widows Foundation was born from a vision to provide holistic support and empowerment for widows and vulnerable women in communities across Nigeria. The founders, driven by compassion and personal experience, sought to address the emotional, financial, and social challenges widows face. 

Our motivation is rooted in creating a world where widows are recognized, supported, and empowered to lead meaningful lives. Over the years, we have initiated programs that focus on healthcare access, skills development, educational support, and advocacy for women’s rights. We believe that every widow deserves dignity, respect, and the opportunity to thrive. 

Through community engagement, mentorship, and partnership with local and international organizations, we’ve impacted thousands of lives, offering not just immediate aid but sustainable solutions that promote independence and resilience. Our mission is to create a nurturing environment that fosters growth, learning, and self-confidence. 

The foundation thrives on collaboration, volunteerism, and a steadfast commitment to social justice. As we continue to grow, we invite supporters, volunteers, and partners to join us in this journey of transformation, hope, and empowerment for widows everywhere.
`;

const About_Us = () => {
  return (
    <section className="about-page">
      <div className="background-art" aria-hidden="true" />

      <motion.h1
        className="about-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About <span className="highlight">Us</span>
      </motion.h1>

      <motion.p
        className="about-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {aboutText}
      </motion.p>

      {/* <div className="about-images">
        <img src={about01} alt="Foundation activity 1" />
        <img src={about02} alt="Foundation activity 2" />
      </div> */}
    </section>
  );
};

export default About_Us;