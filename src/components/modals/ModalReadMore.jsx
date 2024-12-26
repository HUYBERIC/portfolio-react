import React, { useEffect } from "react";
import "../../styles/modals/_modalReadMore.scss";
import memoji from "../../img/memoji.png";

const ModalReadMore = ({ onClose }) => {
  
  useEffect(() => {
    // Désactiver le scroll global
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.documentElement.style.overflow = 'hidden';
    document.body.style.paddingRight = `${scrollbarWidth}px`;
  
    // Ajuster la position de la modale par rapport à la section about
    const aboutSection = document.querySelector('.about');
    const modal = document.querySelector('.modal, .modal-for-skills');
    if (aboutSection && modal) {
      const aboutRect = aboutSection.getBoundingClientRect();
      modal.style.position = 'absolute';
      modal.style.top = `${aboutRect.top + window.scrollY + aboutRect.height / 2}px`;
      modal.style.left = `${aboutRect.left + aboutRect.width / 2}px`;
      modal.style.transform = 'translate(-50%, -50%)';
    }
  
    // Nettoyage à la fermeture
    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, []);
  

  return (
    <div className="modal-read-more" onClick={onClose}>
      {/* Overlay */}
      <div className="overlay"></div>
      {/* Modale */}
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <i className="bx bx-window-close closing-modal" onClick={onClose}></i>
        <div className="modal-img">
          <img src={memoji} alt="Hello" />
        </div>
        <div className="modal-content">
          <div className="full-name">
            <h3>Full Name :</h3>
            <p>Eric <span>Huybrechts</span></p>
          </div>
          <div className="age">
            <h3>Age :</h3>
            <p><span>28</span> years old</p>
          </div>
          <div className="birthday">
            <h3>Birthday :</h3>
            <p>February <span>15th</span></p>
          </div>
          <div className="astro">
            <h3>Astro sign :</h3>
            <p><span>Aquarius</span></p>
          </div>
          <div className="fav-color">
            <h3>Favorite Color :</h3>
            <p>I do'nt have <span>(I think)</span></p>
          </div>
          <div className="fav-meal">
            <h3>Favorite Meal :</h3>
            <p>Minced <span>beef tartare</span> with <span>fries</span></p>
          </div>
          <div className="hobbies">
            <h3>Hobbies :</h3>
            <p><span>Gaming</span>, <span>Tech</span> and <span>Dogs</span></p>
          </div>
          <div className="strength">
            <h3>Strength :</h3>
            <ul>
              <li>- Fast <span>learner</span></li>
              <li>- <span>Self</span>-taught, <span>always</span> learning</li>
              <li>- <span>Problem-solver</span>, critical thinker</li>
            </ul>
          </div>
          <div className="weakness">
            <h3>Weakness :</h3>
            <ul>
              <li>- <span>Perfectionist</span>, overanalyze sometimes</li>
              <li>- Struggle with <span>delegation</span></li>
              <li>- Difficulty saying <span>"no"</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalReadMore;