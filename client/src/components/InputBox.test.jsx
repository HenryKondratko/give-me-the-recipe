import {fireEvent, render, screen} from '@testing-library/react';
import App from "../App";

describe('input box tests', () => {
    test('can enter text into input box', () => {
        render(<App/>)

        const inputBox = screen.getByLabelText(/enter the url/i);
        fireEvent.change(inputBox, {
            target: {value: 'testing'},
        })

        expect(screen.getByRole('textbox')).toHaveValue('testing')
    })
})