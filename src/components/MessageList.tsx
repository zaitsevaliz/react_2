import React, { FC } from 'react';
import { List, ListItem } from '@mui/material/';
import { Message, Messages } from '../types';


interface MessageListProps {
    messages: Message[];
}
export const MessageList: FC<any> = ({ messages }) => {
    return (
        <div className="chats">

            <List >
                {messages.map((message: any, idx: number) => (
                    <ListItem key={idx} data-testid="li" >{message.author}:{message.value}</ListItem>
                ))}
            </List >

        </div>

    );
};