import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import "./Navbar.scss";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <a href="#home">
          <CgProfile className="logo_icon" size={40} />
          <p>EA</p>
        </a>
      </div>
      <ul className="app__navbar-links">
        {["home", "about", "work", "contact", "skills"].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div className=""></div>
            <a href={`#${item}`} onClick={() => setToggle(false)}>
              {item}
            </a>
          </li>
        ))}
      </ul>
      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {["home", "about", "work", "contact", "skills"].map((item) => (
                <li key={`${item}`}>
                  <a onClick={() => setToggle(false)} href={`#${item}`}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
