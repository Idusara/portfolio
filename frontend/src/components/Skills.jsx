import React, { useState, useEffect } from 'react';

const skillCategories = [
  {
    title: 'Programming Languages',
    id: 'skills-cat-languages',
    icon: (
      <svg className="category-icon text-glow-cyan" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
      </svg>
    ),
    skills: [
      { name: 'Java', level: 90, icon: '☕', levelText: 'Expert / OOP Specialist', glow: 'java' },
      { name: 'Kotlin', level: 85, icon: '⚡', levelText: 'Advanced / Modern App Dev', glow: 'kotlin' },
      { name: 'JavaScript', level: 80, icon: '📜', levelText: 'Advanced / Fullstack Scripting', glow: 'js' },
      { name: 'Python', level: 75, icon: '🐍', levelText: 'Proficient / Scripting & Logic', glow: 'python' }
    ]
  },
  {
    title: 'Web & Backend Technologies',
    id: 'skills-cat-web',
    icon: (
      <svg className="category-icon text-glow-pink" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="2" y1="12" x2="22" y2="12"></line>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
      </svg>
    ),
    skills: [
      { name: 'HTML5 / CSS3', level: 90, icon: '🎨', levelText: 'Expert / Semantic & Animations', glow: 'htmlcss' },
      { name: 'React.js', level: 80, icon: '⚛️', levelText: 'Advanced / SPA Architect', glow: 'react' },
      { name: 'Spring Boot', level: 75, icon: '🍃', levelText: 'Proficient / Java Backend Framework', glow: 'spring' },
      { name: 'Node.js', level: 70, icon: '🟢', levelText: 'Proficient / REST APIs', glow: 'node' }
    ]
  },
  {
    title: 'Mobile Development',
    id: 'skills-cat-mobile',
    icon: (
      <svg className="category-icon text-glow-orange" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
        <line x1="12" y1="18" x2="12.01" y2="18"></line>
      </svg>
    ),
    skills: [
      { name: 'Android Studio & SDK', level: 85, icon: '🤖', levelText: 'Advanced / Native Architecture', glow: 'android' },
      { name: 'Kotlin (Mobile)', level: 85, icon: '⚡', levelText: 'Advanced / Jetpack Compose', glow: 'kotlin' }
    ]
  },
  {
    title: 'Databases & Tools',
    id: 'skills-cat-db',
    icon: (
      <svg className="category-icon text-glow-cyan" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
        <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"></path>
      </svg>
    ),
    skills: [
      { name: 'MySQL', level: 85, icon: '🐬', levelText: 'Advanced / Schema & Optimizations', glow: 'mysql' },
      { name: 'MongoDB', level: 80, icon: '🍃', levelText: 'Proficient / NoSQL Database & Mongoose', glow: 'mongodb' },
      { name: 'Git & GitHub', level: 85, icon: '🐙', levelText: 'Advanced / Version Control', glow: 'git' }
    ]
  }
];

export default function Skills() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((category) => (
            <div className="skill-category" id={category.id} key={category.title}>
              <h3 className="skill-category-title">
                {category.icon}
                {category.title}
              </h3>
              <div className="skill-progress-list">
                {category.skills.map((skill) => (
                  <div className="skill-progress-row" key={skill.name}>
                    <div className="skill-info-row">
                      <span className="skill-name">
                        <span className="skill-brand-icon">{skill.icon}</span> {skill.name}
                      </span>
                      <span className="skill-percentage">
                        {animate ? `${skill.level}%` : '0%'}
                      </span>
                    </div>
                    <div className="skill-bar-container">
                      <div 
                        className={`skill-bar-fill ${skill.glow}-glow`} 
                        style={{ width: animate ? `${skill.level}%` : '0%' }}
                      >
                        <div className="skill-bar-glow"></div>
                      </div>
                    </div>
                    <div className="skill-footer-row">
                      <span className="skill-level-text">{skill.levelText}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
