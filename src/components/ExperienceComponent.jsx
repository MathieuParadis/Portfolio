import React from 'react';

const ExperienceComponent = ({title, location, date, description}) => {
  return (
    <div className="experience-component">
      <h4 className="title">{title}</h4>
      <div>
        <h5 className="location">{location}</h5> |
        <h6 className="date">{date}</h6>
      </div>
      <p className="description">{description}</p>
    </div>
  );
};

export default ExperienceComponent;