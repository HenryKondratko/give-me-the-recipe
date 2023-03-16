import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const pageTitle = screen.getByRole('heading', {name: /give me the recipe/i})
  expect(pageTitle).toBeInTheDocument();
});
