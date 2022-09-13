import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MessageList } from './MessageList';
import { AUTHOR } from '../types';


describe('MessageList', () => {
    it('render component', () => {
        render(<MessageList messages={[]} />);
    });
    // it('messageslist is empty', () => {
    //     render(<MessageList messages={[]} />);
    //     expect(screen.queryAllByRole('li').length).toBe(0);
    // });
    // it('messageslist length is 2', () => {
    //     const messages: Messages = [{
    //         author: AUTHOR.AUTHOR,
    //         value: '1',
    //     },
    //     {
    //         author: AUTHOR.AUTHOR,
    //         value: '2',
    //     }];

    //     render(<MessageList messages={messages} />);
    //     expect(screen.getAllByTestId('li').length).toBe(2);
    // })
});