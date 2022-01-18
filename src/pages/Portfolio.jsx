// CONFIG IMPORTS
import React from 'react';

// COMPONENTS IMPORTS
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';

// COMPONENTS DATA
import projects from '../data/Projects';

const Portfolio = () => {
  return (
    <div className="portfolio">
      <h1>Recent projects</h1>
      <div className="projects">
        Projects here
        <ProjectCard img={projects[0].img} title={projects[0].title}/>
      </div>
      {/* <ProjectModal /> */}
    </div>
  );
};

export default Portfolio;