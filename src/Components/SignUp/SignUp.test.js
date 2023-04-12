import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SignUp from './SignUp';

test('renders sign up form', () => {
  const { getByLabelText, getByText } = render(<SignUp />);
  const usernameInput = getByLabelText(/username/i);
  const passwordInput = getByLabelText(/password/i);
  const emailInput = getByLabelText(/email/i);
  const submitButton = getByText(/sign up/i);
  expect(usernameInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
  expect(emailInput).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
});

test('submits sign up form with correct data', () => {
  const mockHandleSignUp = jest.fn();
  const { getByLabelText, getByText } = render(<SignUp handleSignUp={mockHandleSignUp} />);
  const usernameInput = getByLabelText(/username/i);
  const passwordInput = getByLabelText(/password/i);
  const emailInput = getByLabelText(/email/i);
  const submitButton = getByText(/sign up/i);
  fireEvent.change(usernameInput, { target: { value: 'john' } });
  fireEvent.change(passwordInput, { target: { value: 'doe' } });
  fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
  fireEvent.click(submitButton);
  expect(mockHandleSignUp).toHaveBeenCalledWith({ username: 'john', password: 'doe', email: 'john@example.com' });
});