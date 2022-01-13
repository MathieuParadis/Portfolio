// CONFIG IMPORTS
import React, {  useContext } from 'react';

// COMPONENTS IMPORTS
import DarkMode from "./context/DarkMode";

// ASSETS IMPORTS
import html from '../assets/logos/html.svg';
import html_dark from '../assets/logos/html_dark.svg';
import css from '../assets/logos/css.svg';
import css_dark from '../assets/logos/css_dark.svg';
import js from '../assets/logos/js.svg';
import js_dark from '../assets/logos/js_dark.svg';
import react from '../assets/logos/react.svg';
import react_dark from '../assets/logos/react_dark.svg';
import ruby from '../assets/logos/ruby.svg';
import ruby_dark from '../assets/logos/ruby_dark.svg';
import rails from '../assets/logos/rails.svg';
import rails_dark from '../assets/logos/rails_dark.svg';

const CodingLanguageSection = () => {
  const { darkMode, setDarkMode } = useContext(DarkMode);

  return (
    <div className="coding-language-section">
      <h3>CODING LANGUAGES</h3>
      <div className="content">
        <div className="coding-language-box">
          <img className="coding-language-logo" src={darkMode ? html_dark : html} alt="HTML5 logo" />
          <p>HTML 5</p>
        </div>
        <div className="coding-language-box">
          <img className="coding-language-logo" src={darkMode ? css_dark : css} alt="CSS3 logo" />
          <p>CSS 3</p>
        </div>
        <div className="coding-language-box">
          <img className="coding-language-logo" src={darkMode ? js_dark : js} alt="JS logo" />
          <p>JavaScript</p>
        </div>
        <div className="coding-language-box">
          <img className="coding-language-logo" src={darkMode ? react_dark : react} alt="React logo" />
          <p>React JS</p>
        </div>
        <div className="coding-language-box">
          <img className="coding-language-logo" src={darkMode ? ruby_dark : ruby} alt="Ruby logo" />
          <p>Ruby</p>
        </div>
        <div className="coding-language-box">
          <img className="coding-language-logo" src={darkMode ? rails_dark : rails} alt="Ruby on Rails logo" />
          <p>Rails</p>
        </div>
      </div>
    </div>
  );
};

export default CodingLanguageSection;