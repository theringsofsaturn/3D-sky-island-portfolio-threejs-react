import React from 'react';
import ModalContent from './ModalContent';
import { animated, useSpring } from 'react-spring';
import styled from 'styled-components';
import './FullSCreenOverlay.css';

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

const ModalWrapper = styled.div`
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 30px;
  right: 30px;
  background: rgb(92, 177, 239); /* light blue, similar to the lights */
  color: #e21c1c;
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
`;

const FullScreenOverlay = ({ isOpen, onClose, mesh }) => {
  const animation = useSpring({
    opacity: isOpen ? 1 : 0,
    transform: isOpen ? 'translateY(0%)' : 'translateY(-100%)',
  });

  if (!isOpen) return null;

  return (
    <Overlay style={animation}>
      <ModalWrapper>
        <CloseButton onClick={onClose}>X</CloseButton>
        <div className="overlay-content">
          <ModalContent mesh={mesh} />
          {/* Place for carousel, videos, and other interactive elements */}
        </div>
      </ModalWrapper>
    </Overlay>
  );
};

export default FullScreenOverlay;
