import React from "react";
import Head from "./Head";
import CardsSection from "./CardsSection";

const Container = () => {
  return (
    <div className="container my-5">
      <Head/>
      <CardsSection/>
    </div>
  );
};

export default Container;