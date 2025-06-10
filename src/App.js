import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/bootstrap.min.css';
import MyNavbar from './Navbar';
import Lottie from 'react-lottie';
import { motion } from 'framer-motion';
import coderAnimation from './assets/coder.json';


const App = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

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
    { title: "NPTEL: Python for Data Science", image: '#' },
    { title: "AWS: Cloud Practitioner", image: '#' },
    { title: "IBM: AI Fundamentals", image: '#' },
    { title: "Google Cloud: Vertex AI", image: '#' }
  ];

  const lottieOptions = {
    animationData: coderAnimation,
    loop: true,
    autoplay: true,
    rendererSettings: { preserveAspectRatio: 'xMidYMid slice' }
  };

  return (
    <>
      <div 
        className="cursor-effect"
        style={{ left: mousePos.x - 20, top: mousePos.y - 20 }}
        aria-hidden="true"
      />
      <MyNavbar />
      <div className="app" style={{ paddingTop: '80px' }}>
        <div className="floating-elements">
          <div className="floating-element floating-element-1"></div>
          <div className="floating-element floating-element-2"></div>
          <div className="floating-element floating-element-3"></div>
        </div>

        <section id="hero" className="hero-section">
          <div className="hero-background-overlay"></div>
          <div className="container">
            <div className="row align-items-center min-vh-100">
              <div className="col-lg-6">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="hero-badge">👋 Welcome</div>
                  <h1 className="hero-title">
                    I'm <span className="gradient-text">Priyanshu Shakya</span>
                  </h1>
                  <p className="hero-subtitle">Computer Science Engineer </p>
                  <p className="hero-description">
                    Building cutting-edge software and pushing AI boundaries with creativity and precision.
                  </p>
                  <div className="hero-buttons">
                    <a href="#contact" className="btn btn-primary">Contact Me</a>
                    <a href="#projects" className="btn btn-glass">Explore Projects</a>
                  </div>
                  <div className="hero-stats">
                    <div className="stat-item">
                      <span className="stat-number">3+</span>
                      <span className="stat-label">Projects</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-number">1+</span>
                      <span className="stat-label">Years Exp</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-number">4+</span>
                      <span className="stat-label">Certifications</span>
                    </div>
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
                  <div className="animation-backdrop"></div>
                  <Lottie options={lottieOptions} height={400} style={{ zIndex: 2 }} />
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title">
                <span className="title-number">01.</span>About
              </h2>
              <div className="about-card">
                <p className="about-lead">
                  Passionate CS student at Amity University, building impactful tech solutions.
                </p>
                <p className="about-text">
                  From AI-driven healthcare to scalable web apps, I thrive on solving real-world problems. 
                 
                </p>
                <p className="about-text">
                  I focus on clean code, intuitive UX, and innovative solutions, always eager to learn and grow.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title">
                <span className="title-number">02.</span>Skills
              </h2>
              <div className="skills-grid">
                {skills.map((skill, i) => (
                  <motion.div 
                    key={i} 
                    className="skill-card"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="skill-header">
                      <h4 className="skill-category">{skill.category}</h4>
                      <div className="skill-icon">
                        <i className={`fas fa-${i === 0 ? 'code' : i === 1 ? 'laptop-code' : i === 2 ? 'tools' : 'cloud'}`} />
                      </div>
                    </div>
                    <div className="skill-tags">
                      {skill.items.map((item, j) => (
                        <span key={j} className="skill-tag">{item}</span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section id="experience" className="section">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title">
                <span className="title-number">03.</span>Experience
              </h2>
              <div className="experience-timeline">
                {experiences.map((exp, i) => (
                  <motion.div 
                    key={i} 
                    className="experience-item"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="experience-marker"></div>
                    <div className="experience-card">
                      <div className="experience-header">
                        <div>
                          <h4 className="experience-role">{exp.role}</h4>
                          <h5 className="experience-company">{exp.company}</h5>
                        </div>
                        <div className="experience-meta">
                          <span className="experience-period">{exp.period}</span>
                          <span className="experience-location">{exp.location}</span>
                        </div>
                      </div>
                      <p className="experience-description">{exp.description}</p>
                      <div className="experience-achievements">
                        {exp.achievements.map((ach, j) => (
                          <div key={j} className="achievement-item">
                            <i className="fas fa-chevron-right"></i>
                            <span>{ach}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title">
                <span className="title-number">04.</span>Projects
              </h2>
              <div className="projects-grid">
                {projects.map((proj, i) => (
                  <motion.div 
                    key={i} 
                    className="project-card"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="project-number">{String(i + 1).padStart(2, '0')}</div>
                    <div className="project-header">
                      <h4 className="project-title">{proj.title}</h4>
                      <span className="project-period">{proj.period}</span>
                    </div>
                    <p className="project-description">{proj.description}</p>
                    <div className="project-tech">
                      {proj.tech.map((item, j) => (
                        <span key={j} className="tech-tag">{item}</span>
                      ))}
                    </div>
                    <div className="project-highlights">
                      {proj.highlights.map((hl, j) => (
                        <div key={j} className="highlight-item">
                          <i className="fas fa-star"></i>
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section id="education" className="section">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title">
                <span className="title-number">05.</span>Education
              </h2>
              <div className="education-timeline">
                {education.map((edu, i) => (
                  <motion.div 
                    key={i} 
                    className="education-item"
                    initial={{ opacity: 0, x: i % 2 ? 20 : -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="education-marker"></div>
                    <div className="education-card">
                      <h4 className="education-institution">{edu.institution}</h4>
                      <h5 className="education-degree">{edu.degree}</h5>
                      <span className="education-period">{edu.period}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section id="certifications" className="section">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title">
                <span className="title-number">06.</span>Certifications
              </h2>
              <div className="certificates-grid">
                {certificates.map((cert, i) => (
                  <motion.div 
                    key={i} 
                    className="certificate-card"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="certificate-image">
                      <div className="certificate-overlay">
                        <i className="fas fa-certificate"></i>
                      </div>
                    </div>
                    <h5 className="certificate-title">{cert.title}</h5>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section id="extracurriculars" className="section">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title">
                <span className="title-number">07.</span>Activities
              </h2>
              <div className="activities-grid">
                {extracurriculars.map((act, i) => (
                  <motion.div 
                    key={i} 
                    className="activity-card"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="activity-icon">
                      <i className="fas fa-trophy"></i>
                    </div>
                    <span className="activity-text">{act}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title">
                <span className="title-number">08.</span>Contact
              </h2>
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <p className="contact-lead">
                    Let's collaborate on innovative projects!
                  </p>
                  <div className="contact-cards">
                    <motion.div className="contact-card" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                      <div className="contact-icon">
                        <i className="fas fa-envelope"></i>
                      </div>
                      <div className="contact-info">
                        <h5>Email</h5>
                        <a href="mailto:priyanshushakya.work@gmail.com">priyanshushakya.work@gmail.com</a>
                      </div>
                    </motion.div>
                    <motion.div className="contact-card" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                      <div className="contact-icon">
                        <i className="fas fa-phone"></i>
                      </div>
                      <div className="contact-info">
                        <h5>Phone</h5>
                        <a href="tel:+919821567780">+91-9821567780</a>
                      </div>
                    </motion.div>
                    <motion.div className="contact-card" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                      <div className="contact-icon">
                        <i className="fas fa-map-marker-alt"></i>
                      </div>
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
                        className="social-link"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                        <i className="fab fa-linkedin"></i>
                        LinkedIn
                      </motion.a>
                      <motion.a 
                        href="https://github.com/priyanshu-shakya" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="social-link"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                        <i className="fab fa-github"></i>
                        GitHub
                      </motion.a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <footer className="footer">
          <div className="container">
            <div className="footer-content">
              <div className="footer-text">
                <p>© 2025 Priyanshu Shakya. Built with React & Passion.</p>
              </div>
              <div className="footer-links">
                <a href="#hero">Top</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default App;
