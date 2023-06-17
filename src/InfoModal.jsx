import React from 'react';

const InfoModal = ({ isOpen, close, mesh }) => {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <button onClick={close}>X</button>
        <h2>{mesh.name}</h2>
        <p>{mesh.description}</p>
        {/* Include any other relevant information about the mesh */}
      </div>
    </div>
  );
};

export default InfoModal;
