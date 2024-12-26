import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Typed from "typed.js";
import Swal from "sweetalert2";
import "../styles/components/_hero.scss";
import memoji2 from "../img/memoji2.png";
import fiverr from "../img/fiverr.png";
import AOS from "aos";

const Hero = () => {
  useEffect(() => {
    const typed = new Typed(".multiple-text", {
      strings: [
        "Web Developer",
        "Frontend Developer",
        "Backend Developer",
        "UI/UX Magician",
        "Fast Learner",
      ],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    });
    return () => typed.destroy();
  }, []);

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

  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <section className="hero" id="hero">
      <div className="hero-content" data-aos="fade-right">
        <h1>
          Hi, It's <span>Eric</span>
        </h1>
        <h3>
          I'm a <span className="multiple-text"></span>
        </h3>
        <p>
          Passionate about computer science and mathematics since I was a child,
          I chose my passion for mathematics as my first life, at the expense of
          computer science. Having gotten used to digitizing everything in my
          first job, I realized it was time for me to thrive as a web developer.
          Here I am today, after daily investment, a fullstack web developer!
        </p>

        {/* Icônes sociales */}
        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/huyberic/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-linkedin"></i>
          </a>
          <a
            href="https://github.com/HUYBERIC"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-github"></i>
          </a>
          <a className="discordBtn" onClick={handleCopyDiscord}>
            <i className="bx bxl-discord-alt"></i>
            <p>Click to copy my ID</p>
          </a>
          <a
            className="fiverrDiv"
            href="https://www.fiverr.com/liliktv?up_rollout=true"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="fiverr" src={fiverr} alt="Fiverr" />
          </a>
        </div>

        <div className="btn-group">
          <Link to="#contact" className="btn">
            Hire
          </Link>
          <Link to="#contact" className="btn">
            Contact
          </Link>
        </div>
      </div>

      <div className="hero-img" data-aos="fade-left">
        <img src={memoji2} alt="Hero" />
      </div>
    </section>
  );
};

export default Hero;
