import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Tab from './Tab';

test('renders tab component with login and sign up buttons', () => {
  const { getByText } = render(<Tab />);
  const loginButton = getByText(/login/i);
  const signUpButton = getByText(/sign up/i);
  expect(loginButton).toBeInTheDocument();
  expect(signUpButton).toBeInTheDocument();
});

test('switches to sign up component when sign up button is clicked', () => {
  const { getByText, queryByText } = render(<Tab />);
  const signUpButton = getByText(/sign up/i);
  const loginForm = queryByText(/username/i);
  expect(loginForm).toBeInTheDocument();
  fireEvent.click(signUpButton);
  const signUpForm = getByText(/email/i);
  expect(signUpForm).toBeInTheDocument();
});