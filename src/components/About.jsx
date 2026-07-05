import React, { useState, useEffect } from 'react';

const files = {
  'objective.json': {
    content: `{
  "name": "Idusara Chathum",
  "role": "Associate IT Developer",
  "education": "SLIIT Undergraduate",
  "objective": "Seeking to leverage software development and analytical skills in a dynamic development environment to build scalable and high-performance digital solutions.",
  "philosophy": "Clean architecture, user-first experience, continuous self-growth."
}`,
    language: 'json',
    lineCount: 8
  },
  'philosophy.js': {
    content: `// The core development philosophy of Idusara
const developer = {
  passion: "Web & Mobile Applications",
  methodology: ["Modular Design", "OOP", "Clean Code"],
  codeQuality: () => {
    return 'Write code that humans can understand.';
  }
};

console.log(developer.codeQuality());`,
    language: 'javascript',
    lineCount: 10
  },
  'system.sh': {
    content: `#!/bin/bash
# Check developer environment status
echo "Status: ONLINE"
echo "Main Language: Java / JavaScript"
echo "Secondary Language: Kotlin / Python"
echo "Ready for deployment: YES"
echo "Coffee status: Operational"`,
    language: 'bash',
    lineCount: 8
  }
};

export default function About() {
  const [activeTab, setActiveTab] = useState('objective.json');
  const [progressWidths, setProgressWidths] = useState({ arch: 0, logic: 0, collab: 0 });

  useEffect(() => {
    // Smoothly animate progress bars on component load
    const timer = setTimeout(() => {
      setProgressWidths({ arch: 85, logic: 90, collab: 95 });
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const renderCode = (fileName) => {
    const file = files[fileName];
    if (fileName === 'objective.json') {
      return (
        <>
          <span className="syntax-keyword">{"{"}</span>
          <br />
          {"  "}<span className="syntax-key">"name"</span>: <span className="syntax-value">"Idusara Chathum"</span>,
          <br />
          {"  "}<span className="syntax-key">"role"</span>: <span className="syntax-value">"Associate IT Developer"</span>,
          <br />
          {"  "}<span className="syntax-key">"education"</span>: <span className="syntax-value">"SLIIT Undergraduate"</span>,
          <br />
          {"  "}<span className="syntax-key">"objective"</span>: <span className="syntax-value">"Seeking to leverage software development and analytical skills in a dynamic development environment to build scalable and high-performance digital solutions."</span>,
          <br />
          {"  "}<span className="syntax-key">"philosophy"</span>: <span className="syntax-value">"Clean architecture, user-first experience, continuous self-growth."</span>
          <br />
          <span className="syntax-keyword">{"}"}</span>
        </>
      );
    } else if (fileName === 'philosophy.js') {
      return (
        <>
          <span className="syntax-comment">// The core development philosophy of Idusara</span>
          <br />
          <span className="syntax-keyword">const</span> developer = <span className="syntax-keyword">{"{"}</span>
          <br />
          {"  "}passion: <span className="syntax-value">"Web & Mobile Applications"</span>,
          <br />
          {"  "}methodology: <span className="syntax-keyword">{"["}</span><span className="syntax-value">"Modular Design"</span>, <span className="syntax-value">"OOP"</span>, <span className="syntax-value">"Clean Code"</span><span className="syntax-keyword">{"]"}</span>,
          <br />
          {"  "}codeQuality: <span className="syntax-keyword">() =&gt;</span> <span className="syntax-keyword">{"{"}</span>
          <br />
          {"    "}<span className="syntax-keyword">return</span> <span className="syntax-value">'Write code that humans can understand.'</span>;
          <br />
          {"  "}<span className="syntax-keyword">{"}"}</span>
          <br />
          <span className="syntax-keyword">{"}"}</span>;
          <br />
          <br />
          console.log(developer.codeQuality());
        </>
      );
    } else {
      return (
        <>
          <span className="syntax-comment">#!/bin/bash</span>
          <br />
          <span className="syntax-comment"># Check developer environment status</span>
          <br />
          echo <span className="syntax-value">"Status: ONLINE"</span>
          <br />
          echo <span className="syntax-value">"Main Language: Java / JavaScript"</span>
          <br />
          echo <span className="syntax-value">"Secondary Language: Kotlin / Python"</span>
          <br />
          echo <span className="syntax-value">"Ready for deployment: YES"</span>
          <br />
          echo <span className="syntax-value">"Coffee status: Operational"</span>
        </>
      );
    }
  };

  const lineNumbers = Array.from({ length: files[activeTab].lineCount }, (_, i) => i + 1);

  return (
    <section id="about" className="objective">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-wrapper">
          {/* Left: Pillars */}
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
                  <h3 class="pillar-title">Technical Architecture</h3>
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
                  <h3 class="pillar-title">Analytical Logic</h3>
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
                  <h3 class="pillar-title">Collaboration</h3>
                  <span className="pillar-percent">{progressWidths.collab}%</span>
                </div>
                <div className="about-progress-container">
                  <div className="about-progress-bar" style={{ width: `${progressWidths.collab}%` }}></div>
                </div>
                <p className="pillar-text">Working transparently in team cycles with high collective integrity.</p>
              </div>
            </div>
          </div>

          {/* Right: IDE Code Window */}
          <div className="about-code-window" id="about-ide-window">
            <div className="code-header">
              <div className="code-buttons">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <div className="code-tabs">
                {Object.keys(files).map((fileName) => (
                  <button 
                    key={fileName}
                    className={`code-tab ${activeTab === fileName ? 'active' : ''}`}
                    onClick={() => setActiveTab(fileName)}
                  >
                    {fileName}
                  </button>
                ))}
              </div>
            </div>
            <div className="code-editor">
              <div className="line-numbers">
                {lineNumbers.map((num) => (
                  <span key={num}>{num}</span>
                ))}
              </div>
              <div className="code-content" id="editor-content">
                <code>{renderCode(activeTab)}</code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
