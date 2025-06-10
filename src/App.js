import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './Navbar';
import Lottie from 'lottie-react';
import { motion } from 'framer-motion';

import coderAnimation from './assets/coder.json';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const skills = [
    { category: "Languages", items: ["C", "C++", "Java", "Python", "SQL"] },
    { category: "Web Development", items: ["ReactJS", "Flask", "HTML5", "CSS3", "JavaScript", "API Integration"] },
    { category: "Tools", items: ["VS Code", "CAD", "Matplotlib", "Git", "GitHub"] },
    { category: "Databases & Cloud", items: ["SQL", "AWS", "Oracle"] }
  ];

  const projects = [
    {
      title: "CareCheck: Lung Cancer Diagnosis System",
      period: "December 2024 – May 2025",
      description: "AI-powered lung cancer detection system using CNN with Flask backend and responsive frontend.",
      tech: ["Python", "Flask", "CNN", "HTML5", "CSS3", "JavaScript"],
      highlights: ["Achieved high accuracy with CNN model", "Preprocessed CT scan datasets", "Full-stack implementation"]
    },
    {
      title: "Full-Stack Café Management System",
      period: "May 2025 – June 2025",
      description: "Complete café management solution with QR-based ordering and real-time tracking.",
      tech: ["Flask", "SQL", "QR Integration", "Real-time Systems"],
      highlights: ["Multi-dashboard system", "QR-based digital menu", "Dynamic pricing", "Deployed on Render"]
    },
    {
      title: "Heart Disease Prediction",
      period: "June 2022 – July 2022",
      description: "ML-based predictive model comparing multiple algorithms for heart disease detection.",
      tech: ["Python", "Decision Trees", "Random Forest", "SVM", "GBM"],
      highlights: ["Algorithm comparison", "Clinical data analysis", "Predictive modeling"]
    }
  ];

  const experiences = [
    {
      company: "HardShell Technologies Pvt. Ltd.",
      role: "SDE Intern",
      period: "May 2024 – July 2024",
      location: "Noida, Uttar Pradesh",
      description: "Contributed to E-STEM project focusing on data analysis and visualization for skills development schemes.",
      achievements: ["Data analysis for E-STEM Dashboard", "DDU-GKY Scheme implementation", "Ministry of Rural Development collaboration"]
    }
  ];

  const education = [
    {
      institution: "Amity University, Noida",
      degree: "B. Tech, Computer Science and Engineering",
      period: "July 2021 – May 2025",
      grade: "Current CGPA: 7.3"
    },
    {
      institution: "MBS International School",
      degree: "Class XII (CBSE Board)",
      period: "July 2020 – May 2021",
      grade: "82%"
    },
    {
      institution: "Vishwa Bharati Public School",
      degree: "Class X (CBSE Board)",
      period: "July 2018 – May 2019",
      grade: "82%"
    }
  ];

  const extracurriculars = [
    "Secretary General - Virtual Reality and Game Development Club (Jan 2023 – Jan 2025)",
    "Public Relations - IEEE Student Branch (Jan 2022 – August 2023)",
    "Student Organizer - ASET Freshers (October 2024)",
    "Amity Youth Fest - Organizer (March 2023)",
    "Cybercup (Hackathon) - Participant (January 2023)"
  ];

  const certificates = [
    "NPTEL: Python for Data Science",
    "AWS Academy: Cloud Foundations",
    "IBM: Data Fundamentals",
    "Google Cloud: Prompt Design in Vertex AI"
  ];

  return (
    <>
      <div className="cursor-glow" style={{
        left: mousePosition.x,
        top: mousePosition.y,
      }}></div>
      
      <MyNavbar />
      
      <div className="app bg-dark text-white" style={{ paddingTop: '56px' }}>
        {/* Hero Section */}
        <section id="hero" className="hero-section">
          <div className="hero-background"></div>
          <div className="container">
            <div className="row align-items-center min-vh-100">
              <div className="col-lg-6">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <h1 className="hero-title">
                    Hi, I'm <span className="gradient-text">Priyanshu Shakya</span> 👋
                  </h1>
                  <p className="hero-subtitle">
                    SDE Intern • AI/ML Enthusiast • Full-Stack Developer
                  </p>
                  <p className="hero-description">
                    Final year CSE student passionate about building innovative software solutions
                    and exploring the frontiers of artificial intelligence.
                  </p>
                  <div className="hero-buttons">
                    <a href="#contact" className="btn btn-primary btn-lg me-3">Get In Touch</a>
                    <a href="#projects" className="btn btn-outline-light btn-lg">View Work</a>
                  </div>
                </motion.div>
              </div>
              <div className="col-lg-6">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <Lottie animationData={coderAnimation} style={{ height: 400 }} />
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="section">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title">About Me</h2>
              <div className="row">
                <div className="col-lg-8 mx-auto">
                  <p className="lead">
                    I'm a dedicated Computer Science student at Amity University with a passion for 
                    creating impactful software solutions. My journey spans from AI-powered healthcare 
                    applications to full-stack web development, always driven by curiosity and innovation.
                  </p>
                  <p>
                    Currently based in New Delhi, I've gained valuable industry experience as an SDE Intern 
                    at HardShell Technologies, where I contributed to enterprise-level solutions for skills 
                    development programs. My academic foundation combined with hands-on experience has shaped 
                    my approach to problem-solving and software development.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="section">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title">Technical Skills</h2>
              <div className="row">
                {skills.map((skillGroup, index) => (
                  <div key={index} className="col-lg-6 mb-4">
                    <div className="skill-card">
                      <h4 className="skill-category">{skillGroup.category}</h4>
                      <div className="skill-tags">
                        {skillGroup.items.map((skill, idx) => (
                          <span key={idx} className="skill-tag">{skill}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="section">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title">Work Experience</h2>
              {experiences.map((exp, index) => (
                <div key={index} className="experience-card">
                  <div className="row">
                    <div className="col-lg-3">
                      <div className="experience-period">{exp.period}</div>
                      <div className="experience-location">{exp.location}</div>
                    </div>
                    <div className="col-lg-9">
                      <h4 className="experience-role">{exp.role}</h4>
                      <h5 className="experience-company">{exp.company}</h5>
                      <p className="experience-description">{exp.description}</p>
                      <ul className="experience-achievements">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title">Featured Projects</h2>
              <div className="row">
                {projects.map((project, index) => (
                  <div key={index} className="col-lg-4 mb-4">
                    <motion.div
                      className="project-card"
                      whileHover={{ y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="project-header">
                        <h4 className="project-title">{project.title}</h4>
                        <span className="project-period">{project.period}</span>
                      </div>
                      <p className="project-description">{project.description}</p>
                      <div className="project-tech">
                        {project.tech.map((tech, idx) => (
                          <span key={idx} className="tech-tag">{tech}</span>
                        ))}
                      </div>
                      <ul className="project-highlights">
                        {project.highlights.map((highlight, idx) => (
                          <li key={idx}>{highlight}</li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="section">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title">Education</h2>
              <div className="timeline">
                {education.map((edu, index) => (
                  <div key={index} className="timeline-item">
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                      <h4 className="timeline-title">{edu.institution}</h4>
                      <h5 className="timeline-subtitle">{edu.degree}</h5>
                      <div className="timeline-period">{edu.period}</div>
                      <div className="timeline-grade">{edu.grade}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="section">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title">Certifications</h2>
              <div className="row">
                {certificates.map((cert, index) => (
                  <div key={index} className="col-lg-6 mb-3">
                    <div className="certification-item">
                      <i className="fas fa-certificate me-3"></i>
                      {cert}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Extracurriculars Section */}
        <section id="extracurriculars" className="section">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title">Leadership & Activities</h2>
              <div className="row">
                {extracurriculars.map((activity, index) => (
                  <div key={index} className="col-lg-6 mb-3">
                    <div className="activity-item">
                      <i className="fas fa-users me-3"></i>
                      {activity}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title">Let's Connect</h2>
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="contact-content">
                    <p className="lead text-center mb-4">
                      I'm always open to discussing new opportunities, innovative projects, 
                      or just having a chat about technology and development.
                    </p>
                    <div className="contact-info">
                      <div className="contact-item">
                        <i className="fas fa-envelope"></i>
                        <a href="mailto:priyanshushakya.work@gmail.com">priyanshushakya.work@gmail.com</a>
                      </div>
                      <div className="contact-item">
                        <i className="fas fa-phone"></i>
                        <a href="tel:+919821567780">+91-9821567780</a>
                      </div>
                      <div className="contact-item">
                        <i className="fas fa-map-marker-alt"></i>
                        <span>New Delhi, India</span>
                      </div>
                    </div>
                    <div className="social-links">
                      <a href="https://linkedin.com/in/priyanshu-shakya-129455246/" target="_blank" rel="noreferrer" className="social-link">
                        <i className="fab fa-linkedin"></i>
                        LinkedIn
                      </a>
                      <a href="https://github.com/your-github" target="_blank" rel="noreferrer" className="social-link">
                        <i className="fab fa-github"></i>
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <div className="container">
            <div className="text-center">
              <p>&copy; 2025 Priyanshu Shakya. Crafted with ❤️ and React.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;