// CONFIG IMPORTS
import React from 'react';

// COMPONENTS IMPORTS

// COMPONENTS DATA
import projects from '../data/Projects';

const ProjectModal = () => {
  return (
    <div className="project-modal">

      Modal
      {
        projects.map((project) => {
          return (
            <img src={project.img} key={project.title}/>
          )
        })
      }
    </div>
  );
};

export default ProjectModal;