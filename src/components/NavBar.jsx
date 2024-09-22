// Using link instead of href is better with React because
// it does not cause a whole page reload it just refreshed that
// part of the application. it behaves like an anchor tag but without the reload

import React from 'react'; // Import React
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/resume">Resume</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;