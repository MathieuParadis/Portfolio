import React from 'react';

const ProjectCard = (project) => {
  const {title, img} = project
  return (
    <div className="project-card col-12 col-md-6 col-lg-4 my-3 p-0 px-sm-2">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={img} alt={title + " illustration"} />
        </div>
        <div className="flip-card-back">
          <h5>{title}</h5>
          <button>View project</button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;