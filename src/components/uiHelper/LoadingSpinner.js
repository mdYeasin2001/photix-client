import React from "react";
import { Spinner } from "react-bootstrap";

const LoadingSpinner = () => {
  return (
    <div
      style={{ height: "50vh" }}
      className="d-flex justify-content-center align-items-center"
    >
      <Spinner variant="danger" animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
};

export default LoadingSpinner;
