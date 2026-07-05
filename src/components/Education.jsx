import React, { useState } from 'react';

export default function Education() {
  const [expanded, setExpanded] = useState({
    sliit: false,
    al: false,
    ol: false,
  });

  const toggleExpand = (key) => {
    setExpanded((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="timeline">
          {/* SLIIT B.Sc. IT */}
          <div className="timeline-item">
            <div 
              className="timeline-dot timeline-icon-dot text-glow-cyan" 
              id="edu-dot-sliit"
              onClick={() => toggleExpand('sliit')}
              style={{ cursor: 'pointer' }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="timeline-svg-icon">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/>
              </svg>
              <span className="pulsating-ring"></span>
            </div>
            <div className="timeline-date">Current</div>
            <div 
              className={`timeline-content ${expanded.sliit ? 'expanded' : ''}`} 
              id="edu-card-sliit"
              onClick={() => toggleExpand('sliit')}
            >
              <h3 className="timeline-title">B.Sc. Hons in Information Technology</h3>
              <h4 className="timeline-subtitle">Sri Lanka Institute of Information Technology (SLIIT)</h4>
              <p className="timeline-description">
                Comprehensive curriculum covering software development, database management,
                web technologies, and mobile application development. Eagerly pursuing technical specialization.
              </p>
              <div className="timeline-toggle-wrapper">
                <span className="timeline-expand-hint">
                  {expanded.sliit ? 'Click to collapse details' : 'Click to view modules & details'}
                </span>
                <svg className="chevron-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
              <div 
                className="timeline-details-wrapper" 
                style={{ 
                  height: expanded.sliit ? 'auto' : '0px',
                  opacity: expanded.sliit ? 1 : 0,
                  transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                  display: expanded.sliit ? 'block' : 'none'
                }}
              >
                <div className="timeline-details-content">
                  <div className="details-divider"></div>
                  <h5 className="details-subtitle">Core Course Modules</h5>
                  <div className="modules-grid">
                    <div className="module-badge">
                      <span className="module-icon">💻</span>
                      <span className="module-name">Software Engineering</span>
                    </div>
                    <div className="module-badge">
                      <span className="module-icon">☕</span>
                      <span className="module-name">Object Oriented Programming</span>
                    </div>
                    <div className="module-badge">
                      <span className="module-icon">🗄️</span>
                      <span className="module-name">Database Systems (MySQL)</span>
                    </div>
                    <div className="module-badge">
                      <span className="module-icon">🌐</span>
                      <span className="module-name">Web Application Dev</span>
                    </div>
                    <div className="module-badge">
                      <span className="module-icon">📱</span>
                      <span className="module-name">Mobile App Development</span>
                    </div>
                    <div className="module-badge">
                      <span className="module-icon">📡</span>
                      <span className="module-name">Computer Networks</span>
                    </div>
                  </div>
                  <div className="details-meta">
                    <div className="meta-item">
                      <span className="meta-label">Status</span>
                      <span className="meta-value pulse-green">Active Study</span>
                    </div>
                    <div className="meta-item">
                      <span className="meta-label">Location</span>
                      <span className="meta-value">Malabe, Sri Lanka</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* G.C.E. Advanced Level */}
          <div className="timeline-item">
            <div 
              className="timeline-dot timeline-icon-dot text-glow-pink" 
              id="edu-dot-al"
              onClick={() => toggleExpand('al')}
              style={{ cursor: 'pointer' }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="timeline-svg-icon">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
              </svg>
            </div>
            <div className="timeline-date">2022</div>
            <div 
              className={`timeline-content ${expanded.al ? 'expanded' : ''}`} 
              id="edu-card-al"
              onClick={() => toggleExpand('al')}
            >
              <h3 className="timeline-title">G.C.E. Advanced Level Examination</h3>
              <h4 className="timeline-subtitle">Ke/Dedigama Parakumba National School</h4>
              <p className="timeline-description">
                Advanced high school studies focusing on core subjects with strong mathematical and technical fundamentals.
              </p>
              <div className="timeline-toggle-wrapper">
                <span className="timeline-expand-hint">
                  {expanded.al ? 'Click to collapse details' : 'Click to view subjects & details'}
                </span>
                <svg className="chevron-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
              <div 
                className="timeline-details-wrapper"
                style={{ 
                  height: expanded.al ? 'auto' : '0px',
                  opacity: expanded.al ? 1 : 0,
                  transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                  display: expanded.al ? 'block' : 'none'
                }}
              >
                <div className="timeline-details-content">
                  <div className="details-divider"></div>
                  <h5 class="details-subtitle">Stream: Physical Science & ICT</h5>
                  <div className="subjects-list">
                    <div className="subject-row">
                      <span className="subject-title">Combined Mathematics</span>
                      <span className="subject-status">Core Logic</span>
                    </div>
                    <div className="subject-row">
                      <span className="subject-title">Information & Comm. Technology (ICT)</span>
                      <span className="subject-status">Special Interest</span>
                    </div>
                    <div className="subject-row">
                      <span className="subject-title">Physics</span>
                      <span className="subject-status">Analytical Fundamentals</span>
                    </div>
                  </div>
                  <div className="details-meta">
                    <div className="meta-item">
                      <span className="meta-label">Institute Type</span>
                      <span className="meta-value">National School</span>
                    </div>
                    <div className="meta-item">
                      <span className="meta-label">Location</span>
                      <span className="meta-value">Dedigama, Sri Lanka</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* G.C.E. Ordinary Level */}
          <div className="timeline-item">
            <div 
              className="timeline-dot timeline-icon-dot text-glow-orange" 
              id="edu-dot-ol"
              onClick={() => toggleExpand('ol')}
              style={{ cursor: 'pointer' }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="timeline-svg-icon">
                <circle cx="12" cy="8" r="7"/>
                <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
              </svg>
            </div>
            <div className="timeline-date">2019</div>
            <div 
              className={`timeline-content ${expanded.ol ? 'expanded' : ''}`} 
              id="edu-card-ol"
              onClick={() => toggleExpand('ol')}
            >
              <h3 className="timeline-title">G.C.E. Ordinary Level Examination</h3>
              <h4 className="timeline-subtitle">Ke/Dedigama Parakumba National School</h4>
              <p className="timeline-description">
                Secondary educational foundation completed with outstanding results.
              </p>
              <div className="timeline-toggle-wrapper">
                <span className="timeline-expand-hint">
                  {expanded.ol ? 'Click to collapse details' : 'Click to view grades & details'}
                </span>
                <svg className="chevron-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
              <div 
                className="timeline-details-wrapper"
                style={{ 
                  height: expanded.ol ? 'auto' : '0px',
                  opacity: expanded.ol ? 1 : 0,
                  transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                  display: expanded.ol ? 'block' : 'none'
                }}
              >
                <div className="timeline-details-content">
                  <div className="details-divider"></div>
                  <h5 className="details-subtitle">Academic Excellence</h5>
                  <div className="grades-badge-wrap">
                    <div className="grades-distinction-badge">
                      <span className="badge-number">9 A</span>
                      <span className="badge-label">Distinctions (Straight "A"s)</span>
                    </div>
                  </div>
                  <p className="details-text-p">
                    Achieved the highest academic grade tier with straight "A" (Distinction) results across all core subjects including Mathematics, Science, English, and ICT.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
