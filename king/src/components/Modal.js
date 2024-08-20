import React from "react";

function Modal({ keyword, onClose }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          x
        </span>
        <h2>{keyword.name}</h2>
        <p>{keyword.description}</p>
      </div>
    </div>
  );
}

export default Modal;
