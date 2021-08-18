import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="info" variant="primary">
      <Container>
        <Link to="/">
          <Navbar.Brand className="fw-bold">
            PH<span className="text-danger">O</span>TIX
          </Navbar.Brand>
        </Link>
        <Nav className="ms-auto fw-bold">
          <Link to="/">
            <Nav.Link>Home</Nav.Link>
          </Link>
          <Link to="/services">
            <Nav.Link>Services</Nav.Link>
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
