import * as React from 'react';
import { FC } from 'react';
import { List, ListItem, ListItemButton, ListItemText } from '@mui/material/';

type Chat = Chats[];

interface Chats {
    id: number;
    name: string;
}
const userChat: Chat = [
    {
        id: 10,
        name: "First"
    },
    {
        id: 11,
        name: "Second"
    },
    {
        id: 12,
        name: "Third"
    },
];
export const Chat = () => {

    return (
        <List>Чаты:
            {userChat.map((item) => (
                <ListItemButton key={item.id} >
                    <ListItem>
                        <ListItemText primary={`${item.name}`} />
                    </ListItem>
                </ListItemButton>

            ))}
        </List>
    )
}
