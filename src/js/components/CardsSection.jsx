import React from "react";
import Card from "./Card"; // o "../components/Card" según la ruta
import cardsData from "../data/cardsData";

const CardsSection = () => {
  return (
    <div className="container py-4">
      <div className="row">
        {cardsData.map((card, i) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={i}>
            <Card title={card.title} text={card.text} img={card.img} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardsSection;