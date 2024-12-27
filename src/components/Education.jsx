import React from 'react'
import "../styles/components/_education.scss";

const EducationPage = () => {
  return (
    <section className="first-section-education" id="education">
      <h2 className="heading">Education</h2>

      <div className="timeline-items">
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-date">2025</div>
          <div className="timeline-content">
            <h3>Professional Training - Career Change</h3>
            <p>
              Fullstack Web Developer training with a 2-month internship at Liège Airport.
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-date">2020</div>
          <div className="timeline-content">
            <h3>Higher Education (University College)</h3>
            <p>
              Graduated as a Mathematics Teacher, qualified to teach in lower
              secondary education (first and second cycles).
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-date">2014</div>
          <div className="timeline-content">
            <h3>Secondary Education</h3>
            <p>
              Graduated in General Studies with a focus on Economic Sciences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationPage;