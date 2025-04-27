import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { App } from './App';

describe('App', () => {
  it('renders headline', () => {
    render(<App />);
    expect(
      screen.getByText(/React \+ TypeScript \+ Vite/i),
    ).toBeInTheDocument();
  });

  it('increments count on button click', async () => {
    const user = userEvent.setup();
    render(<App />);

    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('count is 0');

    await user.click(button);
    expect(button).toHaveTextContent('count is 1');

    await user.click(button);
    expect(button).toHaveTextContent('count is 2');
  });
});
