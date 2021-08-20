import React from "react";
import { Container } from "react-bootstrap";

const AboutPageHeader = () => {
  return (
    <section className="bg-info py-5">
      <Container>
        <h2 className="text-primary display-5 fw-bold mb-5">About Us</h2>
        <p className="text-secondary">
          Lorem, ipsum dolor sit consectetur adipisicing elit. Odio beatae,
          blanditiis <br className="d-none d-md-block" /> optio neque inventore
          sequi doloremque. Animi.
        </p>
      </Container>
    </section>
  );
};

export default AboutPageHeader;
