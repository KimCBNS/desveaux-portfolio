import React from 'react'

export default function Footer() {
    return (
      <footer className="footer">
        <div className="container text-center">
          <h5>Connect with me:</h5>
          <div className="social-icons">
            <a href="https://www.facebook.com/kim.desveaux.50" title="Facebook" target="_blank" rel="noopener noreferrer">
              <img className="social-icon" src="assets/facebook.png" alt="Facebook icon" />
            </a>
            <a href="https://www.instagram.com/kim_desveaux/" title="Instagram" target="_blank" rel="noopener noreferrer">
              <img className="social-icon" src="assets/instagram.png" alt="Instagram icon" />
            </a>
            <a href="https://www.linkedin.com/in/kimberly-desveaux-62105076/" title="LinkedIn" target="_blank" rel="noopener noreferrer">
              <img className="social-icon" src="assets/linkedin.png" alt="LinkedIn icon" />
            </a>
            <a href="https://github.com/KimCBNS" title="GitHub" target="_blank" rel="noopener noreferrer">
              <img className="social-icon" src="assets/github-logo.png" alt="GitHub icon" />
            </a>
          </div>
        </div>
      </footer>
    );
  }
  
