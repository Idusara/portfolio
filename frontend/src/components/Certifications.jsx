import React, { useState } from 'react';

const certificationsData = [
  {
    title: 'AI/ML Engineer - Stage 1',
    issuer: 'SLIIT',
    date: 'July 2026',
    image: '/certificates/ai_ml_sliit.png',
    id: 'bxvmenpd5x',
    description: 'Completed the core requirements for AI/ML Engineer Stage 1 program conducted by the Centre for Open and Distance Education, Faculty of Computing, SLIIT.',
    verifyUrl: ''
  },
  {
    title: 'Python for Beginners',
    issuer: 'University of Moratuwa',
    date: 'July 2026',
    image: '/certificates/python_moratuwa.png',
    id: 'rlx9gJeqpT',
    description: 'Successfully completed the online learning programme in Python for Beginners conducted by the Department of Computer Science & Engineering, Faculty of Engineering, University of Moratuwa.',
    verifyUrl: 'https://open.uom.lk/verify'
  },
  {
    title: 'MongoDB Data Modeling Path',
    issuer: 'MongoDB',
    date: 'January 2026',
    image: '/certificates/mongodb_data_modeling.png',
    id: 'MDBopcpyxpff8',
    description: 'Completed the MongoDB Data Modeling learning path, validating skills in document schema design, relationships, and data modeling best practices.',
    verifyUrl: 'https://learn.mongodb.com'
  }
];

export default function Certifications() {
  const [activeCertImg, setActiveCertImg] = useState(null);

  const openViewer = (image) => {
    setActiveCertImg(image);
    document.body.style.overflow = 'hidden'; // Lock background scroll
  };

  const closeViewer = () => {
    setActiveCertImg(null);
    document.body.style.overflow = ''; // Unlock background scroll
  };

  return (
    <section id="certifications" className="certifications-section">
      <div className="container">
        <h2 className="section-title">Certifications</h2>
        
        <div className="certs-grid">
          {certificationsData.map((cert, index) => (
            <div className="cert-card" key={index}>
              {/* Image Preview Container */}
              <div className="cert-img-container" onClick={() => openViewer(cert.image)}>
                <img src={cert.image} alt={cert.title} className="cert-img" />
                <div className="cert-overlay">
                  <button className="overlay-btn">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8"></circle>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                      <line x1="11" y1="8" x2="11" y2="14"></line>
                      <line x1="8" y1="11" x2="14" y2="11"></line>
                    </svg>
                    View Full Certificate
                  </button>
                </div>
              </div>
              
              {/* Content Box */}
              <div className="cert-content">
                <div className="cert-header">
                  <h3 className="cert-title">{cert.title}</h3>
                  <div className="cert-meta">
                    <span className="cert-issuer">{cert.issuer}</span>
                    <span className="divider">•</span>
                    <span className="cert-date">{cert.date}</span>
                  </div>
                </div>
                
                <p className="cert-desc">{cert.description}</p>
                
                <div className="cert-footer">
                  <div className="cert-id">
                    <span>Credential ID</span>
                    {cert.id}
                  </div>
                  {cert.verifyUrl && (
                    <a 
                      href={cert.verifyUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="cert-verify-link"
                    >
                      Verify
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full-Screen Image Viewer Modal */}
      <div 
        className={`cert-viewer-overlay ${activeCertImg ? 'active' : ''}`} 
        onClick={closeViewer}
      >
        <button className="cert-viewer-close" onClick={closeViewer}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <div className="cert-viewer-wrapper" onClick={(e) => e.stopPropagation()}>
          {activeCertImg && (
            <img src={activeCertImg} alt="Certificate Viewer" className="cert-viewer-img" />
          )}
        </div>
      </div>
    </section>
  );
}
