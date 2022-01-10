// CONFIG IMPORTS
import React, {  useContext } from 'react';
import { NavLink } from 'react-router-dom';

// BOOTSTRAP COMPONENTS IMPORTS
import { Button } from 'react-bootstrap';
import DarkMode from "./context/DarkMode";

// ASSETS IMPORTS
import logo from '../assets/logos/logo.svg';
import { logo_dark } from '../assets/logos/logo_dark.svg'

const Navigation = ({}) => {
  const { darkMode, setDarkMode } = useContext(DarkMode);

  return (
    <div className="navigation">
      <div>
        <img className="logo" src={logo} alt="MP logo" />
      </div>
      <div className="d-flex flex-row justify-content-between">
        <div class="nav-links">
          <NavLink exact to="/">Home</NavLink>
          <NavLink exact to="/portfolio">Portfolio</NavLink>
          <NavLink exact to="/resume">Resume</NavLink>
          <NavLink exact to="/contact">Contact</NavLink>
        </div>
        <Button variant="outline-primary">Dark mode</Button>{' '}
        <div>
          <input type="checkbox" className="" id="checkbox" checked={darkMode ? true : false} onChange={setDarkMode}/>
        </div>

      </div>
    </div>
  );
};
export default Navigation;

