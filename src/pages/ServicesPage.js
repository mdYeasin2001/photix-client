import React from "react";
import HeaderNavbar from "../components/common/HeaderNavbar";
import ServicePageHeader from "../components/services/ServicePageHeader";
import Services from "../components/services/Services";

const ServicesPage = () => {
  return (
    <>
      <HeaderNavbar />
      <ServicePageHeader />
      <Services />
    </>
  );
};

export default ServicesPage;
