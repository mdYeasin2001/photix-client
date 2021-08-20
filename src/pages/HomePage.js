import React from "react";
import AboutUs from "../components/about/AboutUs";
import HeaderNavbar from "../components/common/HeaderNavbar";
import Banner from "../components/home/Banner";
import Services from "../components/services/Services";
import WhatWeProvide from "../components/services/WhatWeProvide";

const HomePage = () => {
  return (
    <>
      <HeaderNavbar />
      <Banner />
      <AboutUs />
      <WhatWeProvide />
      <Services />
    </>
  );
};

export default HomePage;
