import React from 'react';

export default function Navbar({ onTerminalOpen, soundEnabled, onSoundToggle }) {
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
            <li><a href="#education">Education</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <div className="nav-controls">
            <button 
              id="sound-toggle" 
              className={`control-btn ${soundEnabled ? 'active' : ''}`} 
              title="Toggle Sound" 
              onClick={onSoundToggle}
              aria-label="Toggle Sound"
            >
              {soundEnabled ? (
                <svg className="sound-on" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 4L9.91 6.09L12 8.18M18.5 12C18.5 9.75 17.2 7.81 15.33 6.89L14.07 8.15C15.19 8.84 16 10.3 16 12C16 13.7 15.19 15.16 14.07 15.85L15.33 17.11C17.2 16.19 18.5 14.25 18.5 12M14 3.23V5.29C17.3 6.14 19.8 9.17 19.8 12.77C19.8 16.37 17.3 19.4 14 20.25V22.31C18.5 21.41 21.8 17.48 21.8 12.77C21.8 8.06 18.5 4.13 14 3.23M3 9V15H7L12 20V4L7 9H3Z"/>
                </svg>
              ) : (
                <svg className="sound-off" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 4L9.91 6.09L12 8.18M4.27 3L3 4.27L7.73 9H3V15H7L12 20V13.27L16.25 17.52C15.58 18.04 14.83 18.42 14 18.6V20.66C15.38 20.43 16.63 19.78 17.67 18.94L20.73 22L22 20.73L4.27 3M19.8 12.77C19.8 14.27 19.34 15.65 18.57 16.82L20.03 18.28C21.14 16.71 21.8 14.81 21.8 12.77M12 4L9.91 6.09L12 8.18M16.5 12C16.5 10.3 15.69 8.84 14.57 8.15L15.83 6.89C17.7 7.81 19 9.75 19 12C19 13.06 18.67 14.05 18.1 14.87L16.64 13.41C16.55 12.96 16.5 12.49 16.5 12M14 8.23L12 10.23V5.88L14 7.88" />
                </svg>
              )}
            </button>
            <button 
              id="terminal-trigger" 
              className="control-btn" 
              title="Open Console (/) or (Ctrl+K)" 
              onClick={onTerminalOpen}
              aria-label="Open Console"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20,19H4A2,2 0 0,1 2,17V7A2,2 0 0,1 4,5H20A2,2 0 0,1 22,7V17A2,2 0 0,1 20,19M20,7H4V17H20V7M6,15V13H8V15H6M10,15V13H18V15H10M6,11V9H10V11H6M12,11V9H18V11H12Z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
