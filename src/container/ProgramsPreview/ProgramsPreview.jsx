


import React, { useState } from "react";
import { motion } from "framer-motion";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import "./ProgramsPreview.scss";

// Import images from assets

// Lorem text
const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Nullam ac erat ante. Phasellus imperdiet, ipsum et accumsan aliquam, nisi odio ullamcorper justo, sed semper turpis nunc nec eros. Aliquam erat volutpat. Sed vehicula, libero at tincidunt imperdiet, urna tortor aliquet sapien, at cursus elit nisl a mauris.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.`;

// Programs Data
const programsData = [
  { 
    id: 1, 
    title: "Healthcare Outreach", 
    description: lorem, 
    images: ["/about01.png", "/about02.png", "/about03.png", "/about03.png"] 
  },
  { 
    id: 2, 
    title: "Education Support", 
    description: lorem, 
    images: ["/about01.png", "/about02.png", "/about03.png", "/about03.png"] 
  },
  { 
    id: 3, 
    title: "Skills Training", 
    description: lorem, 
    images: ["/about01.png", "/about02.png", "/about03.png", "/about03.png"] 
  },
  { 
    id: 4, 
    title: "Youth Empowerment", 
    description: lorem, 
    images: ["/about01.png", "/about02.png", "/about03.png", "/about04.png"] 
  },
  { 
    id: 5, 
    title: "Community Development", 
    description: lorem, 
    images: ["/about01.png", "/about02.png", "/about03.png", "/about03.png"] 
  },
];

// Animation Variants
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.2 },
  }),
};

const ProgramsPreview = () => {
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrev = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? selectedProgram.images.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentSlide((prev) =>
      prev === selectedProgram.images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="programs-page">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Our <span className="highlight">Programs</span>
      </motion.h2>

      <div className="programs-grid">
        {programsData.map((program, i) => (
          <motion.div
            key={program.id}
            className="program-card"
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            onClick={() => {
              setSelectedProgram(program);
              setCurrentSlide(0);
            }}
          >
            <div className="image-wrapper">
              <img src={program.images[0]} alt={program.title} />
            </div>
            <h3 className="program-name">{program.title}</h3>
            <p className="program-description">
              {program.description.slice(0, 100)}...
            </p>
          </motion.div>
        ))}
      </div>

      {selectedProgram && selectedProgram.images && (
        <div className="program-modal">
          <div
            className="modal-backdrop"
            onClick={() => setSelectedProgram(null)}
          />
          <motion.div
            className="modal-content"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <button
              className="modal-close"
              onClick={() => setSelectedProgram(null)}
            >
              ×
            </button>
            <h2>{selectedProgram.title}</h2>

            {/* Image Slider */}
            <div className="modal-slider">
              <button className="slide-arrow prev" onClick={handlePrev}>
                <HiChevronLeft />
              </button>
              <img
                src={selectedProgram.images[currentSlide]}
                alt={`${selectedProgram.title}-${currentSlide}`}
              />
              <button className="slide-arrow next" onClick={handleNext}>
                <HiChevronRight />
              </button>
            </div>

            <p className="modal-description">{selectedProgram.description}</p>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default ProgramsPreview;
