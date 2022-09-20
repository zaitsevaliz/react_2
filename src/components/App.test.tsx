import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';

import { App } from '../App';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { store } from '../store';

describe('App', () => {
    it('send user message', async () => {
        window.HTMLElement.prototype.scrollIntoView = jest.fn();
        render(
            <Provider store={store}>
                <MemoryRouter initialEntries={['/chats/1']}>
                    <App />
                </MemoryRouter>
            </Provider>
        );

        const input = screen.getByTestId<HTMLInputElement>('input');
        await userEvent.type(input, 'Hello, world!');

        const button = screen.getByTestId('button');
        await userEvent.click(button);
        expect(screen.getByText(/Hello, world!/)).toBeInTheDocument();
        expect(screen.getAllByTestId('li').length).toBe(2);
    });
    it('bot answer', async () => {
        render(
            <Provider store={store}>
                <MemoryRouter initialEntries={['/chats/first']}>
                    <App />
                </MemoryRouter>
            </Provider>
        );

        const input = screen.getByTestId<HTMLInputElement>('input');
        await userEvent.type(input, 'Hello, world!');

        const button = screen.getByTestId('button');
        await userEvent.click(button);

        expect(
            await screen.findByText(/Im Bot/, undefined, { timeout: 1600 })
        ).toBeInTheDocument();
    });

});