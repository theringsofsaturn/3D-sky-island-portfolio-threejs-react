import React from "react";
import playStoreIcon from "../../../../public/play_store.png";
import arrowIcon from "../../../../public/arrow_next.svg";
import "./AppsCard.css";

const AppsCard = () => {
  return (
    <div className="apps-card-wrapper">
      <div className="apps-card-upper">
        <div className="apps-card-image-placeholder">
          <img src={playStoreIcon} alt="Car icon" />
        </div>
        <div className="apps-card-title-description">
          <div className="apps-card-title">Google Play Apps</div>
          <div className="apps-card-description">
            You can find some of my games published on Google Play Store.
          </div>
        </div>
      </div>
      <div className="apps-card-show-projects">
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
