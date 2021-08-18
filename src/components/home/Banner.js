import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import cameraLens from "../../assets/images/lens.jpg";

const Banner = () => {
  return (
    <section className="bg-info banner__container d-flex align-items-center">
      <Container>
        <Row className="d-flex align-items-center py-5">
          <Col md={5} className="offset-md-1">
            <h1 className="display-1 fw-bold text-primary">
              IM<span className="text-danger">A</span>GES <br /> MAT
              <span className="text-danger">T</span>ER
            </h1>
            <p className="text-secondary">
              Manner before lively wholly am mr indeed expect
              <br className="d-md-block d-none" /> one every merry his yet has
              her. You mistress get <br className="d-md-block d-none" />
              dashwood children off manner to other
            </p>
            <button className="btn btn-danger text-white">EXPLORE MORE</button>
          </Col>
          <Col md={5}>
            <img className="img-fluid" src={cameraLens} alt="camera" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
