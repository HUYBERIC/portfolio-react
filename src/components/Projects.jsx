import React, { useState, useEffect } from "react";
import ProjectCard from "../components/cards/ProjectCard";
import Loader from "../components/Loader";
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

import PFLoader from "../mockup/PFLoader.png";
import PFHero from "../mockup/PFHero.png";
import PFEducation from "../mockup/PFEducation.png";
import PFContact from "../mockup/PFContact.png";
import ScrambleText from "./ScrambleText";

const Projects = () => {

  const [isLoading, setIsLoading] = useState(true);
  
  const projects = [
    {
      title: "This portfolio",
      subtitle: "Don't click, juste visit",
      images: [
        PFLoader,
        PFHero,
        PFEducation,
        PFContact,
      ],
      date: "December 2024",
      link: "https://huyberic-pf-react.vercel.app/",
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
    {
      title: "TheMealDB",
      subtitle: "First API project",
      images: [MealDesk, MealTablet, MealMobile],
      date: "November 2024",
      link: "https://huyberic.github.io/TheMealDB/",
    },
    {
      title: "CreativeDesign",
      subtitle: "Full responsive project",
      images: [CDDesk, CDTablet, CDMobile],
      date: "October 2024",
      link: "https://huyberic.github.io/DesignCreative/",
    },
    {
      title: "GalaxyProjectCSS",
      subtitle: "First big project",
      images: [UPDesk, UPTablet, UPMobile],
      date: "October 2024",
      link: "https://huyberic.github.io/UltimateProjectCSS/",
    },
    {
      title: "ClassicProjectCSS",
      subtitle: "First responsive project",
      images: [FPDesk, FPTablet, FPMobile],
      date: "September 2024",
      link: "https://huyberic.github.io/TheFinalProjectCss/",
    },
  ];

  const preloadImages = (imageUrls) => {
    const promises = imageUrls.map((url) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = url;
        img.onload = resolve; // Succès
        img.onerror = reject; // Erreur
      });
    });
    return Promise.all(promises);
  };

  useEffect(() => {
    const allImages = projects.flatMap((project) => project.images); // Récupère toutes les URLs des images
    preloadImages(allImages).then(() => {
      setIsLoading(false); // Désactive le loader une fois que les images sont chargées
    });
  }, [projects]);

  return (
    <>
      {isLoading ? (
        <Loader /> // Affiche le loader pendant le chargement
      ) : (
        <section className="section-projects">
          <h2 className="heading">
          <ScrambleText text="Projects" speed={80}/>
          </h2>
          <div className="wrapper">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                subtitle={project.subtitle}
                images={project.images}
                date={project.date}
                link={project.link}
              />
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default Projects;
