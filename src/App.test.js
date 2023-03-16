import { render, screen } from '@testing-library/react';
import App from './App';

describe("give me the recipe page tests", () => {

test('renders learn react link', () => {
  render(<App />);
  const pageTitle = screen.getByRole('heading', {name: /give me the recipe/i})
  expect(pageTitle).toBeInTheDocument();
});

test('renders input box label', () => {
  render(<App />);
  const inputBoxLabel = screen.getByText(/enter url and hit submit/i);
  expect(inputBoxLabel).toBeInTheDocument();
});


})

