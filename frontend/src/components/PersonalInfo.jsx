import React from 'react';

export default function PersonalInfo() {
  return (
    <section className="personal-info" id="personal-info-section">
      <div className="container">
        <h2 className="section-title">Personal Information</h2>
        
        <div className="personal-dashboard-card">
          {/* Left side: Developer ID Badge */}
          <div className="personal-badge-side" id="personal-profile-badge">
            <div className="badge-header">
              <span className="status-indicator online"></span>
              <span className="badge-title">SYSTEM PROFILE</span>
            </div>
            <div className="badge-avatar-container">
              <div className="avatar-ring"></div>
              <img src="/IMG.jpeg" alt="Idusara Chathum" className="badge-avatar" />
            </div>
            <h3 className="badge-name">IDUSARA CHATHUM</h3>
            <span className="badge-role">Associate IT Developer</span>
            
            <div className="badge-meta">
              <div className="meta-row">
                <span className="meta-key">CLASS:</span>
                <span className="meta-val">UNDERGRADUATE</span>
              </div>
              <div className="meta-row">
                <span className="meta-key">STATUS:</span>
                <span className="meta-val glowing-text">ONLINE</span>
              </div>
              <div className="meta-row">
                <span className="meta-key">STACK:</span>
                <span className="meta-val">JAVA / JS / KOTLIN</span>
              </div>
            </div>
          </div>
          
          {/* Right side: Parameter Details Grid */}
          <div className="personal-details-side" id="personal-details-grid">
            <div className="details-grid">
              
              {/* Nationality */}
              <div className="details-card">
                <div className="details-icon-wrapper">
                  <svg className="details-icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                </div>
                <div className="details-info">
                  <span className="details-label">Nationality</span>
                  <span className="details-value">Sri Lankan</span>
                </div>
              </div>

              {/* Location */}
              <div className="details-card">
                <div className="details-icon-wrapper">
                  <svg className="details-icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div className="details-info">
                  <span className="details-label">Location</span>
                  <span className="details-value">Kegalle, Sri Lanka</span>
                </div>
              </div>

              {/* Phone */}
              <div className="details-card">
                <div className="details-icon-wrapper">
                  <svg className="details-icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div className="details-info">
                  <span className="details-label">Phone</span>
                  <a href="tel:+94761225672" className="details-value">+94 76 122 5672</a>
                </div>
              </div>

              {/* Date of Birth */}
              <div className="details-card">
                <div className="details-icon-wrapper">
                  <svg className="details-icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                </div>
                <div className="details-info">
                  <span className="details-label">Date of Birth</span>
                  <span className="details-value">August 31, 2003</span>
                </div>
              </div>





            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
