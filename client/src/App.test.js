import {fireEvent, render, screen, waitFor} from '@testing-library/react';
import App from './App';

describe('give me the recipe page tests', () => {

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

  test('clicking give me the recipe displays a modal', () => {
    render(<App/>);
    const submitButton = screen.getByRole('button', {name: /give me the recipe/i});

    fireEvent.click(submitButton);

    const modal = screen.getByText("Here is your recipe:");

    expect(modal).toBeInTheDocument();
  })

  test('entering recipe url and hitting submit button displays modal with recipe url', () => {
    render(<App/>);
    const submitButton = screen.getByRole('button', {name: /give me the recipe/i});
    const inputBox = screen.getByLabelText(/enter the url/i);

    fireEvent.change(inputBox, {
      target: {value: 'www.recipeurl.com'},
    })

    fireEvent.click(submitButton);

    const modal = screen.getByText("www.recipeurl.com");

    expect(modal).toBeInTheDocument();
  })


})

