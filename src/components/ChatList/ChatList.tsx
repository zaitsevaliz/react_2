import { ListItem } from "@mui/material";
import React, { FC, useState } from "react";
import { NavLink } from "react-router-dom";
import '../../App.css';
import { useDispatch, useSelector } from "react-redux";
import { selectChats } from "../../store/messages/selectors";
import { ref, set, remove, push } from "firebase/database";
import { db, getChats } from "../../services/firebase";
import { nanoid } from "nanoid";

export const ChatList: FC<any> = ({ chats }) => {
    const [value, setValue] = useState('');
    const dispatch = useDispatch();
    // const chats = useSelector(selectChats, (prev, next) => prev.length === next.length);
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (value) {
            set(ref(db, `chats/${value}`), {
                id: nanoid(),
                name: value,
            });
            set(ref(db, `messages/${value}`), {
                name: value,
            });
            setValue('');
        }
    };
    const handleDelete = (chatName: string) => {
        remove(ref(db, `chats/${chatName}`));
    }
    return (
        <>
            <ul>
                {chats.map((chat: any) =>
                    <ListItem key={chat.name}>
                        <NavLink to={`/chats/${chat.name}`} style={({ isActive }) => ({ color: isActive ? 'black' : 'blue' })}>{chat.name}</NavLink>
                        <button id={chat.id} className="delete-btn" onClick={() => handleDelete(chat.name)}>X</button>
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