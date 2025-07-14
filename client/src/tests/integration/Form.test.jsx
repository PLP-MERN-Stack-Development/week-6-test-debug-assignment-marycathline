import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import LoginForm from '../../components/LoginForm';


describe('LoginForm Integration Test', () => {
  it('renders the form and logs in the user', () => {
    render(<LoginForm />);

    // Form should be visible initially
    const input = screen.getByLabelText(/username/i);
    const button = screen.getByRole('button', { name: /login/i });

    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();

    // Simulate typing a username
    fireEvent.change(input, { target: { value: 'Mary' } });

    // Submit form
    fireEvent.click(button);

    // Should show welcome message
    const welcomeMsg = screen.getByText(/welcome, mary!/i);
    expect(welcomeMsg).toBeInTheDocument();
  });
});
