// CONFIG IMPORTS
import React from 'react';

const ProjectModal = ({project}) => {
  const closeModal = () => {
    let modal = document.querySelector(".project-modal");
    modal.style.visibility = "hidden";
  }

  window.onclick = (event) => {
    event.target === document.querySelector('.project-modal-overlay') &&
    event.target !== document.querySelector('.project-modal-content') &&
      closeModal()
  };

  return (
    <div className="project-modal">
      <div className="project-modal-overlay"></div>
      <div className="project-modal-content">
        {project && (
          <>
            <h1 className="m-0">{project.title}</h1>
            <img src={project.img} alt={project.title + " illustration"} />
            <p>{project.description}</p>
            <p>Stack: {project.stack}</p>
            <a href={project.url} target="_blank" className="project-link">Visit website</a>
          </>
        )}
      </div>
    </div>
  );
};

export default ProjectModal;