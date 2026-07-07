import React from 'react';

export default function Navbar() {
  return (
    <nav className="navbar" id="site-navbar">
      <div className="container">
        <div className="nav-wrapper">
          <div className="logo-wrapper" id="nav-logo">
            <img src="/IMG.jpeg" alt="Idusara Chathum" className="nav-profile-image" />
            <span className="logo">IDUSARA CHATHUM</span>
          </div>
          <ul className="nav-menu" id="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#certifications">Certifications</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
