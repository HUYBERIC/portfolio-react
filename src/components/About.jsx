import React, { useState } from "react";
import "../styles/components/_about.scss";
import memoji3 from "../img/memoji3.png";
import ModalReadMore from "./modals/ModalReadMore";
import ModalSkills from "./modals/ModalSkills";

const About = () => {
  const [showModalReadMore, setShowModalReadMore] = useState(false);

  const [showModalSkills, setShowModalSkills] = useState(false);

  const openModal = (type) => {
    if (type === "readMore") {
      setShowModalReadMore(true);
    } else if (type === "skills") {
      setShowModalSkills(true);
    }
  };

  const closeModal = (type) => {
    if (type === "readMore") {
      setShowModalReadMore(false);
    } else if (type === "skills") {
      setShowModalSkills(false);
    }
  };

  return (
    <section className="about" id="about">
      <div className="about-img">
        <img src={memoji3} alt="" />
      </div>

      <div className="about-content">
        <h2>
          About <span>Me</span>
        </h2>
        <p>
          I'm a 28-year-old Belgian, proud pet parent to Tiddy, my border
          collie, and two cats, Sushi and Lewy. Self-taught in most of my
          skills, I’m always learning to stay on top of the latest tech. With
          near-perfect mastery of HTML, CSS, and JavaScript, I'm constantly
          adding new skills to my toolkit for even greater versatility.
        </p>
        <div className="btn-group">
          <button
            onClick={() => openModal("readMore")}
            className="btn btn-read-more btn"
          >
            Read More
          </button>
          <button
            onClick={() => openModal("skills")}
            className="btn btn-skills btn"
          >
            Skills
          </button>
        </div>
      </div>

      {showModalReadMore && (
        <ModalReadMore onClose={() => closeModal("readMore")} />
      )}
      {showModalSkills && <ModalSkills onClose={() => closeModal("skills")} />}
    </section>
  );
};

export default About;
