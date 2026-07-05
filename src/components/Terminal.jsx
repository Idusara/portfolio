import React, { useState, useEffect, useRef } from 'react';

export default function Terminal({ isOpen, onClose }) {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'system', text: 'Idusara Developer Command Shell v1.0.0' },
    { type: 'system', text: "Type 'help' to see list of available commands." },
    { type: 'system', text: '--------------------------------------------------' }
  ]);
  const inputRef = useRef(null);
  const terminalEndRef = useRef(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    // Auto-scroll to bottom of terminal output
    if (terminalEndRef.current) {
      terminalEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [history]);

  const handleCommand = (cmd) => {
    const trimmed = cmd.trim().toLowerCase();
    let response = [];

    switch (trimmed) {
      case 'help':
        response = [
          { type: 'system', text: 'Available commands:' },
          { type: 'success', text: '  about      - Display information about Idusara' },
          { type: 'success', text: '  skills     - View lists of technical skills' },
          { type: 'success', text: '  projects   - Show key highlights of portfolio projects' },
          { type: 'success', text: '  contact    - Retrieve contact methods and profiles' },
          { type: 'success', text: '  clear      - Clear the terminal screen' },
          { type: 'success', text: '  exit       - Close the developer command shell' }
        ];
        break;
      case 'about':
        response = [
          { type: 'system', text: 'Biography:' },
          { type: 'output', text: 'Idusara Chathum Wishwanath is an associate IT developer and SLIIT undergraduate. He designs mobile environments (Kotlin, Java) and web applications (React, Node.js) with focus on clean structure and UX.' }
        ];
        break;
      case 'skills':
        response = [
          { type: 'system', text: 'Key Technical Skills:' },
          { type: 'output', text: '  • Languages: Java (Expert), Kotlin (Advanced), JavaScript (Advanced), Python (Proficient)' },
          { type: 'output', text: '  • Web: React.js, HTML5, CSS3, Node.js' },
          { type: 'output', text: '  • Mobile: Android Studio, Jetpack Compose' },
          { type: 'output', text: '  • Databases: MySQL, Firebase Firestore' }
        ];
        break;
      case 'projects':
        response = [
          { type: 'system', text: 'Featured Projects:' },
          { type: 'output', text: '  1. Online Tour Guide System (JSP, Servlets, MySQL)' },
          { type: 'output', text: '  2. Traditional Fruits E-commerce Platform (React, Node.js, MongoDB)' },
          { type: 'output', text: '  3. FitTrack Mobile Companion (Kotlin, Android Studio, Firebase)' }
        ];
        break;
      case 'contact':
        response = [
          { type: 'system', text: 'Contact Directory:' },
          { type: 'output', text: '  • Primary Email: idusarachathum@gmail.com' },
          { type: 'output', text: '  • Secondary Email: idusarachathum1@gmail.com' },
          { type: 'output', text: '  • LinkedIn: linkedin.com/in/idusara-chathum-03075a320' },
          { type: 'output', text: '  • GitHub: github.com/Idusara' }
        ];
        break;
      case 'clear':
        setHistory([]);
        return;
      case 'exit':
        onClose();
        return;
      default:
        response = [{ type: 'error', text: `Command not found: "${trimmed}". Type "help" for a list of valid commands.` }];
    }

    setHistory((prev) => [
      ...prev,
      { type: 'command', text: `guest@idusara-port:~$ ${cmd}` },
      ...response
    ]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    handleCommand(input);
    setInput('');
  };

  if (!isOpen) return null;

  return (
    <div 
      id="terminal-overlay" 
      className={`terminal-overlay ${isOpen ? 'active' : ''}`}
      onClick={(e) => {
        if (e.target.id === 'terminal-overlay') onClose();
      }}
    >
      <div className="terminal-container">
        <div className="terminal-header">
          <div className="terminal-dots">
            <span className="dot red" onClick={onClose} style={{ cursor: 'pointer' }}></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
          </div>
          <span className="terminal-title">idusara@sliit-developer-shell:~</span>
          <button className="terminal-close" onClick={onClose} aria-label="Close terminal">&times;</button>
        </div>
        <div className="terminal-body" onClick={() => inputRef.current && inputRef.current.focus()}>
          <div className="terminal-output">
            {history.map((line, index) => (
              <div key={index} className={`output-line ${line.type}`}>
                {line.text}
              </div>
            ))}
            <div ref={terminalEndRef} />
          </div>
          <form className="terminal-input-wrapper" onSubmit={handleSubmit}>
            <span className="terminal-prompt">guest@idusara-port:~$ &nbsp;</span>
            <input 
              type="text" 
              id="terminal-input" 
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              autoComplete="off" 
              aria-label="Terminal command input"
            />
          </form>
        </div>
      </div>
    </div>
  );
}
