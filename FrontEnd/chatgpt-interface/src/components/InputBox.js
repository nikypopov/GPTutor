// import React, { useState } from 'react';

// // The InputBox component provides an input box for user to type and send messages.
// function InputBox({ onSendMessage }) {
//   // The message state holds the current value of the input box.
//   const [message, setMessage] = useState('');

//   // handleSubmit is called when the form is submitted.
//   const handleSubmit = (e) => {
//     // Prevent the default form submission behavior.
//     e.preventDefault();
//     // If the message is not empty, call the onSendMessage function and clear the input box.
//     if (message.trim()) {
//       onSendMessage(message);
//       setMessage('');
//     }
//   };

//   // Render the input box and submit button.
//   return (
//     <form className="input-box" onSubmit={handleSubmit}>
//       <input
//         type="text"
//         value={message}
//         onChange={(e) => setMessage(e.target.value)}
//       />
//       <button type="submit">Send</button>
//     </form>
//   );
// }

// export default InputBox;

import React, { useState } from 'react';
import PropTypes from 'prop-types';
//import './InputBox.css'; // Ensure you have a CSS file for styling

function InputBox({ onSendMessage }) {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <form className="input-box" onSubmit={handleSubmit}>
      <label htmlFor="message-input" className="sr-only">Type your message</label>
      <input
        type="text"
        id="message-input"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message"
      />
      <button type="submit">Send</button>
    </form>
  );
}

InputBox.propTypes = {
  onSendMessage: PropTypes.func.isRequired,
};

export default InputBox;
