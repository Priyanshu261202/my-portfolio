import React, { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './Navbar';
import Lottie from 'react-lottie';
import { motion } from 'framer-motion';
import coderAnimation from './assets/coder.json';

const App = () => {
  const skills = [
    { category: "Languages", items: ["C++", "Java", "Python", "SQL"] },
    { category: "Web Development", items: ["React", "Flask", "HTML5", "CSS3", "JavaScript"] },
    { category: "Tools", items: ["VS Code", "Git", "GitHub", "Figma"] },
    { category: "Cloud & AI", items: ["AWS", "TensorFlow", "SQL"] }
  ];

  const projects = [
    {
      title: "CareCheck: Lung Cancer Diagnosis",
      period: "Dec 2024 – May 2025",
      description: "AI-driven lung cancer detection using CNN with a Flask backend and responsive UI.",
      tech: ["Python", "Flask", "TensorFlow", "React", "AWS"],
      highlights: ["95%+ model accuracy", "Real-time CT scan analysis", "Scalable cloud deployment"]
    },
    {
      title: "CaféSync: Management System",
      period: "May 2025 – Jun 2025",
      description: "Full-stack café solution with QR-based ordering and live order tracking.",
      tech: ["Flask", "SQL", "React", "WebSocket"],
      highlights: ["Real-time dashboards", "QR menu integration", "Hosted on AWS"]
    },
    {
      title: "Heart Disease Predictor",
      period: "Jun 2022 – Jul 2022",
      description: "ML model comparing algorithms for heart disease prediction.",
      tech: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
      highlights: ["Multi-algorithm analysis", "High predictive accuracy", "Data visualization"]
    }
  ];

  const experiences = [
    {
      company: "HardShell Technologies",
      role: "SDE Intern",
      period: "May 2024 – Jul 2024",
      location: "New Delhi, India",
      description: "Developed data visualization tools for E-STEM project, supporting skill development programs.",
      achievements: ["Built E-STEM dashboards", "Integrated DDU-GKY data", "Collaborated with government"]
    }
  ];

  const education = [
    { institution: "Amity University", degree: "B.Tech Computer Science", period: "2021–2025" },
    { institution: "MBS International School", degree: "Class XII (CBSE)", period: "2020–2021" },
    { institution: "Vishwa Bharati School", degree: "Class X (CBSE)", period: "2018–2019" }
  ];

  const extracurriculars = [
    "Secretary General, VR & Game Dev Club (2023–Present)",
    "PR Lead, IEEE Student Branch (2022–2023)",
    "Organizer, ASET Freshers (2024)",
    "Amity Youth Fest Organizer (2023)",
    "CyberHack Participant (2024)"
  ];

  const certificates = [
    { title: "NPTEL: Python for Data Science" },
    { title: "AWS: Cloud Practitioner" },
    { title: "IBM: AI Fundamentals" },
    { title: "Google Cloud: Vertex AI" }
  ];

  const lottieOptions = {
    animationData: coderAnimation,
    loop: true,
    autoplay: true,
    rendererSettings: { preserveAspectRatio: 'xMidYMid slice' }
  };

  return (
    <>
      <MyNavbar />
      <div className="app">
        <section id="hero" className="hero-section">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <h1 className="hero-title">
                    Priyanshu Shakya
                  </h1>
                  <p className="hero-subtitle">CS Engineer & AI Innovator</p>
                  <p className="hero-description">
                    Crafting innovative software solutions with a passion for AI and user-centric design.
                  </p>
                  <div className="hero-buttons">
                    <a href="#contact" className="btn btn-primary">Get in Touch</a>
                    <a href="#projects" className="btn btn-glass">View Projects</a>
                  </div>
                </motion.div>
              </div>
              <div className="col-lg-6">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="hero-animation-container"
                >
                  <Lottie options={lottieOptions} height={350} style={{ zIndex: 2 }} />
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section glass-section">
          <div className="container">
            <h2 className="section-title">About Me</h2>
            <div className="about-card glass-card">
              <p className="about-lead">
                A dedicated CS student at Amity University with a knack for solving real-world challenges.
              </p>
              <p className="about-text">
                My journey includes building AI-driven healthcare tools and scalable web applications. At HardShell Technologies, I honed my skills in data visualization and collaborative development.
              </p>
            </div>
          </div>
        </section>

        <section id="skills" className="section glass-section">
          <div className="container">
            <h2 className="section-title">Skills</h2>
            <div className="skills-grid">
              {skills.map((skill, i) => (
                <motion.div 
                  key={i} 
                  className="skill-card glass-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h4 className="skill-category">{skill.category}</h4>
                  <div className="skill-tags">
                    {skill.items.map((item, j) => (
                      <span key={j} className="skill-tag">{item}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section glass-section">
          <div className="container">
            <h2 className="section-title">Projects</h2>
            <div className="projects-grid">
              {projects.map((proj, i) => (
                <motion.div 
                  key={i} 
                  className="project-card glass-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <h4 className="project-title">{proj.title}</h4>
                  <span className="project-period">{proj.period}</span>
                  <p className="project-description">{proj.description}</p>
                  <div className="project-tech">
                    {proj.tech.map((item, j) => (
                      <span key={j} className="tech-tag">{item}</span>
                    ))}
                  </div>
                  <div className="project-highlights">
                    {proj.highlights.map((hl, j) => (
                      <div key={j} className="highlight-item">
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="section glass-section">
          <div className="container">
            <h2 className="section-title">Experience</h2>
            <div className="experience-grid">
              {experiences.map((exp, i) => (
                <motion.div 
                  key={i} 
                  className="experience-card glass-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h4 className="experience-role">{exp.role}</h4>
                  <h5 className="experience-company">{exp.company}</h5>
                  <div className="experience-meta">
                    <span className="experience-period">{exp.period}</span>
                    <span className="experience-location">{exp.location}</span>
                  </div>
                  <p className="experience-description">{exp.description}</p>
                  <div className="experience-achievements">
                    {exp.achievements.map((ach, j) => (
                      <div key={j} className="achievement-item">
                        <span>{ach}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="education" className="section glass-section">
          <div className="container">
            <h2 className="section-title">Education</h2>
            <div className="education-grid">
              {education.map((edu, i) => (
                <motion.div 
                  key={i} 
                  className="education-card glass-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h4 className="education-institution">{edu.institution}</h4>
                  <h5 className="education-degree">{edu.degree}</h5>
                  <span className="education-period">{edu.period}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="certifications" className="section glass-section">
          <div className="container">
            <h2 className="section-title">Certifications</h2>
            <div className="certificates-grid">
              {certificates.map((cert, i) => (
                <motion.div 
                  key={i} 
                  className="certificate-card glass-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h5 className="certificate-title">{cert.title}</h5>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="extracurriculars" className="section glass-section">
          <div className="container">
            <h2 className="section-title">Activities</h2>
            <div className="activities-grid">
              {extracurriculars.map((act, i) => (
                <motion.div 
                  key={i} 
                  className="activity-card glass-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="activity-text">{act}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section glass-section contact-section">
          <div className="container">
            <h2 className="section-title">Contact</h2>
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <p className="contact-lead">
                  Interested in collaborating or discussing tech ideas? Reach out!
                </p>
                <div className="contact-grid">
                  <motion.div className="contact-card glass-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                    <div className="contact-info">
                      <h5>Email</h5>
                      <a href="mailto:priyanshushakya.work@gmail.com">priyanshushakya.work@gmail.com</a>
                    </div>
                  </motion.div>
                  <motion.div className="contact-card glass-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                    <div className="contact-info">
                      <h5>Phone</h5>
                      <a href="tel:+919821567780">+91-9821567780</a>
                    </div>
                  </motion.div>
                  <motion.div className="contact-card glass-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                    <div className="contact-info">
                      <h5>Location</h5>
                      <span>New Delhi, India</span>
                    </div>
                  </motion.div>
                </div>
                <div className="social-section">
                  <h4>Connect</h4>
                  <div className="social-links">
                    <motion.a 
                      href="https://linkedin.com/in/priyanshu-shakya-129455246" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="social-link glass-card"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      LinkedIn
                    </motion.a>
                    <motion.a 
                      href="https://github.com/priyanshu-shakya" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="social-link glass-card"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      GitHub
                    </motion.a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="footer glass-section">
          <div className="container">
            <p>© 2025 Priyanshu Shakya. Built with React.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default App;
