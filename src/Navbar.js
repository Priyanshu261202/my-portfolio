import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Navbar, Nav, Container } from 'react-bootstrap';

export default function MyNavbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

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
    >
      <Container>
        <Navbar.Brand href="#" className="brand-logo">
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
            {navItems.map((item, index) => (
              <Link
                key={index}
                className="nav-link custom-nav-link"
                to={item.to}
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
                activeClass="active"
              >
                {item.label}
              </Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
      
      <style jsx>{`
        .custom-navbar {
          background: rgba(10, 10, 10, 0.1) !important;
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
          padding: 1rem 0;
        }
        
        .custom-navbar.scrolled {
          background: rgba(10, 10, 10, 0.95) !important;
          backdrop-filter: blur(20px);
          padding: 0.5rem 0;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        }
        
        .brand-logo {
          font-size: 1.5rem;
          font-weight: 700;
          text-decoration: none;
          color: white !important;
          display: flex;
          align-items: center;
        }
        
        .brand-text {
          background: linear-gradient(45deg, #667eea, #764ba2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .brand-dot {
          color: #667eea;
          font-size: 2rem;
          line-height: 1;
          margin-left: 2px;
        }
        
        .custom-nav-link {
          color: rgba(255, 255, 255, 0.8) !important;
          font-weight: 500;
          padding: 0.5rem 1rem !important;
          margin: 0 0.2rem;
          border-radius: 25px;
          transition: all 0.3s ease;
          cursor: pointer;
          position: relative;
          text-decoration: none;
        }
        
        .custom-nav-link:hover {
          color: white !important;
          background: rgba(102, 126, 234, 0.2);
          transform: translateY(-1px);
        }
        
        .custom-nav-link.active {
          color: white !important;
          background: linear-gradient(45deg, rgba(102, 126, 234, 0.3), rgba(118, 75, 162, 0.3));
          border: 1px solid rgba(102, 126, 234, 0.5);
        }
        
        .custom-toggler {
          border: none;
          padding: 4px 8px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 8px;
        }
        
        .custom-toggler span {
          display: block;
          width: 22px;
          height: 2px;
          background: white;
          margin: 4px 0;
          transition: 0.3s;
          border-radius: 2px;
        }
        
        .custom-toggler:not(.collapsed) span:nth-child(1) {
          transform: rotate(45deg) translate(5px, 5px);
        }
        
        .custom-toggler:not(.collapsed) span:nth-child(2) {
          opacity: 0;
        }
        
        .custom-toggler:not(.collapsed) span:nth-child(3) {
          transform: rotate(-45deg) translate(7px, -6px);
        }
        
        @media (max-width: 991px) {
          .navbar-collapse {
            background: rgba(10, 10, 10, 0.95);
            backdrop-filter: blur(20px);
            border-radius: 16px;
            margin-top: 1rem;
            padding: 1rem;
            border: 1px solid rgba(255, 255, 255, 0.1);
          }
          
          .custom-nav-link {
            margin: 0.2rem 0;
            text-align: center;
          }
        }
      `}</style>
    </Navbar>
  );
}