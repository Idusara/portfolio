import React, { useState } from 'react';

export default function Contact({ soundEnabled }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ loading: false, success: null, message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const playSound = (type) => {
    if (!soundEnabled) return;
    try {
      // Small synthesized sound for feedback if enabled
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      
      if (type === 'success') {
        osc.frequency.setValueAtTime(523.25, ctx.currentTime); // C5
        osc.frequency.setValueAtTime(659.25, ctx.currentTime + 0.1); // E5
        gain.gain.setValueAtTime(0.1, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.35);
        osc.start();
        osc.stop(ctx.currentTime + 0.35);
      } else {
        osc.frequency.setValueAtTime(220, ctx.currentTime); // A3
        gain.gain.setValueAtTime(0.15, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.25);
        osc.start();
        osc.stop(ctx.currentTime + 0.25);
      }
    } catch (e) {
      console.warn('Audio failed', e);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus({ loading: true, success: null, message: '' });

    // Simulate sending message to backend API with simulated delay
    setTimeout(() => {
      setStatus({
        loading: false,
        success: true,
        message: 'Your transmission has been broadcasted successfully! I will reply shortly.'
      });
      playSound('success');
      setFormData({ name: '', email: '', message: '' });
    }, 2000);
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="contact-subtitle">I'm always open to new opportunities and collaborations. Feel free to reach out!</p>
        
        <form id="contact-form" className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input 
              type="text" 
              id="contact-name" 
              name="name" 
              required 
              placeholder=" " 
              value={formData.name}
              onChange={handleChange}
            />
            <label htmlFor="contact-name">Your Name</label>
          </div>
          <div className="form-group">
            <input 
              type="email" 
              id="contact-email" 
              name="email" 
              required 
              placeholder=" " 
              value={formData.email}
              onChange={handleChange}
            />
            <label htmlFor="contact-email">Your Email</label>
          </div>
          <div className="form-group">
            <textarea 
              id="contact-message" 
              name="message" 
              required 
              placeholder=" " 
              rows="5"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <label htmlFor="contact-message">Your Message</label>
          </div>
          <button type="submit" className="btn btn-primary btn-submit" disabled={status.loading}>
            {!status.loading && <span className="btn-text">Send Message</span>}
            {status.loading && (
              <div className="btn-loader">
                <span className="loader-dot"></span>
                <span className="loader-dot"></span>
                <span className="loader-dot"></span>
              </div>
            )}
          </button>
          
          {status.message && (
            <div className={`form-status ${status.success ? 'success' : 'error'}`}>
              {status.message}
            </div>
          )}
        </form>

        <div className="contact-links">
          <a href="mailto:idusarachathum@gmail.com" className="contact-link" target="_blank" rel="noreferrer">
            <span className="contact-icon">✉️</span>
            <span>Primary Email</span>
          </a>
          <a href="mailto:idusarachathum1@gmail.com" className="contact-link" target="_blank" rel="noreferrer">
            <span className="contact-icon">✉️</span>
            <span>Secondary Email</span>
          </a>
          <a href="https://github.com/Idusara" className="contact-link" target="_blank" rel="noreferrer">
            <span className="contact-icon">💻</span>
            <span>GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/idusara-chathum-03075a320" className="contact-link" target="_blank" rel="noreferrer">
            <span className="contact-icon">💼</span>
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
}
