import { List, ListItem } from "@mui/material";
import React, { FC, useState } from "react";
import { Chat } from "../../types";
import { customAlphabet } from 'nanoid';
import { Link, NavLink } from "react-router-dom";
import '../../App.css';
const nanoid = customAlphabet('1234567890', 10)
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
    const deleteChat = (id: string, name: string) => {
        removeChat(id);
        name = '';
    }
    return (
        <>
            <ul>
                {chats.map((chat) =>
                    <ListItem key={chat.id}>
                        <NavLink to={`/chats/${chat.id}`} style={({ isActive }) => ({ color: isActive ? 'black' : 'blue' })}>{chat.name}</NavLink>
                        <button id={chat.id} className="delete-btn" onClick={() => (deleteChat(chat.id, chat.name))}>X</button>
                        {/* onClick={(() => console.log(chat.id))} */}
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