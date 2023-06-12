import React from 'react';

function Loader({ loading }) {
  return loading ? (
    <div
      style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'white',
      }}
    >
      Loading...
    </div>
  ) : null;
}

export default Loader;
