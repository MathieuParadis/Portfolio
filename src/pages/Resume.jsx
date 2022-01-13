// CONFIG IMPORTS
import React from 'react';

// COMPONENTS IMPORTS
import CodingLanguageSection from '../components/CodingLanguageSection';

const Resume = () => {
  return (
    <div className="resume">
      <div className="page">
        <div className="content">
          <div className="head">
            <h1><strong>Mathieu Paradis</strong></h1>
            <p>French Web Developer based between Europe and Asia. Passionate about minimalism, sustainability, coffee and bread.</p>
          </div>
          <div className="body">
            <CodingLanguageSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;