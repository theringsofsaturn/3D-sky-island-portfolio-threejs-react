import React from 'react';
import './SocialCard.css';

const SocialCard = ({ platform, link, Icon }) => {
  return (
    <div className="social-card">
      <Icon size={32} style={{ marginRight: '10px' }} />
      <a href={link} target="_blank" rel="noreferrer">
        {platform}
      </a>
    </div>
  );
};

export default SocialCard;
