import React, { useMemo, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './Navbar';
import Lottie from 'react-lottie';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaLinkedin, FaGithub, FaPython, FaReact, FaJava, FaAws, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaFigma, FaDatabase, FaEnvelope, FaPhone, FaMapMarkerAlt, FaExternalLinkAlt } from 'react-icons/fa';
import { SiTensorflow, SiFlask, SiScikitlearn, SiPandas } from 'react-icons/si';
import coderAnimation from './assets/coder.json';

const App = () => {
  useEffect(() => {
    let retries = 0;
    const maxRetries = 3;
    const retryDelay = 1000; // 1 second

    const initParticles = () => {
      if (window.particlesJS) {
        console.log('Initializing particles.js');
        window.particlesJS('particles-js', {
          particles: {
            number: {
              value: 80,
              density: {
                enable: true,
                value_area: 800
              }
            },
            color: {
              value: "#4fff00"
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#000000"
              }
            },
            opacity: {
              value: 0.7,
              random: false,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false
              }
            },
            size: {
              value: 3,
              random: true,
              anim: {
                enable: false,
                speed: 0,
                size_min: 0.1,
                sync: false
              }
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#6fff7e",
              opacity: 0.4,
              width: 1
            },
            move: {
              enable: true,
              speed: 3,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
              }
            }
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: true,
                mode: "grab"
              },
              onclick: {
                enable: true,
                mode: "push"
              },
              resize: true
            },
            modes: {
              grab: {
                distance: 300, // Increased for more noticeable effect
                line_linked: {
                  opacity: 1,
                  color: "#6fff7e" // Match particle lines
                }
              },
              bubble: {
                distance: 170,
                size: 40,
                duration: 0.8,
                opacity: 0.45,
                speed: 3
              },
              repulse: {
                distance: 200,
                duration: 0.4
              },
              push: {
                particles_nb: 4
              },
              remove: {
                particles_nb: 2
              }
            }
          },
          retina_detect: true
        });
        console.log('particles.js initialized successfully');
      } else {
        console.error('particles.js not loaded yet. Retrying...', { retries });
        if (retries < maxRetries) {
          retries++;
          setTimeout(initParticles, retryDelay);
        } else {
          console.error('Max retries reached. particles.js failed to load.');
        }
      }
    };

    // Check if particles.js is already loaded
    if (window.particlesJS) {
      initParticles();
    } else {
      // Load particles.js dynamically
      console.log('Loading particles.js from CDN');
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js';
      script.async = true;
      script.onload = () => {
        console.log('particles.js CDN loaded');
        initParticles();
      };
      script.onerror = () => {
        console.error('Failed to load particles.js from CDN');
        if (retries < maxRetries) {
          retries++;
          setTimeout(initParticles, retryDelay);
        }
      };
      document.body.appendChild(script);
    }

    // Cleanup on unmount
    return () => {
      if (window.pJSDom && window.pJSDom[0]) {
        window.pJSDom[0].pJS.fn.vendors.destroypJS();
        window.pJSDom = [];
        console.log('particles.js cleaned up');
      }
    };
  }, []);

  const skills = useMemo(() => [
    { 
      category: 'Programming Languages', 
      items: [
        { name: 'C++', icon: <FaJava /> }, 
        { name: 'Java', icon: <FaJava /> }, 
        { name: 'Python', icon: <FaPython /> }, 
        { name: 'SQL', icon: <FaDatabase /> }
      ] 
    },
    { 
      category: 'Web Development', 
      items: [
        { name: 'React', icon: <FaReact /> }, 
        { name: 'Flask', icon: <SiFlask /> }, 
        { name: 'HTML5', icon: <FaHtml5 /> }, 
        { name: 'CSS3', icon: <FaCss3Alt /> }, 
        { name: 'JavaScript', icon: <FaJs /> }
      ] 
    },
    { 
      category: 'Development Tools', 
      items: [
        { name: 'VS Code', icon: null }, 
        { name: 'Git', icon: <FaGitAlt /> }, 
        { name: 'GitHub', icon: <FaGithub /> }, 
        { name: 'Figma', icon: <FaFigma /> }
      ] 
    },
    { 
      category: 'Cloud & AI Technologies', 
      items: [
        { name: 'AWS', icon: <FaAws /> }, 
        { name: 'TensorFlow', icon: <SiTensorflow /> }, 
        { name: 'Scikit-learn', icon: <SiScikitlearn /> }, 
        { name: 'Pandas', icon: <SiPandas /> }
      ] 
    },
  ], []);

  const projects = useMemo(() => [
    { 
      title: 'CareCheck: AI Lung Cancer Diagnosis', 
      period: 'December 2024 – May 2025', 
      description: 'Advanced AI-driven lung cancer detection system using Convolutional Neural Networks with Flask backend and responsive React frontend.', 
      tech: [
        { name: 'Python', icon: <FaPython /> }, 
        { name: 'Flask', icon: <SiFlask /> }, 
        { name: 'TensorFlow', icon: <SiTensorflow /> }, 
        { name: 'React', icon: <FaReact /> }, 
        { name: 'AWS', icon: <FaAws /> }
      ], 
      highlights: [
        '95%+ model accuracy with advanced CNN architecture',
        'Real-time CT scan analysis and diagnosis',
        'Scalable cloud deployment on AWS infrastructure',
        'Responsive UI with interactive visualizations'
      ] 
    },
    { 
      title: 'CaféSync: Smart Management System', 
      period: 'May 2025 – June 2025', 
      description: 'Comprehensive full-stack café management solution featuring QR-based ordering system and real-time order tracking capabilities.', 
      tech: [
        { name: 'Flask', icon: <SiFlask /> }, 
        { name: 'SQL', icon: <FaDatabase /> }, 
        { name: 'React', icon: <FaReact /> }, 
        { name: 'WebSocket', icon: null }
      ], 
      highlights: [
        'Real-time order dashboards with live updates',
        'QR code menu integration for contactless ordering',
        'Multi-role user management system',
        'Cloud hosting on AWS with high availability'
      ] 
    },
    { 
      title: 'Heart Disease Prediction Model', 
      period: 'June 2022', 
      description: 'Machine learning project comparing multiple algorithms for accurate heart disease prediction with comprehensive data analysis.', 
      tech: [
        { name: 'Python', icon: <FaPython /> }, 
        { name: 'Scikit-learn', icon: <SiScikitlearn /> }, 
        { name: 'Pandas', icon: <SiPandas /> }, 
        { name: 'Matplotlib', icon: null }
      ], 
      highlights: [
        'Multi-algorithm comparison and analysis',
        'High predictive accuracy with cross-validation',
        'Interactive data visualizations and insights',
        'Feature importance analysis and optimization'
      ] 
    },
  ], []);

  const experiences = useMemo(() => [
    { 
      company: 'HardShell Technologies', 
      role: 'Software Development Engineer Intern', 
      period: 'May 2024 – July 2024', 
      location: 'New Delhi, India', 
      description: 'Developed comprehensive data visualization tools and dashboards for the E-STEM project, supporting government skill development programs and initiatives.', 
      achievements: [
        'Built interactive E-STEM project dashboards with real-time analytics',
        'Integrated DDU-GKY (Deen Dayal Upadhyaya Grameen Kaushalya Yojana) data systems',
      ] 
    },
  ], []);

  const education = useMemo(() => [
    { 
      institution: 'Amity University', 
      degree: 'Bachelor of Technology in Computer Science & Engineering', 
      period: '2021 – 2025',
      details: 'Specialization in CSE '
    },
    { 
      institution: 'MBS International School', 
      degree: 'Class XII (CBSE Board)', 
      period: '2020 – 2021',
      details: 'Science Stream with Mathematics and Computer Science'
    },
    { 
      institution: 'Vishwa Bharati School', 
      degree: 'Class X (CBSE Board)', 
      period: '2018 – 2019',
      details: 'All India Secondary School Examination'
    },
  ], []);

  const extracurriculars = useMemo(() => [
    'Secretary General, VR & Game Development Club (2024 – 2025)',
    'Public Relations Lead, IEEE Student Branch (2022 – 2023)',
    'Event Organizer, ASET Freshers Welcome (2024)',
    'Core Team Member, Amity Youth Festival (2023)',
    'Organizer, CyberCup Hackathon (2024)',
    'Volunteer, Technical Symposium and Workshops'
  ], []);

  const certificates = useMemo(() => [
    { title: 'NPTEL Certification: Python for Data Science' },
    { title: 'AWS Certified Cloud Practitioner' },
    { title: 'IBM AI Fundamentals Certification' },
    { title: 'Google Cloud: Vertex AI Specialization' },
  ], []);

  const lottieOptions = useMemo(() => ({
    animationData: coderAnimation,
    loop: true,
    autoplay: true,
    rendererSettings: { 
      preserveAspectRatio: 'xMidYMid slice'
    },
  }), []);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: 'easeOut' }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <>
      <MyNavbar />
      <div className="app">
        <div className="glass-background" />
        <div id="particles-js" className="particles"></div>

        <section id="hero" className="hero-section" role="banner">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <motion.div
                  className="hero-content"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                  <h1 className="hero-title">Priyanshu Shakya</h1>
                  <TypeAnimation
                    sequence={[
                      'Computer Science Engineer', 2000,
                      'AI/ML Innovator', 2000, 
                      'Full-Stack Developer', 2000,
                      'Tech Enthusiast', 2000
                    ]}
                    wrapper="p"
                    repeat={Infinity}
                    className="hero-subtitle"
                  />
                  <p className="hero-description">
                    Passionate about crafting innovative AI solutions and modern web applications 
                    that solve real-world problems with cutting-edge technology and user-centric design.
                  </p>
                  <div className="hero-buttons">
                    <a href="#projects" className="btn btn-primary">
                      <FaExternalLinkAlt className="me-2" />
                      View My Work
                    </a>
                    <a href="#contact" className="btn btn-glass">
                      <FaEnvelope className="me-2" />
                      Get In Touch
                    </a>
                  </div>
                </motion.div>
              </div>
              <div className="col-lg-6">
                <motion.div
                  className="hero-animation-container"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                >
                  <Lottie options={lottieOptions} height={400} width={400} />
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section glass-section">
          <div className="container">
            <motion.div {...fadeInUp}>
              <h2 className="section-title">About Me</h2>
              <div className="glass-card about-card">
                <p className="about-lead">
                  A passionate Computer Science Engineer specializing in AI/ML and Full-Stack Development
                </p>
                <p className="about-text">
                  With a strong foundation in artificial intelligence, machine learning, and modern web technologies, 
                  I create innovative solutions that bridge the gap between cutting-edge technology and real-world applications. 
                  My experience spans from developing AI-powered diagnostic systems to building scalable web applications, 
                  always with a focus on user experience and technical excellence.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="container">
            <motion.div {...fadeInUp}>
              <h2 className="section-title">Technical Skills</h2>
              <motion.div className="skills-grid" {...staggerContainer}>
                {skills.map((skillGroup, index) => (
                  <motion.div key={index} className="glass-card" {...fadeInUp}>
                    <h3 className="skill-category">{skillGroup.category}</h3>
                    <div className="skill-tags">
                      {skillGroup.items.map((skill, skillIndex) => (
                        <span key={skillIndex} className="skill-tag">
                          {skill.icon && <span className="skill-icon">{skill.icon}</span>}
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section id="projects" className="section glass-section">
          <div className="container">
            <motion.div {...fadeInUp}>
              <h2 className="section-title">Featured Projects</h2>
              <motion.div className="projects-grid" {...staggerContainer}>
                {projects.map((project, index) => (
                  <motion.div key={index} className="glass-card" {...fadeInUp}>
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-period">{project.period}</p>
                    <p className="project-description">{project.description}</p>
                    <div className="project-tech">
                      {project.tech.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">
                          {tech.icon && <span className="skill-icon">{tech.icon}</span>}
                          {tech.name}
                        </span>
                      ))}
                    </div>
                    <div className="project-highlights">
                      {project.highlights.map((highlight, highlightIndex) => (
                        <div key={highlightIndex} className="highlight-item">
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section id="experience" className="section">
          <div className="container">
            <motion.div {...fadeInUp}>
              <h2 className="section-title">Professional Experience</h2>
              <motion.div className="experience-grid" {...staggerContainer}>
                {experiences.map((experience, index) => (
                  <motion.div key={index} className="glass-card" {...fadeInUp}>
                    <div className="experience-company">{experience.company}</div>
                    <h3 className="experience-role">{experience.role}</h3>
                    <div className="experience-meta">
                      <span>{experience.period}</span>
                      <span>•</span>
                      <span>{experience.location}</span>
                    </div>
                    <p className="experience-description">{experience.description}</p>
                    <div className="experience-achievements">
                      {experience.achievements.map((achievement, achievementIndex) => (
                        <div key={achievementIndex} className="achievement-item">
                          {achievement}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section id="education" className="section glass-section">
          <div className="container">
            <motion.div {...fadeInUp}>
              <h2 className="section-title">Education</h2>
              <motion.div className="education-grid" {...staggerContainer}>
                {education.map((edu, index) => (
                  <motion.div key={index} className="glass-card" {...fadeInUp}>
                    <h3 className="education-institution">{edu.institution}</h3>
                    <div className="education-degree">{edu.degree}</div>
                    <p className="education-period">{edu.period}</p>
                    <p className="project-description">{edu.details}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section id="certificates" className="section">
          <div className="container">
            <motion.div {...fadeInUp}>
              <h2 className="section-title">Certifications</h2>
              <motion.div className="certificates-grid" {...staggerContainer}>
                {certificates.map((cert, index) => (
                  <motion.div key={index} className="glass-card" {...fadeInUp}>
                    <h4 className="certificate-title">{cert.title}</h4>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section id="activities" className="section glass-section">
          <div className="container">
            <motion.div {...fadeInUp}>
              <h2 className="section-title">Extracurricular Activities</h2>
              <motion.div className="activities-grid" {...staggerContainer}>
                {extracurriculars.map((activity, index) => (
                  <motion.div key={index} className="glass-card" {...fadeInUp}>
                    <p className="activity-text">{activity}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="container">
            <motion.div {...fadeInUp}>
              <h2 className="section-title">Get In Touch</h2>
              <p className="contact-grid">
                
              </p>
              <motion.div className="contact-grid" {...staggerContainer}>
                <motion.div className="glass-card contact-info" {...fadeInUp}>
                  <h5><FaEnvelope className="me-2" />Email</h5>
                  <a href="mailto:priyanshushakya.work@gmail.com">priyanshushakya.work@gmail.com</a>
                </motion.div>
                <motion.div className="glass-card contact-info" {...fadeInUp}>
                  <h5><FaPhone className="me-2" />Phone</h5>
                  <span>+91 9821567780</span>
                </motion.div>
                <motion.div className="glass-card contact-info" {...fadeInUp}>
                  <h5><FaMapMarkerAlt className="me-2" />Location</h5>
                  <span>New Delhi, India</span>
                </motion.div>
              </motion.div>

              <div className="social-section">
                <h4>Connect With Me</h4>
                <div className="social-links">
                  <a href="https://www.linkedin.com/in/priyanshu-shakya-129455246/" className="social-link glass-card">
                    <FaLinkedin className="social-icon" />
                    LinkedIn
                  </a>
                  <a href="https://github.com/Priyanshu261202" className="social-link glass-card">
                    <FaGithub className="social-icon" />
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <footer className="footer">
          <div className="container">
            <p> </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default App;
