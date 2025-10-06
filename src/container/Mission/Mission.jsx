import React from "react";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Mission.scss";

const foundationInfo = [
  {
    title: "Mission Statement",
    description:"To restore dignity, hope, and opportunity to widows and vulnerable families through healthcare, education, and community empowerment."

  },
  {
      
    title: "Vision Statement",
    description:"A world where every widow is supported, every child has access to education, and every community thrives with compassion."
  },
  {
    title: "Our Drive ",
    description: "At Healing Hearts Widows’ Support Foundation, our drive is to restore dignity and hope to widows and their children. We are committed to breaking barriers of abuse, neglect, and inequality by providing medical care, legal aid, financial support, and education. Through advocacy and empowerment, we create pathways for widows to thrive and build a society that protects and values them."
  
  },
  
];

const Mission = () => {
  return (
    <>
      <h2 className="head-text" style={{ textAlign: "center", lineHeight: 1.4 ,color:"#FFB6C1"}}>
        <span style={{ color: "#C71585" }}>OUR</span><br />
        Mission, Vision & Impact
      </h2>

      <div className="foundation__cards">
        {foundationInfo.map((item, index) => (
          <motion.div
            key={item.title}
            className="foundation__card"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="foundation__card-title">{item.title}</h3>
            <p className="foundation__card-description">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap( Mission, "app__about"),
  "mission",
  "app__whitebg"
);
