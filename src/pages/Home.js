import React from "react";
import AboutUs from "../components/about/AboutUs";
import Banner from "../components/home/Banner";
import Services from "../components/services/Services";
import WhatWeProvide from "../components/services/WhatWeProvide";

const Home = () => {
  return (
    <>
      <Banner />
      <AboutUs />
      <WhatWeProvide />
      <Services />
    </>
  );
};

export default Home;
