import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import Header from "./Header";

const HeaderNavbar = () => {
  const history = useHistory();
  return (
    <>
      <Header />
      <Navbar bg="info" expand="lg" className="navbar-light sticky-top">
        <Container>
          <Link to="/">
            <Navbar.Brand className="fw-bold text-primary fs-3">
              PH<span className="text-danger">O</span>TIX
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="text-primary border-primary"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto fw-bold">
              <Nav.Link
                onClick={() => history.push("/")}
                className="text-primary ms-lg-5"
              >
                Home
              </Nav.Link>
              <Nav.Link
                onClick={() => history.push("/services")}
                className="text-primary ms-lg-5"
              >
                Services
              </Nav.Link>
              <Nav.Link
                onClick={() => history.push("/about")}
                className="text-primary ms-lg-5"
              >
                About
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default HeaderNavbar;
