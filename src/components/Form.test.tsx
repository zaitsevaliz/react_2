import { Form } from './Form';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
describe('Form', () => {
    let addMessage: jest.Mock<any, any>;
    beforeEach(() => {
        addMessage = jest.fn();
        render(<Form addMessage={addMessage} />)
    })
    // it('render component', () => {
    //     const addMessage = jest.fn();
    //     render(<Form addMessage={addMessage} />)
    // })
    it('initial value of the form', () => {
        const input = screen.getByRole<HTMLInputElement>('textbox')
        expect(input.value).toEqual('')
    });
    it('the value of the button when there is text', () => {
        const value = '23';
        const input = screen.getByPlaceholderText("text");
        const btn = screen.getByRole('button');
        fireEvent.change(input, { target: { value: value } })
        expect(btn).toBeEnabled();
        screen.debug()
    })
    it('input change with fireevent', () => {
        const input = screen.getByTestId<HTMLInputElement>('input');
        fireEvent.change(input, { target: { value: 'new value' } });
        expect(input.value).toBe('new value');
    })
    it('button click with firevent', () => {
        const input = screen.getByTestId<HTMLInputElement>('input');
        fireEvent.change(input, { target: { value: 'new value' } });
        expect(input.value).toBe('new value');
        const button = screen.getByTestId('button');
        fireEvent.click(button);
        expect(addMessage).toHaveBeenCalledTimes(1);

        // const handleSubmit = jest.fn();
        // fireEvent.submit(getByRole(TextField,'myForm'))
        // expect(handleSubmit).toHaveBeenCalledTimes(1);
    })
})