import React from 'react';

function Modal({ content }) {
  return (
    <div className="modal"> 
      <div className="modal-content">{content}</div>
    </div>
  );
}

export default Modal;
