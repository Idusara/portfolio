import React, { useState } from 'react';

const projectsData = [
  {
    id: 'tour-guide',
    category: 'web',
    icon: '🗺️',
    title: 'Online Tour Guide System',
    date: 'June 2024 - January 2025',
    tech: ['JSP', 'Servlets', 'MySQL'],
    description: 'A comprehensive web application designed to guide tourists through various destinations. Developed using JSP, Servlets, and MySQL with user registration and login functionality.',
    features: [
      'User Registration & Authentication',
      'Login & Session Management',
      'Interactive Tour Guide Directory',
      'Tourist Destination Catalog'
    ]
  },
  {
    id: 'fruits-ecommerce',
    category: 'web',
    icon: '🛒',
    title: 'Traditional Fruits E-commerce',
    date: 'December 2024 - July 2025',
    tech: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    description: 'A modern e-commerce platform for traditional fruits with real-time availability tracking and user-friendly interface. Built with React, Node.js, and MongoDB.',
    features: [
      'User Registration & Login',
      'Real-time Availability Check',
      'Product Catalog & Category Filtering',
      'Interactive Shopping Cart'
    ]
  },
  {
    id: 'fittrack-mobile',
    category: 'mobile',
    icon: '📱',
    title: 'FitTrack Mobile Companion',
    date: 'January 2025 - Present',
    tech: ['Kotlin', 'Android Studio', 'Firebase'],
    description: 'A native Android application designed to track user workouts, count steps, and monitor diet. Features sensor integration and cloud sync via Firebase.',
    features: [
      'Step Counter (Sensor Integration)',
      'Workout & Nutrition Logger',
      'Firebase Authentication & Database Sync',
      'Interactive Progress Analytics Dashboard'
    ]
  }
];

export default function Projects({ onProjectSelect }) {
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter((project) => project.category === filter);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="project-filters">
          <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All Projects
          </button>
          <button 
            className={`filter-btn ${filter === 'web' ? 'active' : ''}`}
            onClick={() => setFilter('web')}
          >
            Web Applications
          </button>
          <button 
            className={`filter-btn ${filter === 'mobile' ? 'active' : ''}`}
            onClick={() => setFilter('mobile')}
          >
            Mobile Apps
          </button>
        </div>
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <article className="project-card" data-category={project.category} key={project.id}>
              <div className="project-card-glow"></div>
              <div className="project-icon">{project.icon}</div>
              <h3 className="project-title">{project.title}</h3>
              <span className="project-date">{project.date}</span>
              <div className="project-tech">
                {project.tech.map((t) => (
                  <span className="tech-badge" key={t}>{t}</span>
                ))}
              </div>
              <p className="project-description">{project.description}</p>
              <button 
                className="btn btn-primary project-detail-btn"
                onClick={() => onProjectSelect(project)}
              >
                View Details
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
export { projectsData };
