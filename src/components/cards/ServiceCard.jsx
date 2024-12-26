import React from "react";
import "../../styles/cards/_serviceCard.scss";
import "../../styles/modals/_ModalReadMore.scss";

const ServiceCard = ({ icon, title, description, comingSoon }) => {
  return (
    <div className="service-card">
      <div className="service-info">
        {/* Coming soon */}
        {comingSoon && <p className="coming-soon">Work in progress</p>}
        
        {/* Icon */}
        <i className={`bx ${icon}`}></i>
        
        {/* Title */}
        <h4>{title}</h4>
        
        {/* Description */}
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
