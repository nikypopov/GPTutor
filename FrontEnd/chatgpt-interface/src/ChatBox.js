import React from 'react';

// The ChatBox component is responsible for displaying chat messages.
function ChatBox({ messages }) {
  // It receives the messages as a prop from the App component.
  
  // Render the chat messages.
  // For each message in the messages array, display a div with the user's name and the message text.
  return (
    <div className="chat-box">
      {messages.map((message, index) => (
        <div key={index} className="message">
          <strong>{message.user}:</strong> {message.text}
        </div>
      ))}
    </div>
  );
}

export default ChatBox;
