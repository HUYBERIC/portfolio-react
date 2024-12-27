import React, { useState, useEffect } from "react";

const ScrambleText = ({ text, speed = 50, className = "" }) => {
  const [displayedText, setDisplayedText] = useState("");
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*";

  useEffect(() => {
    let currentIndex = 0;
    let interval;

    const scramble = () => {
      if (currentIndex < text.length) {
        const scrambledText = text
          .split("")
          .map((char, index) => {
            if (index <= currentIndex) return char; // Révéler les caractères alignés
            return characters[Math.floor(Math.random() * characters.length)]; // Brouillage
          })
          .join("");

        setDisplayedText(scrambledText);
        currentIndex++;
      } else {
        clearInterval(interval); // Arrêter une fois le texte final révélé
      }
    };

    interval = setInterval(scramble, speed);

    return () => clearInterval(interval); // Nettoyer l'intervalle à la fin
  }, [text, speed]);

  return <span className={className}>{displayedText}</span>; // Ajout de className ici
};

export default ScrambleText;
