import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import camera from "../../assets/images/camera_1.jpg";

const AboutUs = () => {
  return (
    <section className="d-flex align-items-center">
      <Container>
        <Row className="d-flex align-items-center py-5 g-4">
          <Col md={5}>
            <img className="img-fluid" src={camera} alt="camera" />
          </Col>
          <Col md={6} className="offset-md-1">
            <h2 className="display-6 text-uppercase fw-bold text-primary">
              Let's <br className="d-none d-md-block" /> Introduce PH
              <span className="text-danger">O</span>TIX
            </h2>
            <p className="text-secondary">
              Up my excuse to suffer ladies though or. Bachelor possible out
              marianne directly confined relation as on he.
            </p>
            <p className="text-secondary">
              Lose john poor same it case do year we. Full how way even the si
              extremely nor furniture fat questions now provision one incommod
              preserved. Dose john poor same it case do year go we. Full how way
              even the sigh. Extremely nor furniture fat one questions now
              provision then doing for.
            </p>
            <button className="btn btn-danger text-white">EXPLORE MORE</button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;
