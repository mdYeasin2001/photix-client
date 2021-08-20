import React from "react";
import { Col, Row } from "react-bootstrap";
import Skeleton from "react-loading-skeleton";

const ServiceDetailsLoader = () => {
  return (
    <Row className="d-flex justify-content-center align-items-start">
      <Col md={5}>
        <Skeleton height={300} />
      </Col>
      <Col md={7}>
        <div>
          <Skeleton height={20} width={400} />
        </div>
        <div className="mb-3">
          <Skeleton height={20} width={100} />
        </div>
        <div className="mb-3">
          <Skeleton height={20} width={80} />
        </div>
        <div>
          <Skeleton count={4} />
          <Skeleton width={250} />
        </div>
        <div className="mt-4">
          <Skeleton width={100} height={40} />
        </div>
      </Col>
    </Row>
  );
};

export default ServiceDetailsLoader;
