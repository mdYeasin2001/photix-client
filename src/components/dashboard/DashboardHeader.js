import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { CHECK_ACCESS_API } from "../../services/apiUrl";
import Header from "../common/Header";

const DashboardHeader = () => {
  const history = useHistory();
  const [haveAccess, setHaveAccess] = useState(false);
  const email = sessionStorage.getItem("email");
  useEffect(() => {
    axios.post(CHECK_ACCESS_API, { email: email }).then((res) => {
      setHaveAccess(res.data);
    });
  }, [email]);
  return (
    <>
      <Header />
      <Navbar bg="info" expand="lg" className="navbar-light sticky-top">
        <Container>
          <Link to="/">
            <Navbar.Brand className="fw-bold text-primary">
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
                onClick={() => history.push("/dashboard/my-orders")}
                className="text-primary ms-4"
              >
                My Orders
              </Nav.Link>
              {haveAccess && (
                <>
                  <Nav.Link
                    onClick={() => history.push("/dashboard/manage-orders")}
                    className="text-primary ms-4"
                  >
                    Manage Orders
                  </Nav.Link>

                  <Nav.Link
                    onClick={() => history.push("/dashboard/manage-services")}
                    className="text-primary ms-4"
                  >
                    Manage Services
                  </Nav.Link>

                  <Nav.Link
                    onClick={() => history.push("/dashboard/add-service")}
                    className="text-primary ms-4"
                  >
                    Add Service
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default DashboardHeader;
