import React from 'react';

export default function Hero() {
  return (
    <section id="home" className="hero">
      {/* Floating Neon Blur Blobs */}
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
      
      <div className="container">
        <div className="hero-wrapper">
          <div className="hero-content">
            <div className="hero-subtitle-wrapper">
              <span className="hero-subtitle">Welcome to my portfolio</span>
            </div>
            <h1 className="hero-name">
              <span className="name-line">Idusara Chathum</span>
              <span className="name-line">Wishwanath</span>
            </h1>
            <p className="hero-title">IT Undergraduate & Web Developer</p>
            <p className="hero-tagline">
              Crafting elegant digital experiences with clean code and modern design.
            </p>
            <div className="hero-buttons">
              <a 
                href="/IDUSARA CHATHUM  Cv Resume.pdf" 
                className="btn btn-primary" 
                download="Idusara_Chathum_Resume.pdf"
                id="btn-download-cv"
              >
                Download Resume
              </a>
              <a href="#contact" className="btn btn-secondary" id="btn-hire-me">Hire Me</a>
            </div>
            <div className="hero-social">
              <a 
                href="https://www.linkedin.com/in/idusara-chathum-03075a320" 
                target="_blank" 
                rel="noreferrer" 
                className="social-icon" 
                title="LinkedIn"
                id="social-linkedin"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.725-2.004 1.425-.103.25-.129.599-.129.949v5.431h-3.523s.047-8.81 0-9.728h3.523v1.378c.43-.664 1.198-1.609 2.920-1.609 2.134 0 3.733 1.395 3.733 4.396v5.563zM5.337 9.433c-1.144 0-1.915-.758-1.915-1.707 0-.955.768-1.708 1.959-1.708 1.188 0 1.914.753 1.939 1.708 0 .949-.751 1.707-1.983 1.707zm1.946 11.019H3.393V9.724h3.89v10.728zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                </svg>
              </a>
              <a 
                href="https://github.com/Idusara" 
                target="_blank" 
                rel="noreferrer" 
                className="social-icon" 
                title="GitHub"
                id="social-github"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="profile-image-container">
              <div className="avatar-ring-outer"></div>
              <div className="avatar-ring-inner"></div>
              <img src="/IMG.jpeg" alt="Idusara Chathum Wishwanath" className="profile-image" />
              
              {/* Orbiting Badges */}
              <div className="floating-badge badge-kotlin" title="Kotlin">
                <span className="badge-icon">Kotlin</span>
              </div>
              <div className="floating-badge badge-react" title="React">
                <span className="badge-icon">React</span>
              </div>
              <div className="floating-badge badge-java" title="Java">
                <span className="badge-icon">Java</span>
              </div>
              <div className="floating-badge badge-db" title="MySQL">
                <span className="badge-icon">MySQL</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Mouse Indicator */}
      <div className="scroll-indicator-container">
        <a href="#about" className="scroll-mouse-btn" aria-label="Scroll Down">
          <span className="mouse-wheel"></span>
        </a>
      </div>
    </section>
  );
}
