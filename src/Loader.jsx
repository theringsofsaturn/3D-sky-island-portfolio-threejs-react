import { Html } from '@react-three/drei';

import React from 'react';
import styled from 'styled-components';
import './Loader.css';

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const LoaderCircle = styled.div`
  border: 10px solid rgba(92, 177, 239, 0.2); /* Light blue, similar to the lights */
  border-top: 10px solid rgb(92, 177, 239); /* Light blue, similar to the lights */
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 1s linear infinite;
`;

const Loader = () => {
  return (
    <Html>
      <LoaderContainer>
        <LoaderCircle />
      </LoaderContainer>
    </Html>
  );
};

export default Loader;
