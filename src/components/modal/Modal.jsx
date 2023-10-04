import React from 'react';
import ReactDOM from 'react-dom';

function Modal({ children }) {
  return ReactDOM.createPortal(
    <div className="absolute top-0 right-0  w-full h-full ">
      {children}
    </div>,
    document.getElementById('modal-root') // Create a new div in your HTML for the portal
  );
}

export default Modal;
