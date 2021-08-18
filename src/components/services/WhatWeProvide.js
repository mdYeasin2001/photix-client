import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { BsCaretRight, BsFiles } from "react-icons/bs";
import { GiBigDiamondRing } from "react-icons/gi";
import { IoImagesOutline, IoWaterOutline } from "react-icons/io5";
import { RiTShirtLine } from "react-icons/ri";

const WhatWeProvide = () => {
  return (
    <section className="bg-info py-5">
      <Container>
        <Row className="text-center">
          <h2 className="display-6 fw-bold text-primary">How we can help</h2>
          <p className="text-secondary">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            hic illo in iste aperiam? Ipsam <br className="d-none d-md-block" />
            inventore voluptatem dolor blanditiis vero possimus assumenda.
          </p>
        </Row>
        <Row className="g-4 mt-4">
          <Col md={4}>
            <Card className="border-0 rounded p-3 py-4 ps-4">
              <div className="d-flex align-items-center mb-3">
                <RiTShirtLine className="me-3 fs-2 text-danger" />
                <h4 className="text-primary">Fashion Photography</h4>
              </div>
              <p className="text-secondary">
                An so vulgar to on points wanted. No rapturous resolving
                continued household northward gay he it otherwise
              </p>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="border-0 rounded p-3 py-4 ps-4">
              <div className="d-flex align-items-center mb-3">
                <IoWaterOutline className="me-3 fs-1 text-danger" />
                <h4 className="text-primary">Nature Photography</h4>
              </div>
              <p className="text-secondary">
                An so vulgar to on points wanted. No rapturous resolving
                continued household northward gay he it otherwise
              </p>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="border-0 rounded p-3 py-4 ps-4">
              <div className="d-flex align-items-center mb-3">
                <BsFiles className="me-3 fs-2 text-danger" />
                <h4 className="text-primary">Event Coverage</h4>
              </div>
              <p className="text-secondary">
                An so vulgar to on points wanted. No rapturous resolving
                continued household northward gay he it otherwise
              </p>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="border-0 rounded p-3 py-4 ps-4">
              <div className="d-flex align-items-center mb-3">
                <IoImagesOutline className="me-3 fs-2 text-danger" />
                <h4 className="text-primary">Property Tours</h4>
              </div>
              <p className="text-secondary">
                An so vulgar to on points wanted. No rapturous resolving
                continued household northward gay he it otherwise
              </p>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="border-0 rounded p-3 py-4 ps-4">
              <div className="d-flex align-items-center mb-3">
                <BsCaretRight className="me-3 fs-1 text-danger" />
                <h4 className="text-primary">Multimedia Services</h4>
              </div>
              <p className="text-secondary">
                An so vulgar to on points wanted. No rapturous resolving
                continued household northward gay he it otherwise
              </p>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="border-0 rounded p-3 py-4 ps-4">
              <div className="d-flex align-items-center mb-3">
                <GiBigDiamondRing className="me-3 fs-2 text-danger" />
                <h4 className="text-primary">Wedding Photography</h4>
              </div>
              <p className="text-secondary">
                An so vulgar to on points wanted. No rapturous resolving
                continued household northward gay he it otherwise
              </p>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WhatWeProvide;
