import React from 'react';
import ModalContent from './ModalContent';
import { motion } from 'framer-motion';
import './FullScreenOverlay.css';

const FullScreenOverlay = ({ isOpen, onClose, mesh }) => {
  if (!isOpen) return null;

  return (
    <div className="overlay">
      <div className="overlay-content">
        <button onClick={onClose} className="exit-button">
          X
        </button>
        <ModalContent mesh={mesh} />

        {/* Place for carousel, videos, and other interactive elements */}
      </div>
    </div>
  );
};

export default FullScreenOverlay;
