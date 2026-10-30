import { render, screen } from '@testing-library/react';
import { App } from './app';

describe('App', () => {
  it('says hello to the world', () => {
    render(<App />);

    expect(screen.getByRole('heading', { name: 'Hello, world!' })).toBeInTheDocument();
  });
});
