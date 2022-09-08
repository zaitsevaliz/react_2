import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MessageList } from './MessageList';
import { AUTHOR } from '../types';
import { App } from '../App';
import userEvent from '@testing-library/user-event';

describe('App', () => {
    it('render component', () => {
        render(<App />);
    });
    it('send user message', async () => {
        render(<App />);
        const input = screen.getByTestId<HTMLInputElement>('input');
        await userEvent.type(input, 'Hello');
        const button = screen.getByTestId('button');
        await userEvent.click(button);
        expect(screen.getAllByTestId('li').length).toBe(1);
    });
    it('bot answer', async () => {
        render(<App />);
        const input = screen.getByTestId<HTMLInputElement>('input');
        await userEvent.type(input, 'Hello');
        const button = screen.getByTestId('button');
        // await userEvent.click(button);
        expect(await screen.findByText(/Im BOT/)).toBeInTheDocument();
        await waitFor(() => expect(screen.getByText(/Im BOT/)).toBeInTheDocument());
    })
});