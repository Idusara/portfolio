import React, { useState, useEffect } from 'react';

export default function About() {
  const [progressWidths, setProgressWidths] = useState({ arch: 0, logic: 0, collab: 0 });

  useEffect(() => {
    // Smoothly animate progress bars on component load
    const timer = setTimeout(() => {
      setProgressWidths({ arch: 85, logic: 90, collab: 95 });
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="about" className="objective">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-wrapper">
          {/* Left: Interactive Bio & Journey */}
          <div className="about-bio" id="about-bio-container">
            <div className="bio-card">
              <span className="bio-subtitle text-glow-cyan">MY JOURNEY</span>
              <h3 className="bio-title">Passionate Developer & Lifelong Learner</h3>
              <p className="bio-text">
                I am a dedicated IT Undergraduate at SLIIT, specializing in Software Engineering. My goal is to build scalable, high-performance applications that provide exceptional user experiences. I bridge the gap between technical complexity and design elegance.
              </p>
              
              <div className="bio-stats-grid">
                <div className="bio-stat-card">
                  <span className="stat-number text-glow-cyan">2+</span>
                  <span className="stat-label">Years of Coding</span>
                </div>
                <div className="bio-stat-card">
                  <span className="stat-number text-glow-purple">100%</span>
                  <span className="stat-label">Dedication</span>
                </div>
              </div>

              <div className="bio-edu-card">
                <div className="edu-icon-wrapper">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                    <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path>
                  </svg>
                </div>
                <div className="edu-info">
                  <h4 className="edu-title">SLIIT Undergraduate</h4>
                  <p className="edu-text">BSc (Hons) in Information Technology, specializing in Software Engineering</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Pillars */}
          <div className="about-pillars" id="about-pillars-container">
            {/* Pillar 1 */}
            <div className="pillar-card" id="pillar-tech">
              <div className="pillar-icon-wrapper">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                  <line x1="14" y1="2" x2="10" y2="22"></line>
                </svg>
              </div>
              <div className="pillar-info">
                <div className="pillar-header">
                  <h3 className="pillar-title">Technical Architecture</h3>
                  <span className="pillar-percent">{progressWidths.arch}%</span>
                </div>
                <div className="about-progress-container">
                  <div className="about-progress-bar" style={{ width: `${progressWidths.arch}%` }}></div>
                </div>
                <p className="pillar-text">Writing clean, modular, and optimized code following best practices.</p>
              </div>
            </div>
            
            {/* Pillar 2 */}
            <div className="pillar-card" id="pillar-logic">
              <div className="pillar-icon-wrapper">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="18" cy="18" r="3"></circle>
                  <circle cx="6" cy="6" r="3"></circle>
                  <circle cx="18" cy="6" r="3"></circle>
                  <line x1="6" y1="9" x2="6" y2="21"></line>
                  <path d="M9 18h9"></path>
                  <path d="M12 6H9"></path>
                </svg>
              </div>
              <div className="pillar-info">
                <div className="pillar-header">
                  <h3 className="pillar-title">Analytical Logic</h3>
                  <span className="pillar-percent">{progressWidths.logic}%</span>
                </div>
                <div className="about-progress-container">
                  <div className="about-progress-bar" style={{ width: `${progressWidths.logic}%` }}></div>
                </div>
                <p className="pillar-text">Breaking down complex business issues into structured step solutions.</p>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="pillar-card" id="pillar-collab">
              <div className="pillar-icon-wrapper">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <div className="pillar-info">
                <div className="pillar-header">
                  <h3 className="pillar-title">Collaboration</h3>
                  <span className="pillar-percent">{progressWidths.collab}%</span>
                </div>
                <div className="about-progress-container">
                  <div className="about-progress-bar" style={{ width: `${progressWidths.collab}%` }}></div>
                </div>
                <p className="pillar-text">Working transparently in team cycles with high collective integrity.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
