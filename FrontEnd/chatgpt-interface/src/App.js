import React, { useState } from 'react';
import ChatBox from './ChatBox';
import InputBox from './InputBox';

// The main App component that holds the state and renders the application.
function App() {
  // The messages state holds an array of chat messages.
  // Each message is an object with 'user' and 'text' properties.
  const [messages, setMessages] = useState([]);

  // handleSendMessage is a function to update the messages state.
  // It adds a new message object to the messages array.
  const handleSendMessage = (message) => {
    setMessages([...messages, { user: 'You', text: message }]);
  };

  // Render the application.
  // The ChatBox component displays the chat messages.
  // The InputBox component provides the user input functionality.
  return (
    <div className="App">
      <ChatBox messages={messages} />
      <InputBox onSendMessage={handleSendMessage} />
    </div>
  );
}

export default App;
