import { render, screen } from '@testing-library/react';
import App from './App';

describe("give me the recipe page tests", () => {

test('renders page', () => {
  render(<App />);
  const pageTitle = screen.getByRole('heading', {name: /give me the recipe/i})
  expect(pageTitle).toBeInTheDocument();
});

test('renders input box label', () => {
  render(<App />);
  const inputBoxLabel = screen.getByText(/enter the url and click the button/i);
  expect(inputBoxLabel).toBeInTheDocument();
});

test('renders submit button', () => {
  render(<App />);
  const submitButton = screen.getByRole('button', {name: /give me the recipe/i});
  expect(submitButton).toBeInTheDocument();
})


})

