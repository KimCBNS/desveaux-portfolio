// Using link instead of href is better with React because
// it does not cause a whole page reload it just refreshed that
// part of the application. it behaves like an anchor tag but without the reload

import React from 'react'; // Import React
import { Link, useLocation } from 'react-router-dom';

function NavBar() {
  // to know which link is clicked and active
  const location = useLocation();

<nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
  <div className="container-fluid">
    {/* Your content here */}
  </div>
</nav>



  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <div className="container-fluid">
      <Link className="navbar-brand" to="/">Kim Desveaux</Link>
      <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link
                className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${location.pathname === '/portfolio' ? 'active' : ''}`}
                to="/portfolio"
              >
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
                to="/contact"
              >
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${location.pathname === '/resume' ? 'active' : ''}`}
                to="/resume"
              >
                Resume
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;