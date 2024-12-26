import React from 'react'
import "../styles/components/_services.scss";
import ServiceCard from "./cards/ServiceCard";

const Services = () => {
  // Données des cartes
  const services = [
    {
      icon: "bx-code",
      title: "Frontend Development",
      description:
        "I create engaging, responsive websites using HTML, CSS, and JavaScript (React) to enhance user experience and drive engagement.",
      comingSoon: false,
    },
    {
      icon: "bx-code-curly",
      title: "Backend Development",
      description:
        "I build secure server-side applications and efficient APIs for seamless data flow and user interactions.",
      comingSoon: true,
    },
    {
      icon: "bxl-figma",
      title: "UI Designer",
      description:
        "I design intuitive, user-friendly interfaces that enhance navigation and prioritize aesthetics, improving overall user satisfaction.",
      comingSoon: false,
    },
    {
      icon: "bxs-file-find",
      title: "File Organizer",
      description:
        "I streamline your digital filing system, optimizing document organization for easy access and increased efficiency, allowing you to focus on your core tasks.",
      comingSoon: false,
    },
  ];

  return (
    <section className="services" id="services">
      <h2 className="heading">Services</h2>
      <div className="services-container">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
            comingSoon={service.comingSoon}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;