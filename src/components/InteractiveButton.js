import React from 'react';
import './InteractiveButton.css';

const InteractiveButton = ({ label, onClick }) => {
  return (
    <button className="interactive-button" onClick={onClick}>
      {label}
    </button>
  );
};

export default InteractiveButton;