import React from "react";
import ProjectCard from "../components/cards/ProjectCard";
import "../styles/components/_projects.scss";

import FPDesk from "../mockup/FPDesk.png";
import FPTablet from "../mockup/FPTablet.png";
import FPMobile from "../mockup/FPMobile.png";

import UPDesk from "../mockup/UPDesk.png";
import UPTablet from "../mockup/UPTablet.png";
import UPMobile from "../mockup/UPMobile.png";

import CDDesk from "../mockup/CDDesk.png";
import CDTablet from "../mockup/CDTablet.png";
import CDMobile from "../mockup/CDMobile.png";

import MealDesk from "../mockup/MealDesk.png";
import MealTablet from "../mockup/MealTablet.png";
import MealMobile from "../mockup/MealMobile.png";

import TMDBDesk from "../mockup/TMDBDesk.png";
import TMDBDesk2 from "../mockup/TMDBDesk2.png";
import TMDSearch from "../mockup/TMDSearch.png";
import TMDBHover from "../mockup/TMDBHover.png";
import TMDBModal from "../mockup/TMDBModal.png";
import TMDBLogin from "../mockup/TMDBLogin.png";
import TMDSignUp from "../mockup/TMDSignUp.png";

const Projects = () => {
  const projects = [
    {
      title: "ClassicProjectCSS",
      subtitle: "First responsive project",
      images: [FPDesk, FPTablet, FPMobile],
      date: "September 2024",
      link: "https://huyberic.github.io/TheFinalProjectCss/",
    },
    {
      title: "GalaxyProjectCSS",
      subtitle: "First big project",
      images: [UPDesk, UPTablet, UPMobile],
      date: "October 2024",
      link: "https://huyberic.github.io/UltimateProjectCSS/",
    },
    {
      title: "CreativeDesign",
      subtitle: "Full responsive project",
      images: [CDDesk, CDTablet, CDMobile],
      date: "October 2024",
      link: "https://huyberic.github.io/DesignCreative/",
    },
    {
      title: "TheMealDB",
      subtitle: "First API project",
      images: [MealDesk, MealTablet, MealMobile],
      date: "November 2024",
      link: "https://huyberic.github.io/TheMealDB/",
    },
    {
      title: "TheMovieDB",
      subtitle: "Netflix like - desktop only",
      images: [
        TMDBDesk,
        TMDBDesk2,
        TMDSearch,
        TMDBHover,
        TMDBModal,
        TMDBLogin,
        TMDSignUp,
      ],
      date: "November 2024",
      link: "https://huyberic.github.io/BeMovies/",
    },
  ];

  return (
    <section className="fourth-section-projects">
      <h2 className="heading">Projects</h2>
      <div className="wrapper">
        {projects.map((project) => (
          <ProjectCard
            id={project.id}
            title={project.title}
            subtitle={project.subtitle}
            images={project.images}
            date={project.date}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
