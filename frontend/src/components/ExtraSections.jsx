import React from 'react';

export default function ExtraSections() {
  return (
    <>
      {/* Soft Skills Section */}
      <section className="soft-skills" id="soft-skills-section">
        <div className="container">
          <h2 className="section-title">Soft Skills</h2>
          <div className="soft-skills-grid">
            <div className="soft-skill-item">
              <h4>Teamwork</h4>
              <p>Effective collaboration in group projects and agile team environments</p>
            </div>
            <div className="soft-skill-item">
              <h4>Communication</h4>
              <p>Clear articulation of ideas, tech specs, and active listening</p>
            </div>
            <div className="soft-skill-item">
              <h4>Adaptability</h4>
              <p>Quick learner who adapts to new tech stacks and environments</p>
            </div>
            <div className="soft-skill-item">
              <h4>Time Management</h4>
              <p>Efficient project planning, scheduling, and milestone tracking</p>
            </div>
            <div className="soft-skill-item">
              <h4>Problem-Solving</h4>
              <p>Analytical approach to identifying, diagnosing, and resolving issues</p>
            </div>
            <div className="soft-skill-item">
              <h4>Continuous Learning</h4>
              <p>Enthusiasm for acquiring new software methodologies and skills</p>
            </div>
          </div>
        </div>
      </section>

      {/* Languages Section */}
      <section className="languages" id="languages-section">
        <div className="container">
          <h2 className="section-title">Languages</h2>
          <div className="languages-grid">
            <div className="language-card">
              <h3>English</h3>
              <div className="language-level">
                <div className="level-bar" style={{ width: '90%' }}></div>
              </div>
            </div>
            <div className="language-card">
              <h3>Sinhala</h3>
              <div className="language-level">
                <div className="level-bar" style={{ width: '100%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section className="interests" id="interests-section">
        <div className="container">
          <h2 className="section-title">Interests</h2>
          <div className="interests-grid">
            <div className="interest-card">
              <span className="interest-icon">📱</span>
              <h3>Mobile App Dev</h3>
              <p>Building native Android mobile applications with Jetpack Compose</p>
            </div>
            <div className="interest-card">
              <span className="interest-icon">🎨</span>
              <h3>UI/UX Design</h3>
              <p>Creating beautiful, intuitive visual interfaces for websites and apps</p>
            </div>
            <div className="interest-card">
              <span className="interest-icon">☁️</span>
              <h3>Cloud Computing</h3>
              <p>Exploring serverless cloud platforms and microservices backend logic</p>
            </div>
            <div className="interest-card">
              <span className="interest-icon">🌐</span>
              <h3>Web Development</h3>
              <p>Developing responsive and performant fullstack web applications</p>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
