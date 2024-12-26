import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Loader from './components/Loader';
import Navbar from './components/Navbar';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import EducationPage from './pages/EducationPage';

import { premiumVariants } from './styles/animations/animations';

import '@fortawesome/fontawesome-free/css/all.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const App = () => {
  const location = useLocation();

  const [isLoading, setIsLoading] = useState(true);
  const [isContentVisible, setIsContentVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setIsContentVisible(true);
      AOS.refresh();
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <div className="container">
        {isLoading ? (
          <Loader />
        ) : (
          <div className={`main-container ${isContentVisible ? "fade-in" : ""}`}>
            <Navbar />
            <Routes location={location} key={location.pathname}>
              <Route
                path="/"
                element={
                  <motion.div
                    variants={premiumVariants.default} // Glissement fluide + zoom
                    initial="initial"
                    animate="animate"
                    exit="exit"
                  >
                    <HomePage />
                  </motion.div>
                }
              />
              <Route
                path="/about"
                element={
                  <motion.div
                    variants={premiumVariants.rotate} // Rotation subtile
                    initial="initial"
                    animate="animate"
                    exit="exit"
                  >
                    <AboutPage />
                  </motion.div>
                }
              />
              <Route
                path="/education"
                element={
                  <motion.div
                    variants={premiumVariants.blur} // Apparition avec flou
                    initial="initial"
                    animate="animate"
                    exit="exit"
                  >
                    <EducationPage />
                  </motion.div>
                }
              />
              <Route
                path="/services"
                element={
                  <motion.div
                    variants={premiumVariants.default}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                  >
                    <ServicesPage />
                  </motion.div>
                }
              />
              <Route
                path="/projects"
                element={
                  <motion.div
                    variants={premiumVariants.default}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                  >
                    <ProjectsPage />
                  </motion.div>
                }
              />
              <Route
                path="/contact"
                element={
                  <motion.div
                    variants={premiumVariants.blur}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                  >
                    <ContactPage />
                  </motion.div>
                }
              />
            </Routes>
          </div>
        )}
      </div>
    </AnimatePresence>
  );
};

export default App;
