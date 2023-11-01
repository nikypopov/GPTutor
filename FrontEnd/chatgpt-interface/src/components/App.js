// import React, { useState } from 'react';
// import ChatBox from './ChatBox';
// import InputBox from './InputBox';

// // The main App component that holds the state and renders the application.
// function App() {
//   // The messages state holds an array of chat messages.
//   // Each message is an object with 'user' and 'text' properties.
//   const [messages, setMessages] = useState([]);

//   // handleSendMessage is a function to update the messages state.
//   // It adds a new message object to the messages array.
//   const handleSendMessage = (message) => {
//     setMessages([...messages, { user: 'You', text: message }]);
//   };

//   // Render the application.
//   // The ChatBox component displays the chat messages.
//   // The InputBox component provides the user input functionality.
//   return (
//     <div className="App">
//       <ChatBox messages={messages} />
//       <InputBox onSendMessage={handleSendMessage} />
//     </div>
//   );
// }

//export default App;

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ChatBox from './ChatBox';
import InputBox from './InputBox';
import './App.css'; // Ensure you have a CSS file for styling

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can log the error to an error reporting service here
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI here
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};

function App() {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (message) => {
    setMessages([...messages, { user: 'You', text: message }]);
  };

  return (
    <div className="App" role="main">
      <ErrorBoundary>
        <ChatBox messages={messages} />
        <InputBox onSendMessage={handleSendMessage} />
      </ErrorBoundary>
    </div>
  );
}

export default App;

