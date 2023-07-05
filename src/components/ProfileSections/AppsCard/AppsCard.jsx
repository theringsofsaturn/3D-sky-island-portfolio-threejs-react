import React from "react";
import playStoreIcon from "../../../../public/play_store.png";
import arrowIcon from "../../../../public/arrow_next.svg";
import "./AppsCard.css";

const AppsCard = () => {
  return (
    <div className="wrapper">
      <div className="upper">
        <div className="image-placeholder">
          <img src={playStoreIcon} alt="Car icon" />
        </div>
        <div className="title-description">
          <div className="title">Google Play Apps</div>
          <div className="description">
            You can find some of my games published on Google Play Store.
          </div>
        </div>
      </div>
      <div className="show-projects">
        <a
          href="https://play.google.com/store/apps/dev?id=6201646843189478498"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>Google Play Store Games</button>
        </a>
        <img src={arrowIcon} alt="Arrow icon" />
      </div>
    </div>
  );
};

export default AppsCard;
