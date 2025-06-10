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
    },
    // Add more experiences here following the same structure
    // {
    //   company: "Your Next Company",
    //   role: "Your Next Role",
    //   period: "Start Date – End Date",
    //   location: "City, State",
    //   description: "Brief description of your role and responsibilities.",
    //   achievements: ["Achievement 1", "Achievement 2", "Achievement 3"]
    // }
  ];

  const education = [
    {
      institution: "Amity University, Noida",
      degree: "B. Tech, Computer Science and Engineering",
      period: "July 2021 – May 2025"
    },
    {
      institution: "MBS International School",
      degree: "Class XII (CBSE Board)",
      period: "July 2020 – May 2021"
    },
    {
      institution: "Vishwa Bharati Public School",
      degree: "Class X (CBSE Board)",
      period: "July 2018 – May 2019"
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
    {
      title: "NPTEL: Python for Data Science",
      image: "/path/to/certificate1.jpg" // Replace with actual image path
    },
    {
      title: "AWS Academy: Cloud Foundations",
      image: "/path/to/certificate2.jpg" // Replace with actual image path
    },
    {
      title: "IBM: Data Fundamentals",
      image: "/path/to/certificate3.jpg" // Replace with actual image path
    },
    {
      title: "Google Cloud: Prompt Design in Vertex AI",
      image: "/path/to/certificate4.jpg" // Replace with actual image path
    }
    // Add more certificates here following the same structure
    // {
    //   title: "Your Certificate Name",
    //   image: "/path/to/certificate.jpg"
    // }
  ];

  return (
    <>
      <div 
        className="cursor-effect"
        style={{
          left: mousePosition.x - 20,
          top: mousePosition.y - 20,
        }}
      />
      
      <MyNavbar />
      
      <div className="app bg-dark text-white" style={{ paddingTop: '70px' }}>
        {/* Floating Elements */}
        <div className="floating-elements">
          <div className="floating-element floating-element-1"></div>
          <div className="floating-element floating-element-2"></div>
          <div className="floating-element floating-element-3"></div>
        </div>

        {/* Hero Section */}
        <section id="hero" className="hero-section">
          <div className="hero-background-overlay"></div>
          <div className="container">
            <div className="row align-items-center min-vh-100">
              <div className="col-lg-6">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                >
                  <div className="hero-badge">
                    <span>👋 Welcome to my digital space</span>
                  </div>
                  <h1 className="hero-title">
                    Hi, I'm <span className="gradient-text">Priyanshu Shakya</span>
                  </h1>
                  <p className="hero-subtitle">
                    Computer Science Engineer & AI Enthusiast
                  </p>
                  <p className="hero-description">
                    Crafting innovative software solutions and exploring the frontiers of artificial intelligence 
                    with passion, precision, and purpose.
                  </p>
                  <div className="hero-buttons">
                    <a href="#contact" className="btn btn-primary btn-lg">
                      <span>Get In Touch</span>
                      <div className="btn-shine"></div>
                    </a>
                    <a href="#projects" className="btn btn-glass btn-lg">
                      <span>View Work</span>
                      <i className="fas fa-arrow-right"></i>
                    </a>
                  </div>
                  <div className="hero-stats">
                    <div className="stat-item">
                      <span className="stat-number">3+</span>
                      <span className="stat-label">Projects</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-number">1+</span>
                      <span className="stat-label">Experience</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-number">4+</span>
                      <span className="stat-label">Certificates</span>
                    </div>
                  </div>
                </motion.div>
              </div>
              <div className="col-lg-6">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, rotateY: 20 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                  className="hero-animation-container"
                >
                  <div className="animation-backdrop"></div>
                  <Lottie 
                    animationData={coderAnimation} 
                    style={{ height: 450, zIndex: 2, position: 'relative' }} 
                  />
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
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title">
                <span className="title-number">01.</span>
                About Me
              </h2>
              <div className="row justify-content-center">
                <div className="col-lg-10">
                  <div className="about-card">
                    <div className="about-content">
                      <p className="about-lead">
                        I'm a dedicated Computer Science student at Amity University with a passion for 
                        creating impactful software solutions that make a difference.
                      </p>
                      <p className="about-text">
                        My journey spans from AI-powered healthcare applications to full-stack web development, 
                        always driven by curiosity and innovation. Currently based in New Delhi, I've gained 
                        valuable industry experience as an SDE Intern at HardShell Technologies, where I 
                        contributed to enterprise-level solutions for skills development programs.
                      </p>
                      <p className="about-text">
                        My academic foundation combined with hands-on experience has shaped my approach to 
                        problem-solving and software development, focusing on clean code, user experience, 
                        and scalable solutions.
                      </p>
                    </div>
                  </div>
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
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title">
                <span className="title-number">02.</span>
                Technical Arsenal
              </h2>
              <div className="skills-grid">
                {skills.map((skillGroup, index) => (
                  <motion.div 
                    key={index} 
                    className="skill-card"
                    whileHover={{ scale: 1.02, rotateY: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="skill-header">
                      <h4 className="skill-category">{skillGroup.category}</h4>
                      <div className="skill-icon">
                        <i className={`fas fa-${index === 0 ? 'code' : index === 1 ? 'globe' : index === 2 ? 'tools' : 'database'}`}></i>
                      </div>
                    </div>
                    <div className="skill-tags">
                      {skillGroup.items.map((skill, idx) => (
                        <motion.span 
                          key={idx} 
                          className="skill-tag"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.2 }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
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
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title">
                <span className="title-number">03.</span>
                Professional Journey
              </h2>
              <div className="experience-timeline">
                {experiences.map((exp, index) => (
                  <motion.div 
                    key={index} 
                    className="experience-item"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="experience-marker"></div>
                    <div className="experience-card">
                      <div className="experience-header">
                        <div className="experience-title-section">
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
                        {exp.achievements.map((achievement, idx) => (
                          <div key={idx} className="achievement-item">
                            <i className="fas fa-chevron-right"></i>
                            <span>{achievement}</span>
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

        {/* Projects Section */}
        <section id="projects" className="section">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title">
                <span className="title-number">04.</span>
                Featured Projects
              </h2>
              <div className="projects-grid">
                {projects.map((project, index) => (
                  <motion.div
                    key={index}
                    className="project-card"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ 
                      scale: 1.02, 
                      rotateX: 5,
                      rotateY: 5,
                    }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="project-number">{String(index + 1).padStart(2, '0')}</div>
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
                    <div className="project-highlights">
                      {project.highlights.map((highlight, idx) => (
                        <div key={idx} className="highlight-item">
                          <i className="fas fa-star"></i>
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
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
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title">
                <span className="title-number">05.</span>
                Academic Foundation
              </h2>
              <div className="education-timeline">
                {education.map((edu, index) => (
                  <motion.div 
                    key={index} 
                    className="education-item"
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
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

        {/* Certifications Section */}
        <section id="certifications" className="section">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title">
                <span className="title-number">06.</span>
                Certifications & Achievements
              </h2>
              <div className="certificates-grid">
                {certificates.map((cert, index) => (
                  <motion.div
                    key={index}
                    className="certificate-card"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.05, rotateY: 10 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="certificate-image">
                      <img src={cert.image} alt={cert.title} />
                      <div className="certificate-overlay">
                        <i className="fas fa-certificate"></i>
                      </div>
                    </div>
                    <div className="certificate-content">
                      <h5 className="certificate-title">{cert.title}</h5>
                    </div>
                  </motion.div>
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
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title">
                <span className="title-number">07.</span>
                Leadership & Activities
              </h2>
              <div className="activities-grid">
                {extracurriculars.map((activity, index) => (
                  <motion.div
                    key={index}
                    className="activity-card"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="activity-icon">
                      <i className="fas fa-trophy"></i>
                    </div>
                    <span className="activity-text">{activity}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section contact-section">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title">
                <span className="title-number">08.</span>
                Let's Create Something Amazing
              </h2>
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="contact-content">
                    <p className="contact-lead">
                      Ready to turn ideas into reality? I'm always excited to discuss new opportunities, 
                      innovative projects, or just have a conversation about technology and its possibilities.
                    </p>
                    
                    <div className="contact-cards">
                      <motion.div 
                        className="contact-card"
                        whileHover={{ scale: 1.05, rotateY: 10 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="contact-icon">
                          <i className="fas fa-envelope"></i>
                        </div>
                        <div className="contact-info">
                          <h5>Email</h5>
                          <a href="mailto:priyanshushakya.work@gmail.com">priyanshushakya.work@gmail.com</a>
                        </div>
                      </motion.div>

                      <motion.div 
                        className="contact-card"
                        whileHover={{ scale: 1.05, rotateY: 10 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="contact-icon">
                          <i className="fas fa-phone"></i>
                        </div>
                        <div className="contact-info">
                          <h5>Phone</h5>
                          <a href="tel:+919821567780">+91-9821567780</a>
                        </div>
                      </motion.div>

                      <motion.div 
                        className="contact-card"
                        whileHover={{ scale: 1.05, rotateY: 10 }}
                        transition={{ duration: 0.3 }}
                      >
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
                      <h4>Connect with me</h4>
                      <div className="social-links">
                        <motion.a 
                          href="https://linkedin.com/in/priyanshu-shakya-129455246/" 
                          target="_blank" 
                          rel="noreferrer" 
                          className="social-link"
                          whileHover={{ scale: 1.1, rotateZ: 5 }}
                          transition={{ duration: 0.3 }}
                        >
                          <i className="fab fa-linkedin-in"></i>
                          <span>LinkedIn</span>
                        </motion.a>
                        <motion.a 
                          href="https://github.com/your-github" 
                          target="_blank" 
                          rel="noreferrer" 
                          className="social-link"
                          whileHover={{ scale: 1.1, rotateZ: -5 }}
                          transition={{ duration: 0.3 }}
                        >
                          <i className="fab fa-github"></i>
                          <span>GitHub</span>
                        </motion.a>
                      </div>
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
            <div className="footer-content">
              <div className="footer-text">
               
              </div>
              <div className="footer-links">
                <a href="#hero">Back to Top</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
