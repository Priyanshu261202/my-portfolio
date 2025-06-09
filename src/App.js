import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './Navbar';
import Lottie from 'lottie-react';
import { motion } from 'framer-motion';

import coderAnimation from './assets/coder.json';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const toggleMode = () => setDarkMode(!darkMode);

  return (
    <>
      <MyNavbar />
      <div className={`app ${darkMode ? 'bg-dark text-white' : 'bg-light text-dark'}`} style={{ paddingTop: '56px' }}>
        <button className="toggle-btn" onClick={toggleMode}>
          {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>

        <section id="hero" className="hero-section">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              Hi, I'm Priyanshu Shakya 👋
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              SDE Intern • AI/ML Enthusiast • Full-Stack Developer
            </motion.p>
            <Lottie animationData={coderAnimation} style={{ height: 300 }} />
          </div>
        </section>

        <section id="about" className="section">
          <h2>About Me</h2>
          <p>
            I'm a final year CSE student at Amity University passionate about building meaningful software.
            I’ve interned as an SDE at HardShell Technologies and built AI-based projects like CareCheck.
          </p>
        </section>

        <section id="skills" className="section">
          <h2>Skills</h2>
          <ul>
            <li>Languages: C, C++, Java, Python, SQL</li>
            <li>Web: ReactJS, Flask, HTML5, CSS3, JavaScript</li>
            <li>Tools: Git, GitHub, VS Code, CAD</li>
            <li>Cloud & DB: AWS, Oracle, SQL</li>
          </ul>
        </section>

        <section id="projects" className="section">
          <h2>Projects</h2>
          <ul>
            <li><b>CareCheck:</b> Lung cancer detection system using Flask + CNN</li>
            <li><b>Heart Disease Prediction:</b> ML model comparison for clinical data</li>
            <li><b>Café Management System:</b> QR-based ordering + real-time backend</li>
          </ul>
        </section>

        <section id="contact" className="section">
          <h2>Contact</h2>
          <p>Email: <a href="mailto:priyanshushakya.work@gmail.com">priyanshushakya.work@gmail.com</a></p>
          <p>Phone: +91-9821567780</p>
          <p>
            <a href="https://www.linkedin.com/in/priyanshu-shakya-129455246/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>{' '}
            | <a href="https://github.com/your-github" target="_blank" rel="noreferrer">GitHub</a>
          </p>
        </section>
      </div>
    </>
  );
}

export default App;
