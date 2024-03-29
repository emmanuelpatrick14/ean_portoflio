import React from "react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {images} from "../../constants"


import { urlFor,client } from "../../client";

import "./About.scss";


const About = () => {
  console.log("About");
  const [abouts, setAbouts] = useState([])

  useEffect(() => {
		client
			.fetch(
				`*[_type == "abouts"]`
			)
			.then((data) => setAbouts(data))
			.catch(console.error);
	}, []);

  return (
    <>
      <h2 className="head-text">
        I Know That <span>Good Development</span> <br /> means <span> Good Business</span>
      </h2>

      <div className="app__profiles">
    {abouts.map((about,index)=>(
      <motion.div whileHover={{scale:1.1}}
      whileInView={{opacity:1}}
      transition={{duration:0.5,type:'tween'}}
      className="app__profile-item"
      key={`about.title+${index}`}
      >
        <img src={urlFor(about.imgUrl)} alt={about} />
        <h2 className="bold-text" style={{marginTop:20}}>{about.title}</h2>
        <p className="p-text" style={{marginTop:10}}>{about.description}</p>

      </motion.div>
    ))}
      </div>
    </>
  );
};

export default About;
