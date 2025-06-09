import React from 'react';
import { Link } from 'react-scroll';
import { Navbar, Nav, Container } from 'react-bootstrap';

export default function MyNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className="shadow-sm">
      <Container>
        <Navbar.Brand href="#">Priyanshu</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ml-auto">
            <Link className="nav-link" to="hero" smooth={true} duration={500}>Home</Link>
            <Link className="nav-link" to="about" smooth={true} duration={500}>About</Link>
            <Link className="nav-link" to="skills" smooth={true} duration={500}>Skills</Link>
            <Link className="nav-link" to="projects" smooth={true} duration={500}>Projects</Link>
            <Link className="nav-link" to="contact" smooth={true} duration={500}>Contact</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
