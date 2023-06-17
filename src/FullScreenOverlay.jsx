import React from 'react';
import ModalContent from './ModalContent';
import './FullScreenOverlay.css';

const FullScreenOverlay = ({ isOpen, onClose, mesh, modalContent }) => {
  if (!isOpen) return null;

  return (
    <div className="overlay">
      <div className="overlay-content">
        <button onClick={onClose} className="exit-button">
          X
        </button>
        <ModalContent mesh={mesh} />
        {/* Place for carousel, videos, and other interactive elements */}
        {modalContent}
      </div>
    </div>
  );
};

export default FullScreenOverlay;
