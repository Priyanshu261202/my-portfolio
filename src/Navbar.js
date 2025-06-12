import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Navbar, Nav, Container } from 'react-bootstrap';

export default function MyNavbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { to: 'hero', label: 'Home' },
    { to: 'about', label: 'About' },
    { to: 'skills', label: 'Skills' },
    { to: 'experience', label: 'Experience' },
    { to: 'projects', label: 'Projects' },
    { to: 'education', label: 'Education' },
    { to: 'contact', label: 'Contact' }
  ];

  return (
    <Navbar 
      expand="lg" 
      fixed="top" 
      className={`custom-navbar ${scrolled ? 'scrolled' : ''}`}
      variant="dark"
      aria-label="Main navigation"
    >
      <Container>
        <Navbar.Brand as={Link} to="hero" smooth={true} duration={500} className="brand-logo">
          <span className="brand-text">Priyanshu</span>
          <span className="brand-dot">.</span>
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="navbarScroll" className="custom-toggler">
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto">
            {navItems.map((item, i) => (
              <Link
                key={i}
                className="nav-link"
                to={item.to}
                smooth={true}
                duration={250}
                spy={true}
                offset={-80}
                activeClass="active"
                aria-current={isActive => isActive ? 'page' : undefined}
              >
                {item.label}
              </Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
      
      <style jsx>{`
        .custom-navbar {
          background: linear-gradient(135deg, rgba(0, 0, 0, 0.2), rgba(20, 20, 40, 0.2)) !important;
          backdrop-filter: blur(3px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
          padding: 0.75rem 0;
          z-index: 1000;
        }
        
        .custom-navbar.scrolled {
          background: linear-gradient(135deg, rgba(0, 0, 20, 0.9), rgba(20, 0, 40, 0.9)) !important;
          padding: 0.5rem 0;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
        }
        
        .brand-logo {
          font-size: 1.6rem;
          font-weight: 800;
          color: white !important;
          display: flex;
          align-items: center;
          transition: transform 0.3s ease;
        }
        .brand-logo:hover {
          transform: scale(1.05);
        }
        
        .brand-text {
          background: linear-gradient(45deg, #00ddeb, #ff007a);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .brand-dot {
          color: #00ddeb;
          font-size: 2rem;
          margin-left: 4px;
          animation: pulseDot 2s infinite;
        }
        
        @keyframes pulseDot {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.2); }
        }
        
        .nav-link {
          color: rgba(255, 255, 255, 0.85) !important;
          font-weight: 600;
          padding: 0.5rem 1.2rem !important;
          margin: 0 0.3rem;
          border-radius: 20px;
          transition: all 0.3s ease;
          cursor: pointer;
          position: relative;
          text-decoration: none;
          font-size: 0.95rem;
        }
        
        .nav-link:hover {
          color: white !important;
          background: rgba(0, 221, 235, 0.15);
          transform: translateY(-2px);
        }
        
        .nav-link.active {
          color: white !important;
          background: linear-gradient(45deg, rgba(0, 221, 235, 0.3), rgba(255, 0, 122, 0.3));
          border: 1px solid rgba(0, 221, 235, 0.4);
        }
        
        .custom-toggler {
          border: none;
          padding: 6px 10px;
          background: rgba(255, 255, 255, 0.15);
          border-radius: 10px;
        }
        
        .custom-toggler span {
          display: block;
          width: 24px;
          height: 2.5px;
          background: white;
          margin: 5px 0;
          transition: 0.3s;
          border-radius: 3px;
        }
        
        .custom-toggler:not(.collapsed) span:nth-child(1) {
          transform: rotate(45deg) translate(6px, 6px);
        }
        
        .custom-toggler:not(.collapsed) span:nth-child(2) {
          opacity: 0;
        }
        
        .custom-toggler:not(.collapsed) span:nth-child(3) {
          transform: rotate(-45deg) translate(8px, -7px);
        }
        
        @media (max-width: 991px) {
          .navbar-collapse {
            background: linear-gradient(135deg, rgba(0, 0, 20, 0.95), rgba(20, 0, 40, 0.95));
            backdrop-filter: blur(12px);
            border-radius: 12px;
            margin-top: 0.75rem;
            padding: 1rem;
            border: 1px solid rgba(255, 255, 255, 0.1);
          }
          
          .nav-link {
            margin: 0.3rem 0;
            text-align: center;
            font-size: 1rem;
          }
        }
      `}</style>
    </Navbar>
  );
}