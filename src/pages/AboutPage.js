import React from "react";
import AboutPageHeader from "../components/about/AboutPageHeader";
import AboutUs from "../components/about/AboutUs";
import HeaderNavbar from "../components/common/HeaderNavbar";

const AboutPage = () => {
  return (
    <>
      <HeaderNavbar />
      <AboutPageHeader />
      <AboutUs />
    </>
  );
};

export default AboutPage;
