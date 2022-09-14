import { List, ListItem } from "@mui/material";
import React, { FC, useState } from "react";
import { Chat } from "../../types";
import { nanoid } from 'nanoid';
import { Link, NavLink } from "react-router-dom";
import '../../App.css';
interface ChatListProps {
    chats: Chat[];
    onAddChat: (chat: Chat) => void;
    deleteChat?: (chat: Chat) => void;
    removeChat: (id: string) => void;
}
export const ChatList: FC<ChatListProps> = ({ chats, onAddChat, removeChat }) => {
    const [value, setValue] = useState('');
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (value) {
            onAddChat({
                id: nanoid(),
                name: value,
            })
            setValue('');
        }
    };
    return (
        <>
            <ul>
                {chats.map((chat) =>
                    <ListItem key={chat.name}>
                        <NavLink to={`/chats/${chat.name}`} style={({ isActive }) => ({ color: isActive ? 'black' : 'blue' })}>{chat.name}</NavLink>
                        <button id={chat.id} className="delete-btn" onClick={() => (removeChat(chat.name))}>X</button>
                    </ListItem>
                )}
            </ul>
            <form onSubmit={handleSubmit}>
                <input value={value} onChange={(e) => setValue(e.target.value)} />
                <button>create chat</button>
            </form>
        </>
    );
};