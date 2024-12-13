import React from 'react';
import './CSS/ChatMessage.css';

const ChatMessage = ({ message }) => {
  const lines = message.text.split('\n');

  return (
    <div id='chatmessages'>
      {lines.map((line, index) => (
        <p key={index}>{line}</p>
      ))}
    </div>
  );
};


export default ChatMessage;
