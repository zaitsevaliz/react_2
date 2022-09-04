import { Form } from './Form';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
describe('Form', () => {
    it('initial value of the form', () => {
        render(<Form />)
        const input = screen.getByRole('textbox')
        expect(input.value).toEqual(' ')
    });
    it('the value of the button when there is text', () => {
        const value = '23';
        render(<Form />);
        const input = screen.getByPlaceholderText("text");
        const btn = screen.getByRole('button');
        fireEvent.change(input, { target: { value: value } })
        expect(btn).toBeEnabled();//toBeEnabled();
        screen.debug()
    })
})