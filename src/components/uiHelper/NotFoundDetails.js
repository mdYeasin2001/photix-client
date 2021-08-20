import React from "react";
import { Col } from "react-bootstrap";

const NotFoundDetails = ({ data }) => {
  return (
    <Col
      style={{ height: "50vh" }}
      className="d-flex justify-content-center align-items-center text-center"
    >
      <h6 className="text-danger display-6 fw-bold fs-5">{data}</h6>
    </Col>
  );
};

export default NotFoundDetails;
