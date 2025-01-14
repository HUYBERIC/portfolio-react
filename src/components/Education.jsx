import React from 'react'
import "../styles/components/_education.scss";
import ScrambleText from './ScrambleText';

const EducationPage = () => {
  return (
    <section className="first-section-education" id="education">
      <h2 className="heading">
      <ScrambleText text="Education" speed={80}/>
      </h2>

      <div className="timeline-items">
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-date">2025</div>
          <div className="timeline-content">
            <h3>
            <ScrambleText text="Professional Training - Career Change" speed={40}/>
            </h3>
            <p>
              Fullstack Web Developer training at BeCode with a 2-month internship at Liège Airport.
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-date">2020</div>
          <div className="timeline-content">
            <h3>
            <ScrambleText text="Higher Education (University College)" speed={40}/>
            </h3>
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
            <h3>
            <ScrambleText text="Secondary Education" speed={40}/>
            </h3>
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