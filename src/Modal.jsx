import React from 'react';
import './Modal.css';

function Modal({ content, onClose }) {
  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {content}
      </div>
    </div>
  );
}

export default Modal;
