import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MessageList } from './MessageList';
import { AUTHOR } from '../types';
import { App } from '../App';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

describe('App', () => {
    // it('render main page', () => {
    //     window.HTMLElement.prototype.scrollIntoView = jest.fn();
    //     render(
    //         <MemoryRouter initialEntries={['/main']}>
    //             <App />
    //         </MemoryRouter>
    //     );
    // });
    // it('send user message', async () => {
    //     window.HTMLElement.prototype.scrollIntoView = jest.fn();
    //     render(
    //         <MemoryRouter initialEntries={['/chats/1']}>
    //             <App />
    //         </MemoryRouter>
    //     );

    //     const input = screen.getByTestId<HTMLInputElement>('input');
    //     await userEvent.type(input, 'Hello, world!');

    //     const button = screen.getByTestId('button');
    //     await userEvent.click(button);

    //     expect(screen.getAllByTestId('li').length).toBe(2);
    // });

});