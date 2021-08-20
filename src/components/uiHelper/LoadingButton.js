import React from "react";
import { Spinner } from "react-bootstrap";

const LoadingButton = () => {
  return (
    <>
      <Spinner
        as="span"
        animation="grow"
        size="sm"
        role="status"
        aria-hidden="true"
        className="me-2"
      />
      <span>Loading...</span>
    </>
  );
};

export default LoadingButton;
