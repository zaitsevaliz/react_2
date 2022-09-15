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

    it('initial value of the form', () => {
        const input = screen.getByRole<HTMLInputElement>('textbox')
        expect(input.value).toEqual('')
    });
    it('input change with fireevent', () => {
        const input = screen.getByTestId<HTMLInputElement>('input');
        fireEvent.change(input, { target: { value: 'new value' } });
        expect(input.value).toBe('new value');
    })

})
