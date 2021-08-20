import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import { SERVICES_LIST_API } from "../../services/apiUrl";
import ServiceDetailsLoader from "../uiHelper/ServiceDetailsLoader";

const Service = () => {
  const { id } = useParams();
  const [serviceDetails, setServiceDetails] = useState([]);
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
          {serviceDetails.length > 0 && (
            <Row className="d-flex justify-content-center align-items-start">
              <Col md={5}>
                <img
                  className="img-fluid"
                  src={`data:${serviceDetails[0].image.contentType};base64,${serviceDetails[0].image.img}`}
                  alt={serviceDetails[0].title}
                />
              </Col>
              <Col md={7}>
                <h5 className="text-primary fw-normal">
                  {serviceDetails[0].title}
                </h5>
                <h6 className="text-primary display-6">
                  $ {serviceDetails[0].price}
                </h6>
                <span className="text-secondary border-bottom border-danger border-5 mb-3 d-inline-block">
                  Description:
                </span>
                <p className="text-secondary lead">
                  {serviceDetails[0].description}
                </p>
                <button
                  onClick={() =>
                    history.push(`/checkout/service/${serviceDetails[0]._id}`)
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
