import React from 'react';
// import { render, screen, waitFor } from '@testing-library/react';
// import App from '../App';
// import 'mutationobserver-shim';

// // test('renders chat messages and sends a new message', () => {
// //   const { container } = render(<App />)

// //   // Find the message elements
// //   const messageElements = container.getElementsByClassName('message');
  
// //   // Check if the initial message is displayed
// //   expect(messageElements[0]).toHaveTextContent('You: Hello, OpenAI!');
  
// //   // Add steps here for typing a new message and sending it
// //   userEvent.type(screen.getByRole('textbox'), 'This is a test message');
// //   userEvent.click(screen.getByRole('button', { name: /send/i }));

// //   // Check if the new message is displayed
// //   const newMessage = screen.getByText('You: This is a test message');
// //   expect(newMessage).toBeInTheDocument();

// // });

// test('renders chat messages and sends a new message', async () => {
//   const { container } = render(<App />);
  
//   // Wait for the initial message to be displayed
//   await waitFor(() => {
//     expect(screen.getByText('You: Hello, OpenAI!')).toBeInTheDocument();
//   });

//   // Check if the initial message is displayed
//   const messageElements = container.getElementsByClassName('message');
//   expect(messageElements[0]).toHaveTextContent('You: Hello, OpenAI!');
  
//   // Add steps here for typing a new message and sending it
//   userEvent.type(screen.getByRole('textbox'), 'This is a test message');
//   userEvent.click(screen.getByRole('button', { name: /send/i }));
  
//   // Wait for the new message to be displayed
//   await waitFor(() => {
//     expect(screen.getByText('You: This is a test message')).toBeInTheDocument();
//   });
// });


import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

test('renders App and interacts with ChatBox and InputBox', () => {
  render(<App />);
  const inputBox = screen.getByPlaceholderText('Type your message');
  const sendButton = screen.getByText('Send');

  // Initial render should not have any messages
  expect(screen.queryByRole('list')).toBeNull();

  // Send a message
  userEvent.type(inputBox, 'Hello, ChatGPT!');
  userEvent.click(sendButton);

  // Message should be displayed in the ChatBox
  const messages = screen.getByRole('list');
  expect(messages).toHaveTextContent('You: Hello, ChatGPT!');
});
