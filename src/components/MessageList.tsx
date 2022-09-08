import React, { FC } from 'react';
import { List, ListItem } from '@mui/material/';
import { Message, Messages } from '../types';
import { Chat } from '../chats';

interface MessageListProps {
    messages: Messages;
}
export const MessageList: FC<MessageListProps> = ({ messages }) => {
    return (
        <div className="chats">
            <Chat />
            <List >
                {messages.map((message, idx) => (
                    <ListItem key={idx} data-testid="li" >{message.author}:{message.value}</ListItem>
                ))}
            </List >

        </div>

    );
};