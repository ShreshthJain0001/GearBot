import React from 'react';
import './CSS/ChatOptions.css';

const ChatOptions = ({ onOptionClick }) => {
  return (
    <div>
      <button onClick={() => onOptionClick('mileage')}>Mileage</button>
      <button onClick={() => onOptionClick('engine')}>Engine</button>
      <button onClick={() => onOptionClick('tyres')}>Tyres</button>
      <button onClick={() => onOptionClick('battery')}>Battery</button>
      <button onClick={() => onOptionClick('paint')}>Paint</button>
      <button onClick={() => onOptionClick('important documents')}>Important Documents</button>
    </div>
  );
};

export default ChatOptions;
