import React from "react";
import { Col, Container, Nav, Row } from "react-bootstrap";
import { AiFillPhone } from "react-icons/ai";
import { BiLockAlt, BiUserCircle } from "react-icons/bi";
import { FaSignOutAlt } from "react-icons/fa";
import { RiDashboardLine } from "react-icons/ri";
import { useHistory } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const Header = () => {
  const history = useHistory();
  const user = JSON.parse(sessionStorage.getItem("user"));
  const signOut = () => {

    sessionStorage.removeItem("user");
    toast.success("You have signed out.");
    setTimeout(() => history.push("/"), 2000);
  };
  return (
    <>
      <div>
        <ToastContainer />
      </div>
      <div className="bg-info text-primary border-bottom pt-3">
        <Container>
          <Row>
            <Col md={6}>
              <div className="d-flex justify-content-between align-items-center">
                <p className="fw-bold">Welcome to PHOTIX.</p>
                <p className="badge bg-danger rounded-pill text-white fs-6">
                  <AiFillPhone /> +123 (456) 7879
                </p>
              </div>
            </Col>
            <Col md={6}>
              <div className="d-flex justify-content-end gap-3 fw-bold">
                {user?.email ? (
                  <>
                    <Nav.Link
                      onClick={() => history.push("/dashboard/my-orders")}
                    >
                      <RiDashboardLine className="fs-4" />
                      dashboard
                    </Nav.Link>
                    <Nav.Link onClick={() => signOut()}>
                      <FaSignOutAlt className="fs-4" />
                      sign out
                    </Nav.Link>
                  </>
                ) : (
                  <>
                    <Nav.Link onClick={() => history.push("/login")}>
                      <BiLockAlt className="fs-4" />
                      sign in
                    </Nav.Link>
                    <Nav.Link onClick={() => history.push("/register")}>
                      <BiUserCircle className="fs-4" />
                      sign up
                    </Nav.Link>
                  </>
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Header;
