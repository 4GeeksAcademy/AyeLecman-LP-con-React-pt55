import PropTypes from "prop-types";

const Card = ({ title, text, img }) => {
  return (
    <div className="card text-center h-100">
      <img src={img} className="card-img-top"/>
      <div className="card-body">
        <h5 className="card-title fw-bold">{title}</h5>
        <p className="card-text">{text}</p>
      </div>
      <div className="card-footer p-3">
        <a href="#" className="btn btn-primary">Find Out More!</a>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  img: PropTypes.string,
};

export default Card;