// CONFIG IMPORTS
import React from 'react';

// COMPONENTS IMPORTS
import ExperienceComponent from "./ExperienceComponent";

const EducationSection = () => {
  return (
    <div className="work-education-section">
      <h3>EDUCATION</h3>
      <div className="content">
        <ExperienceComponent 
          title="Project Manager" 
          location="Meiyume" 
          date="Aug. 2019 - Jul. 2020 " 
          description="desfdgnfdln gnfdlnhkldfn fdh fd" 
        />
        <ExperienceComponent 
          title="Quality Engineer" 
          location="Meiyume" 
          date="Aug. 2017 - Jul. 2019 " 
          description="desfdgnfdln gnfdlnhkldfn fdh fd" 
        />
        <ExperienceComponent 
          title="Supplier Quality Engineer" 
          location="Telenco" 
          date="Nov. 2015 - Jun. 2017 " 
          description="desfdgnfdln gnfdlnhkldfn fdh fd" 
        />
      </div>
    </div>
  );
};

export default EducationSection;
