import React from 'react';
import ModalContent from './ModalContent';
import { animated, useSpring } from 'react-spring';
import styled from 'styled-components';
import "./FullSCreenOverlay.css"

const Overlay = styled(animated.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FullScreenOverlay = ({ isOpen, onClose, mesh }) => {
  const animation = useSpring({
    opacity: isOpen ? 1 : 0,
    transform: isOpen ? 'translateY(0%)' : 'translateY(-100%)',
  });

  if (!isOpen) return null;

  return (
    <Overlay style={animation}>
      <div className="overlay-content">
        <button onClick={onClose} className="exit-button">
          X
        </button>
        <ModalContent mesh={mesh} />

        {/* Place for carousel, videos, and other interactive elements */}
      </div>
    </Overlay>
  );
};

export default FullScreenOverlay;
