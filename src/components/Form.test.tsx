import { Form } from './Form';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { store } from '../store';

describe('Form', () => {
    beforeEach(() => {
        render(
            <Provider store={store}>
                <Form />
            </Provider>
        );
    });
    it('input change with fireevent', () => {
        const inputEl = screen.getByTestId<HTMLInputElement>('input');

        fireEvent.change(inputEl, { target: { value: 'new value' } });
        expect(inputEl.value).toBe('new value');
        screen.debug();
    });


    it('activation of the button when the text is entered', () => {
        const value = '23';
        const inputEl = screen.getByTestId<HTMLInputElement>('input');
        const inputBtn = screen.getByTestId('button');
        fireEvent.change(inputEl, { target: { value: value } });

        expect(inputBtn).toBeEnabled();
    });

})
