import React, { useState } from 'react';

// The InputBox component provides an input box for user to type and send messages.
function InputBox({ onSendMessage }) {
  // The message state holds the current value of the input box.
  const [message, setMessage] = useState('');

  // handleSubmit is called when the form is submitted.
  const handleSubmit = (e) => {
    // Prevent the default form submission behavior.
    e.preventDefault();
    // If the message is not empty, call the onSendMessage function and clear the input box.
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };

  // Render the input box and submit button.
  return (
    <form className="input-box" onSubmit={handleSubmit}>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit">Send</button>
    </form>
  );
}

export default InputBox;
