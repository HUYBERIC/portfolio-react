import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/components/_navbar.scss";

const Navbar = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const toggleMenu = () => {
    setIsMenuActive((prev) => !prev);
  };

  return (
    <nav className="header">
      <Link to="/" className="logo">
        Eric <span>Huybrechts</span>
      </Link>

      <ul className={`navbar ${isMenuActive ? "active" : "not-active"}`}>
        <li>
          <Link to="/about">About Me</Link>
        </li>
        <li>
          <Link to="/education">Education</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
      </ul>

      <Link to="/contact" className="gradient-btn">
        Contact Me
      </Link>

      <i
        className={`bx ${isMenuActive ? "bx-x" : "bx-menu"} ${
          isMenuActive ? "active" : ""
        }`}
        id="menu-icon"
        onClick={toggleMenu}
      ></i>
    </nav>
  );
};

export default Navbar;
