import React from 'react';
// import { render, screen, fireEvent } from '@testing-library/react';
// import '@testing-library/jest-dom';
// import InputBox from '../InputBox';


// // Unit test for the InputBox component.
// test('sends message when form is submitted', () => {
//   // Define a mock function to simulate the onSendMessage function.
//   const mockSendMessage = jest.fn();
  
//   // Render the InputBox component with the mock function as a prop.
//   render(<InputBox onSendMessage={mockSendMessage} />);
  
//   // Get the input box and button elements.
//   const input = screen.getByRole('textbox');
//   const button = screen.getByRole('button', { name: /send/i });
  
//   // Simulate typing a message and submitting the form.
//   fireEvent.change(input, { target: { value: 'Hello, OpenAI!' } });
//   fireEvent.click(button);

//   // Expect the mock function to have been called with the message as an argument.
//   expect(mockSendMessage).toHaveBeenCalledWith('Hello, OpenAI!');
// });

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import InputBox from '../InputBox';

test('sends a message with InputBox', () => {
  const mockSendMessage = jest.fn();
  render(<InputBox onSendMessage={mockSendMessage} />);
  
  const inputBox = screen.getByPlaceholderText('Type your message');
  const sendButton = screen.getByText('Send');

  userEvent.type(inputBox, 'Hello, ChatGPT!');
  userEvent.click(sendButton);

  expect(mockSendMessage).toHaveBeenCalledWith('Hello, ChatGPT!');
});
