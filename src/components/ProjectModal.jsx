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
        {project && (project.title)}
      </div>
    </div>
  );
};

export default ProjectModal;