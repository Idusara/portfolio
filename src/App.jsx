import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import PersonalInfo from './components/PersonalInfo';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ExtraSections from './components/ExtraSections';
import Contact from './components/Contact';
import Terminal from './components/Terminal';
import ProjectModal from './components/ProjectModal';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [preloaderPercent, setPreloaderPercent] = useState(0);
  const [preloaderLog, setPreloaderLog] = useState('SYSTEM BOOTING...');
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // Preloader Simulation
  useEffect(() => {
    let percent = 0;
    const interval = setInterval(() => {
      percent += Math.floor(Math.random() * 8) + 4;
      if (percent >= 100) {
        percent = 100;
        clearInterval(interval);
        setTimeout(() => setLoading(false), 500);
      }
      setPreloaderPercent(percent);

      // Console logs based on percentage
      if (percent < 25) {
        setPreloaderLog('SYSTEM BOOTING...');
      } else if (percent < 50) {
        setPreloaderLog('LOADING CORE JAVA & WEB INTERFACES...');
      } else if (percent < 75) {
        setPreloaderLog('INITIALIZING KOTLIN & ANDROID COMPILES...');
      } else if (percent < 90) {
        setPreloaderLog('ESTABLISHING REACTIVE VIEWPORTS...');
      } else {
        setPreloaderLog('READY. HELLO WORLD.');
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  // Keyboard listener for terminal toggle (Ctrl+K or /)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey && e.key.toLowerCase() === 'k') || e.key === '/') {
        e.preventDefault();
        setTerminalOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Scroll Progress Tracker
  useEffect(() => {
    const handleScroll = () => {
      const bar = document.getElementById('scroll-progress');
      if (bar) {
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
        bar.style.width = `${progress}%`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Particle Canvas Background Animation
  useEffect(() => {
    const canvas = document.getElementById('bg-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles = [];
    const particleCount = 65;

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.radius = Math.random() * 2 + 0.5;
        this.color = `rgba(0, 242, 254, ${Math.random() * 0.15 + 0.05})`;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx = -this.vx;
        if (this.y < 0 || this.y > height) this.vy = -this.vy;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.shadowColor = 'rgba(0, 242, 254, 0.4)';
        ctx.shadowBlur = 4;
        ctx.fill();
        ctx.shadowBlur = 0; // reset
      }
    }

    // Populate particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const drawLines = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dist = Math.hypot(particles[i].x - particles[j].x, particles[i].y - particles[j].y);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(0, 242, 254, ${0.1 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      drawLines();
      animationId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, [loading]);

  const handleSoundToggle = () => {
    setSoundEnabled((prev) => {
      const newState = !prev;
      if (newState) {
        // Play success beep when sound turns on
        try {
          const ctx = new (window.AudioContext || window.webkitAudioContext)();
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.frequency.setValueAtTime(600, ctx.currentTime);
          gain.gain.setValueAtTime(0.05, ctx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.2);
          osc.start();
          osc.stop(ctx.currentTime + 0.2);
        } catch (e) {
          console.warn('Audio failed', e);
        }
      }
      return newState;
    });
  };

  return (
    <>
      {/* Preloader */}
      {loading && (
        <div id="preloader">
          <div className="preloader-content">
            <div className="preloader-scanner"></div>
            <div className="preloader-logo">
              <span className="logo-txt">IDUSARA CHATHUM</span>
            </div>
            <div className="preloader-bar-container">
              <div className="preloader-bar" style={{ width: `${preloaderPercent}%` }}></div>
            </div>
            <div className="preloader-status">
              <span>SYSTEM BOOTING...</span>
              <span className="preloader-percent">{preloaderPercent}%</span>
            </div>
            <div className="preloader-console-log">{preloaderLog}</div>
          </div>
        </div>
      )}

      {/* Interactive Background Canvas & Blobs */}
      <canvas id="bg-canvas"></canvas>
      <div className="bg-blobs">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>

      {/* Scroll Progress Indicator */}
      <div id="scroll-progress"></div>

      {/* Navigation */}
      <Navbar 
        onTerminalOpen={() => setTerminalOpen(true)} 
        soundEnabled={soundEnabled} 
        onSoundToggle={handleSoundToggle} 
      />

      {/* Sections */}
      <Hero />
      <About />
      <PersonalInfo />
      <Education />
      <Skills />
      <Projects onProjectSelect={(proj) => setSelectedProject(proj)} />
      <ExtraSections />
      <Contact soundEnabled={soundEnabled} />

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>
            &copy; 2026 Idusara Chathum. All rights reserved. | Crafted with{' '}
            <span className="heart">❤️</span> using React & CSS
          </p>
        </div>
      </footer>

      {/* Overlays / Modals */}
      <Terminal isOpen={terminalOpen} onClose={() => setTerminalOpen(false)} />
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </>
  );
}
