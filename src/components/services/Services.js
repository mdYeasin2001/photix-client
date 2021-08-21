import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { SERVICES_LIST_API } from "../../services/apiUrl";
import NotFoundDetails from "../uiHelper/NotFoundDetails";
import ServiceLoaderSkeleton from "../uiHelper/ServiceLoaderSkeleton";

const Services = () => {
  const history = useHistory();
  const [services, setServices] = useState([]);
  const [contentLoading, setContentLoading] = useState(true);

  useEffect(() => {
    axios.get(SERVICES_LIST_API).then((res) => {
      setServices(res.data);
      setContentLoading(false);
    });
  }, []);

  // console.log("service", services);
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
        {!contentLoading ? (
          <Row className="g-4 mt-4">
            {services.length > 0 ? (
              services.map((service) => (
                <Col md={6} lg={4} key={service._id}>
                  <Card>
                    <Card.Img
                      className="service-image img-fluid w-100"
                      variant="top"
                      src={service.image}
                    />
                    <Card.Body>
                      <h4 className="text-primary">{service.title}</h4>
                      <p className="text-secondary">
                        {service.description.slice(0, 40) + "..."}
                      </p>
                      <div className="d-flex justify-content-between">
                        <button
                          onClick={() =>
                            history.push(`/services/${service._id}`)
                          }
                          className="btn btn-outline-danger text-dark"
                        >
                          View Details
                        </button>
                        <button
                          onClick={() =>
                            history.push(`/checkout/service/${service._id}`)
                          }
                          className="btn btn-danger text-white"
                        >
                          BUY ${service.price}
                        </button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            ) : (
              <NotFoundDetails data="No service available now!" />
            )}
          </Row>
        ) : (
          <ServiceLoaderSkeleton />
        )}
      </Container>
    </section>
  );
};

export default Services;
