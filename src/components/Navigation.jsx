// CONFIG IMPORTS
import React, {  useContext } from 'react';
import { NavLink } from 'react-router-dom';

// COMPONENTS IMPORTS
import DarkMode from "./context/DarkMode";

// ASSETS IMPORTS
import logo from '../assets/logos/logo.svg';
import logo_dark from '../assets/logos/logo_dark.svg'
import sun from '../assets/images/sun.svg'
import moon from '../assets/images/moon.svg'


const Navigation = () => {
  const { darkMode, setDarkMode } = useContext(DarkMode);

  return (
    <div className="navigation">
      <div>
        <img className="logo" src={darkMode ? logo_dark : logo} alt="MP logo" />
      </div>
      <div className="d-flex flex-row justify-content-between">
        <div class="nav-links pe-4">
          <NavLink exact to="/">Home</NavLink>
          <NavLink exact to="/portfolio">Portfolio</NavLink>
          <NavLink exact to="/resume">Resume</NavLink>
          <NavLink exact to="/contact">Contact</NavLink>
        </div>
        <div className="d-flex align-items-center">
          <input type="checkbox" className="" id="dark-mode-checkbox" checked={darkMode ? true : false} onChange={setDarkMode}/>
          <label for="dark-mode-checkbox"><img className="darkmode-logo" src={darkMode ? sun : moon} alt="Dark mode toggler button" /></label>
        </div>
      </div>
    </div>
  );
};
export default Navigation;

