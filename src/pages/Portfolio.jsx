// CONFIG IMPORTS
import React from 'react';

// COMPONENTS IMPORTS
import ProjectModal from '../components/ProjectModal';

const Portfolio = () => {
  return (
    <div className="portfolio">
      <h1>Recent projects</h1>
      <div className="projects">
        Projects here
      </div>
      <ProjectModal />
    </div>
  );
};

export default Portfolio;