import React, {useState, useEffect} from 'react'
import {Routes, Route} from 'react-router-dom'

import Loader from './components/Loader'
import Navbar from './components/Navbar';

import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import ProjectsPage from './pages/ProjectsPage'
import ContactPage from './pages/ContactPage'
import EducationPage from './pages/EducationPage'

import '@fortawesome/fontawesome-free/css/all.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


const App = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const [isContentVisible, setIsContentVisible] = useState(false);

  useEffect(() => {
    
    const timer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(() => {
        setIsLoading(false);
        setIsContentVisible(true);
        AOS.refresh();
      }, 800);
    }, 2000);

    return () => clearTimeout(timer)
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
    AOS.refresh();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      AOS.refreshHard();
    };
    window.addEventListener("resize", handleResize);
  
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className='container'>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={`main-container ${isContentVisible ? "fade-in" : ""}`}>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/projects" element={<ProjectsPage/>} />
          <Route path="/contact" element={<ContactPage/>} />
        </Routes>
      </div>
    )}
    </div>
  )
}

export default App