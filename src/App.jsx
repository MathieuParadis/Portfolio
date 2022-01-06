import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import pages
import Home from './pages/Home';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';


// import components
import Navigation from './components/Navigation';

const App = () => {
  return (
    <Router>
      <Navigation />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/portfolio" exact element={<Portfolio />} />
          <Route path="/resume" exact element={<Resume />} />
          <Route path="/contact" exact element={<Contact />} />

        </Routes>
    </Router>
  );
}

export default App;