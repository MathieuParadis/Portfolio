// CONFIG IMPORTS
import React from 'react';

// ASSETS IMPORTS
import koala from '../assets/images/koala.svg';
import gh_logo from '../assets/logos/github.svg';
import in_logo from '../assets/logos/linkedin.svg';
import ig_logo from '../assets/logos/instagram.svg';

const Home = () => {
  return (
    <div className="home">
      <div className="d-flex flex-column-reverse align-items-center flex-md-row justify-content-md-between">
        <div className="presentation">
          <h1 className="presentation-name">Hello I'm <strong>Mathieu Paradis</strong></h1>
          <h3>I’m a frontend developer bla bla bla.</h3>
          <div className="networks">
            <a href="https://github.com/MathieuParadis" target="_blank">
              <img className="social-network-logo" src={gh_logo} alt="Github logo"/>
            </a>
            <a href="https://www.linkedin.com/in/mathieu-p-26593498/" target="_blank">
              <img className="social-network-logo" src={in_logo} alt="Linkedin logo"/>
            </a>
            <a href="https://www.instagram.com/shewingcat/" target="_blank">
              <img className="social-network-logo" src={ig_logo} alt="Instagram logo"/>
            </a>
          </div>
        </div>
        <div className="illustration">
          <img src={koala} alt="Koala drawing" />
        </div>
      </div>
    </div>
  );
};

export default Home;