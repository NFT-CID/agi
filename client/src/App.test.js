import { render, screen } from '@testing-library/react';
import App from './App';

test('renders just act link', () => {
  render(<App />);
  const linkElement = screen.getByText(/just act/i);
  expect(linkElement).toBeInTheDocument();
});
