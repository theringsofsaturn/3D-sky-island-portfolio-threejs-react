import React from "react";
import carIcon from "../../../../public/car.svg";
import arrowIcon from "../../../../public/arrow_next.svg";
import "./ThesisCard.css";

const ThesisCard = () => {
  return (
    <div className="wrapper">
      <div className="upper">
        <div className="image-placeholder">
          <img src={carIcon} alt="Car icon" />
        </div>
        <div className="title-description">
          <div className="title">Master Final Year</div>
          <div className="description">
            A comprehensive car project by using different APIs in the market
          </div>
        </div>
      </div>
      <div className="show-projects">
        <button>Final Year Thesis</button>
        <img src={arrowIcon} alt="Arrow icon" />
      </div>
    </div>
  );
};

export default ThesisCard;
