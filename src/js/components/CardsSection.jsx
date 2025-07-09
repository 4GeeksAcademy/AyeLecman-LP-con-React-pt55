import React from "react";
import foto1 from "../../img/1.jpg";
import foto2 from "../../img/2.jpg";
import foto3 from "../../img/3.jpg";
import foto4 from "../../img/4.jpg";

const CardsSection = () => {
  const cardsData = [
    { title: "Card 1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ", img: foto1 },
    { title: "Card 2", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ", img: foto2 },
    { title: "Card 3", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ", img: foto3 },
    { title: "Card 4", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ", img: foto4 },
  ];

  return (
    <div className="container py-4">
      <div className="row">
        {cardsData.map((card, i) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={i}>
            <div className="card text-center">
              <img src={card.img} className="card-img-top"/>

              <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">{card.text}</p>
              </div>

              <div className="card-footer p-3">
                <a href="#" className="btn btn-primary">Find Out More!</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardsSection;

