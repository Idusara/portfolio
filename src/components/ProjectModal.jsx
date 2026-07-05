import React from 'react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div id="project-modal" className="project-modal active">
      <div className="modal-overlay" onClick={onClose}></div>
      <div className="modal-container">
        <button className="modal-close" onClick={onClose} aria-label="Close modal">&times;</button>
        <div className="modal-body">
          <div className="modal-project-icon">{project.icon}</div>
          <h3 className="modal-project-title">{project.title}</h3>
          <span className="modal-project-date">{project.date}</span>
          <div className="modal-project-tech">
            {project.tech.map((t) => (
              <span className="tech-badge" key={t}>{t}</span>
            ))}
          </div>
          <p className="modal-project-description">{project.description}</p>
          <div className="modal-features-list">
            <p><strong>Key Features & Deliverables:</strong></p>
            <ul>
              {project.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
