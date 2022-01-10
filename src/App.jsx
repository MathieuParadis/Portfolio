import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import pages
import Home from './pages/Home';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';


// import components
import Navigation from './components/Navigation';
import DarkMode from './components/context/DarkMode';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);


  // useEffect(() => {
  //   const temp = JSON.parse(localStorage.getItem("themePreference"));
  //   if (temp !== undefined && temp !== null) {
  //     setDarkMode(temp);
  //   }
  //   else if (
  //     window.matchMedia &&
  //     window.matchMedia("(prefers-color-scheme: dark)").matches
  //   ) {
  //     setDarkMode(true);
  //   }
  // });

  // useEffect(() => {
  //   if (darkMode) {
  //     const body = document.querySelector("#root");
  //     body.classList.add("dark-mode");
  //   }
  // }, [darkMode]);

  const switchMode = () => {
    const body = document.querySelector("#root");
    body.classList.toggle("dark-mode");
    // localStorage.setItem("themePreference", String(!darkMode));
    setDarkMode(!darkMode);
    alert("dgsgfd")
  };



  return (
    <Router>
      <DarkMode.Provider value={{ darkMode, setDarkMode: switchMode }}>
        <Navigation />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/portfolio" exact element={<Portfolio />} />
          <Route path="/resume" exact element={<Resume />} />
          <Route path="/contact" exact element={<Contact />} />
        </Routes>
      </DarkMode.Provider>
    </Router>
  );
}

export default App;