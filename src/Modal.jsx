import React from 'react';
import './Modal.css';

function Modal({ content }) {
  return (
    <div className="modal"> 
      <div className="modal-content">{content}</div>
    </div>
  );
}

export default Modal;
