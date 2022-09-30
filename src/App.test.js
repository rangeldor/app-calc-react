import { render, screen } from '@testing-library/react';
import App from './App';

test('renders react app', () => {
  render(<App />);
  const title = screen.getAllByText('Somar');
  expect(title[0]).toBeInTheDocument();
});
