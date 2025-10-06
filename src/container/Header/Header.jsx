



import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { useNavigate } from "react-router-dom";  // ✅ Import navigate
import "./Header.scss";

const slides = [
  {
    id: 1,
    title: "Healing Hearts Widows’ Support Foundations Inc",
    highlight: "Empowering Communities",
    subtitle: "Dedicated to restoring hope, health, and dignity everywhere we serve.",
    ctaLabel: "Learn More",
    ctaLink: "/about-us",   // ✅ Add link
    image:"https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Together We Can Make a Difference",
    highlight: "Join Our Mission",
    subtitle: "Your contribution helps us provide vital healthcare and education.",
    ctaLabel: "Become a Partner",
    ctaLink: "/partners", 
    image:"/about02.png",
  },
  {
    id: 3,
    title: "Care, Compassion, and Community",
    highlight: "Your Support Matters",
    subtitle: "Help us reach more people with the healing support they need.",
    ctaLabel: "Support Us",
    ctaLink: "/donate",  // 
    image:"https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=800&q=80",
  },
];

const Header = () => {
  const [current, setCurrent] = useState(0);
  const slideCount = slides.length;
  const navigate = useNavigate(); // ✅ Hook for navigation

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slideCount - 1 ? 0 : prev + 1));
    }, 7000);
    return () => clearInterval(interval);
  }, [slideCount]);

  const handlePrev = () => setCurrent((prev) => (prev === 0 ? slideCount - 1 : prev - 1));
  const handleNext = () => setCurrent((prev) => (prev === slideCount - 1 ? 0 : prev + 1));

  const currentSlide = slides[current];

  return (
    <section className="hero-slider">
      <div className="slider-container">
        <AnimatePresence mode="wait" initial={false}> {/* Restored mode="wait" with single child per slide */}
          <motion.div
            key={currentSlide.id} // Single key for the entire slide
            className="slide-wrapper" // New wrapper class for flex layout
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.8, ease: "easeInOut" }} // Increased duration and added easing for smoother transition
          >
            <div className="slide-content">
              <h1 className="slide-title">
                {currentSlide.title} <br />
                <span className="highlight">{currentSlide.highlight}</span>
              </h1>
              <p className="slide-subtitle">{currentSlide.subtitle}</p>
              <button
                className="slide-cta"
                type="button"
                aria-label={currentSlide.ctaLabel}
                onClick={() => navigate(currentSlide.ctaLink)} // ✅ Navigate
              >
                {currentSlide.ctaLabel}
              </button>
            </div>

            <div className="slide-image-wrapper">
              <img
                src={currentSlide.image}
                alt={currentSlide.highlight}
                className="slide-image"
                loading="lazy"
              />
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button className="nav-arrow prev-arrow" onClick={handlePrev}><HiChevronLeft /></button>
        <button className="nav-arrow next-arrow" onClick={handleNext}><HiChevronRight /></button>
      </div>
    {/* Foundation Metrics */} <div className="foundation-metrics"> {[ { label: "Widows Supported", value: 3200 }, { label: "Communities Reached", value: 85 }, { label: "Medical Missions", value: 120 }, ].map(({ label, value }, index) => ( <motion.div key={label} className="metric-box" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.2 }} viewport={{ once: true }} > <motion.span className="metric-value" initial={{ textContent: 0 }} animate={{ textContent: value }} transition={{ duration: 2 }} > {value.toLocaleString()} </motion.span> <span className="metric-label">{label}</span> </motion.div> ))} </div> </section> ); };
    
    export default Header;