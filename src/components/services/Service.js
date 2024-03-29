import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import { SERVICES_LIST_API } from "../../services/apiUrl";
import ServiceDetailsLoader from "../uiHelper/ServiceDetailsLoader";

const Service = () => {
  const { id } = useParams();
  const [serviceDetails, setServiceDetails] = useState({});
  const history = useHistory();
  const [contentLoading, setContentLoading] = useState(true);

  useEffect(() => {
    axios.get(`${SERVICES_LIST_API}/${id}`).then((res) => {
      setServiceDetails(res.data);
      setContentLoading(false);
    });
  }, [id]);
  return (
    <Container className="py-5">
      {contentLoading ? (
        <ServiceDetailsLoader />
      ) : (
        <>
          {Object.keys(serviceDetails).length > 0 && (
            <Row className="d-flex justify-content-center align-items-start g-4">
              <Col md={5}>
                <img
                  className="img-fluid"
                  src={serviceDetails.image}
                  alt={serviceDetails.title}
                />
              </Col>
              <Col md={7}>
                <h5 className="text-primary fw-normal">
                  {serviceDetails.title}
                </h5>
                <h6 className="text-primary display-6">
                  $ {serviceDetails.price}
                </h6>
                <span className="text-secondary border-bottom border-danger border-5 mb-3 d-inline-block">
                  Description:
                </span>
                <p className="text-secondary lead">
                  {serviceDetails.description}
                </p>
                <button
                  onClick={() =>
                    history.push(`/checkout/service/${serviceDetails._id}`)
                  }
                  className="btn btn-danger text-white"
                >
                  BUY NOW
                </button>
              </Col>
            </Row>
          )}
        </>
      )}
    </Container>
  );
};

export default Service;
