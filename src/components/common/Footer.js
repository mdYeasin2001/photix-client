import React from "react";
import {
  Button,
  Col,
  Container,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";
import {
  AiFillDribbbleSquare,
  AiFillFacebook,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from "react-icons/ai";
import { TiArrowRightThick } from "react-icons/ti";

const Footer = () => {
  return (
    <footer className="bg-info pt-5 pb-1">
      <Container>
        <Row>
          <Col md={5}>
            <h5 className="text-primary mb-4">About Us</h5>
            <p className="text-secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              consequatur quae ratione distinctio minus.
            </p>
          </Col>
          <Col md={5}>
            <h5 className="text-primary mb-4">Newsletter</h5>
            <p className="text-secondary">Stay update with our latest</p>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="E-mail address"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                className="border-danger"
              />
              <Button
                className="text-white"
                variant="danger"
                id="button-addon2"
              >
                <TiArrowRightThick />
              </Button>
            </InputGroup>
          </Col>
          <Col md={2}>
            <h5 className="text-primary mb-4">Follow Us</h5>
            <p className="text-secondary">Let's be social</p>
            <div>
              <AiFillFacebook className="fs-2 text-danger social-icon" />
              <AiFillTwitterSquare className="fs-2 text-danger social-icon" />
              <AiFillLinkedin className="fs-2 text-danger social-icon" />
              <AiFillDribbbleSquare className="fs-2 text-danger social-icon" />
            </div>
          </Col>
          <Col className="text-center mt-3">
            <p className="text-secondary">
              Copyright ©{new Date().getFullYear()} All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
