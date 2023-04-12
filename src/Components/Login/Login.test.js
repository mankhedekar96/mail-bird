import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Login from './Login';

test('renders login form', () => {
  const { getByLabelText, getByText } = render(<Login />);
  const usernameInput = getByLabelText(/username/i);
  const passwordInput = getByLabelText(/password/i);
  const submitButton = getByText(/login/i);
  expect(usernameInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
});

test('submits login form with correct data', () => {
  const mockHandleLogin = jest.fn();
  const { getByLabelText, getByText } = render(<Login handleLogin={mockHandleLogin} />);
  const usernameInput = getByLabelText(/username/i);
  const passwordInput = getByLabelText(/password/i);
  const submitButton = getByText(/login/i);
  fireEvent.change(usernameInput, { target: { value: 'john' } });
  fireEvent.change(passwordInput, { target: { value: 'doe' } });
  fireEvent.click(submitButton);
  expect(mockHandleLogin).toHaveBeenCalledWith({ username: 'john', password: 'doe' });
});