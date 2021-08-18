import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

const Services = () => {
  return (
    <section className="py-5 services__container">
      <Container>
        <Row className="text-center">
          <h2 className="display-6 fw-bold text-primary">
            Choose Your Services
          </h2>
          <p className="text-secondary">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            hic illo in iste aperiam? Ipsam <br className="d-none d-md-block" />
            inventore voluptatem dolor blanditiis vero possimus assumenda.
          </p>
        </Row>
        <Row className="g-4 mt-4">
          <Col md={4}>
            <Card>
              <Card.Img
                className="service-image"
                variant="top"
                src="https://images.pexels.com/photos/3649765/pexels-photo-3649765.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              />
              <Card.Body>
                <h4 className="text-primary">Fashion Photography</h4>
                <p className="text-secondary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                  ab ipsam culpa modi eaque cumque.
                </p>
                <div className="d-flex justify-content-between">
                  <button className="btn btn-outline-danger text-dark">
                    View Details
                  </button>
                  <button className="btn btn-danger text-white">
                    BUY $301
                  </button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img
                className="service-image"
                variant="top"
                src="https://images.pexels.com/photos/758898/pexels-photo-758898.png?auto=compress&cs=tinysrgb&dpr=1&w=500"
              />
              <Card.Body>
                <h4 className="text-primary">Fashion Photography</h4>
                <p className="text-secondary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                  ab ipsam culpa modi eaque cumque.
                </p>
                <div className="d-flex justify-content-between">
                  <button className="btn btn-outline-danger text-dark">
                    View Details
                  </button>
                  <button className="btn btn-danger text-white">
                    BUY $301
                  </button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img
                className="service-image"
                variant="top"
                src="https://images.pexels.com/photos/2613458/pexels-photo-2613458.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              />
              <Card.Body>
                <h4 className="text-primary">Fashion Photography</h4>
                <p className="text-secondary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                  ab ipsam culpa modi eaque cumque.
                </p>
                <div className="d-flex justify-content-between">
                  <button className="btn btn-outline-danger text-dark">
                    View Details
                  </button>
                  <button className="btn btn-danger text-white">
                    BUY $301
                  </button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img
                className="service-image"
                variant="top"
                src="https://images.pexels.com/photos/5729029/pexels-photo-5729029.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              />
              <Card.Body>
                <h4 className="text-primary">Fashion Photography</h4>
                <p className="text-secondary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                  ab ipsam culpa modi eaque cumque.
                </p>
                <div className="d-flex justify-content-between">
                  <button className="btn btn-outline-danger text-dark">
                    View Details
                  </button>
                  <button className="btn btn-danger text-white">
                    BUY $301
                  </button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img
                className="service-image"
                variant="top"
                src="https://images.pexels.com/photos/3014858/pexels-photo-3014858.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              />
              <Card.Body>
                <h4 className="text-primary">Fashion Photography</h4>
                <p className="text-secondary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                  ab ipsam culpa modi eaque cumque.
                </p>
                <div className="d-flex justify-content-between">
                  <button className="btn btn-outline-danger text-dark">
                    View Details
                  </button>
                  <button className="btn btn-danger text-white">
                    BUY $301
                  </button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img
                className="service-image"
                variant="top"
                src="https://images.pexels.com/photos/7784602/pexels-photo-7784602.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              />
              <Card.Body>
                <h4 className="text-primary">Wedding Photography</h4>
                <p className="text-secondary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                  ab ipsam culpa modi eaque cumque.
                </p>
                <div className="d-flex justify-content-between">
                  <button className="btn btn-outline-danger text-dark">
                    View Details
                  </button>
                  <button className="btn btn-danger text-white">
                    BUY $301
                  </button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;
