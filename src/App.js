import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

// Import pages/sections
import {
  Header,
  Mission,
  ProgramsPreview,
  AboutUs,
  Events,
  Partners,
  Contact,Donate,
  Footer,
  Blog,BlogDetails
} from "./container/index.js";
// import BlogDetails from "./container/BlogDetails.jsx"; // Import the new BlogDetails component
import { Navbar } from "./components/index.js";
import "./App.scss";

// NotFound component for 404 handling
const NotFound = () => (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -15 }}
    transition={{ duration: 0.4 }}
    className="not-found"
  >
    <h1>404 - Page Not Found</h1>
    <p>Sorry, the page you're looking for doesn't exist.</p>
    <a href="/" className="back-home-btn">Back to Home</a>
  </motion.div>
);

// Loading bar
const LoadingBar = ({ isLoading }) => (
  <motion.div
    className="loading-bar"
    initial={{ scaleX: 0 }}
    animate={{ scaleX: isLoading ? 1 : 0 }}
    exit={{ scaleX: 0 }}
    transition={{ duration: 0.6, ease: "easeInOut" }}
  />
);

// Overlay for transition
const FadeOverlay = ({ isActive }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: isActive ? 0.35 : 0 }}
    transition={{ duration: 0.3, ease: "easeInOut" }}
    style={{
      position: "fixed",
      inset: 0,
      background: "linear-gradient(135deg, #C71585, #FFB6C1)",
      zIndex: 1200,
      pointerEvents: "none",
    }}
  />
);

// Wrapper for smooth page transitions
const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -15 }}
    transition={{ duration: 0.4 }}
  >
    {children}
  </motion.div>
);

// App content with Router context
const AppContent = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 700);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  const HomePage = () => (
    <>
      <Header />
      <Mission />
      <Partners />
      <Events />
    </>
  );

  return (
    <>
      <Navbar />
      <LoadingBar isLoading={loading} />
      <FadeOverlay isActive={loading} />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          {/* Home */}
          <Route path="/" element={<PageWrapper><HomePage /></PageWrapper>} />

          {/* Core pages */}
          <Route path="/about-us" element={<PageWrapper><AboutUs /></PageWrapper>} />
          <Route path="/programs" element={<PageWrapper><ProgramsPreview /></PageWrapper>} />
          <Route path="/partners" element={<PageWrapper><Partners /></PageWrapper>} />
          <Route path="/events" element={<PageWrapper><Events /></PageWrapper>} />
          <Route path="/contact-us" element={<PageWrapper><Contact /></PageWrapper>} />
          <Route path="/donate" element={<PageWrapper><Donate /></PageWrapper>} />

          {/* Blog pages */}
          <Route path="/blog" element={<PageWrapper><Blog /></PageWrapper>} />
          <Route path="/blog/:id" element={<PageWrapper><BlogDetails /></PageWrapper>} />

          {/* 404 Fallback */}
          <Route path="/not-found" element={<PageWrapper><NotFound /></PageWrapper>} />
          <Route path="*" element={<PageWrapper><NotFound /></PageWrapper>} />
        </Routes>
      </AnimatePresence>

      <Footer />
    </>
  );
};

// Wrap App in Router
const App = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;