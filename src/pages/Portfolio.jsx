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
        <ProjectCard img={projects[0].img} title={projects[0].title}/>
        <ProjectCard img={projects[1].img} title={projects[1].title}/>
        <ProjectCard img={projects[2].img} title={projects[2].title}/>
        <ProjectCard img={projects[3].img} title={projects[3].title}/>
        <ProjectCard img={projects[4].img} title={projects[4].title}/>
      </div>
      {/* <ProjectModal /> */}
    </div>
  );
};

export default Portfolio;