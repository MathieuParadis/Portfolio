// CONFIG IMPORTS
import React from 'react';

// COMPONENTS IMPORTS
import CodingLanguagesSection from '../components/CodingLanguagesSection';
import DesignToolsSection from '../components/DesignToolsSection';
import ContactSection from '../components/ContactSection';
import SpokenLanguagesSection from '../components/SpokenLanguagesSection';

const Resume = () => {
  return (
    <div className="resume">
      <div className="page">
        <div className="content">
          <div className="head">
            <h1><strong>Mathieu Paradis</strong></h1>
            <p>French Web Developer based between Europe and Asia. Passionate about minimalism, sustainability, coffee and bread.</p>
          </div>
          <div className="body d-flex flex-column flex-lg-row">
            <div className="first-section w-100 w-lg-50">
              dummy text
            </div>
            <div className="second-section d-flex flex-column h-100 w-100 w-lg-50">
              <CodingLanguagesSection />
              <DesignToolsSection />
              <SpokenLanguagesSection />
              <ContactSection />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;