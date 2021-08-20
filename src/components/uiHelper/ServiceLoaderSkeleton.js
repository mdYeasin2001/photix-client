import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import Skeleton from "react-loading-skeleton";

const ServiceLoaderSkeleton = () => {
  return (
    <Row className="g-4">
      {Array(6)
        .fill()
        .map((_, i) => (
          <Col md={4} key={i}>
            <Card className="border-0">
              <Skeleton height={350} />
              <Skeleton height={20} />
            </Card>
          </Col>
        ))}
    </Row>
  );
};

export default ServiceLoaderSkeleton;
