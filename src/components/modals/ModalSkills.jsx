import React from 'react';
import { useEffect } from 'react';
import apiImg from '../../svg/api.svg';
import dutchImg from '../../svg/dutch.svg';
import ejsImg from '../../svg/ejs.svg';
import english1Img from '../../svg/english1.svg';
import english2Img from '../../svg/english2.svg';
import frenchImg from '../../svg/french.svg';

import '../../styles/modals/_modalSkills.scss';

const ModalSkills = ({ onClose }) => {

  useEffect(() => {
  // Calcul de la largeur de la scrollbar
  const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

  // Bloque le scroll global
  document.documentElement.style.overflow = 'hidden';
  document.documentElement.style.paddingRight = `${scrollbarWidth}px`;

  // Nettoyage à la fermeture
  return () => {
    document.documentElement.style.overflow = '';
    document.documentElement.style.paddingRight = '';
  };
}, []);

  
  return (
    <div className="modal-skills">
      {/* Overlay */}
      <div className="overlay-skills" onClick={onClose}></div>

      {/* Modal Content */}
      <div className="modal-for-skills">
        <i className="bx bx-window-close closing-modal-skills" onClick={onClose}></i>

          <h3>The crossed-out skills are currently being learned.</h3>
        <div className="modal-skills-content">

          <div className="skills-n-1 skills-div">
            <i className="bx bxl-html5 html"></i>
          </div>
          <div className="skills-n-2 skills-div">
            <i className="bx bxl-css3 css"></i>
          </div>
          <div className="skills-n-3 skills-div">
            <i className="bx bxl-tailwind-css tailwinds"></i>
          </div>
          <div className="skills-n-4 skills-div english1">
            <img src={english1Img} alt="English Level 1" />
          </div>
          <div className="skills-n-5 skills-div">
            <i className="bx bxl-php php"></i>
          </div>
          <div className="skills-n-6 skills-div">
            <i className="bx bxl-git git"></i>
          </div>
          <div className="skills-n-7 skills-div">
            <i className="bx bxl-javascript js"></i>
          </div>
          <div className="skills-n-8 skills-div french">
            <img src={frenchImg} alt="French" />
          </div>
          <div className="skills-n-9 skills-div">
            <i className="bx bxl-react react"></i>
          </div>
          <div className="skills-n-11 skills-div API">
            <img src={apiImg} alt="API" />
          </div>
          <div className="skills-n-16 skills-div dutch">
            <img src={dutchImg} alt="Dutch" />
          </div>
          <div className="skills-n-13 skills-div">
            <i className="bx bxl-nodejs Node-JS"></i>
          </div>
          <div className="skills-n-14 skills-div EJS">
            <img src={ejsImg} alt="EJS" />
          </div>
          <div className="skills-n-15 skills-div">
            <i className="bx bxl-sass SASS"></i>
          </div>
          <div className="skills-n-12 skills-div english2">
            <img src={english2Img} alt="English Level 2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalSkills;
