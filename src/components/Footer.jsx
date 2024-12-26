import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import fiverr from "../img/fiverr.png";
import "../styles/components/_footer.scss";
import Timer from "./Timer";

const Footer = () => {
  // Fonction pour copier l'ID Discord
  const handleCopyDiscord = () => {
      const discordID = "263325233283334145";
      navigator.clipboard
        .writeText(discordID)
        .then(() => {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "ID copied successfully!",
            text: "Now, you can contact me on Discord!",
            showConfirmButton: false,
            timer: 1500,
            customClass: {
              popup: "custom-popup-class",
              title: "custom-title-class",
              icon: "custom-icon-class",
            },
          });
        })
        .catch((err) => {
          console.error("Copy error", err);
        });
    };

  return (
    <footer className="footer">
      
      <Timer/>

      <ul className="list">
        {/* Liste des liens internes */}
        <li>
          <Link to="/about">About Me</Link>
        </li>
        <li>
          <Link to="/education">Educations</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      <p className="copyright">
        &copy; Eric Huybrechts | All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
