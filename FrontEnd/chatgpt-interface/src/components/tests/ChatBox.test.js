import React from 'react';
// import { render, screen } from '@testing-library/react';
// import ChatBox from '../ChatBox';

// test('renders chat messages', () => {
//   const messages = [
//     { user: 'You', text: 'Hello, OpenAI!' },
//     { user: 'OpenAI', text: 'Hello, how can I assist you today?' }
//   ];

//   const { container } = render(<ChatBox messages={messages} />);

//   // Find the message elements
//   const messageElements = container.getElementsByClassName('message');
  
//   // Check if the messages are displayed
//   expect(messageElements[0]).toHaveTextContent('You: Hello, OpenAI!');
//   expect(messageElements[1]).toHaveTextContent('OpenAI: Hello, how can I assist you today?');
// });

import { render, screen } from '@testing-library/react';
import ChatBox from '../ChatBox';

test('renders messages in ChatBox', () => {
  const messages = [
    { user: 'You', text: 'Hello' },
    { user: 'ChatGPT', text: 'Hi there!' },
  ];
  render(<ChatBox messages={messages} />);
  
  const messageList = screen.getByRole('list');
  expect(messageList.children).toHaveLength(2);
  expect(messageList).toHaveTextContent('You: Hello');
  expect(messageList).toHaveTextContent('ChatGPT: Hi there!');
});
