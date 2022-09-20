import { ListItem } from "@mui/material";
import React, { FC, useState } from "react";
import { NavLink } from "react-router-dom";
import '../../App.css';
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { addChat, deleteChat } from "../../store/messages/slice";
import { selectChats } from "../../store/messages/selectors";

export const ChatList: FC = () => {
    const [value, setValue] = useState('');
    const dispatch = useDispatch();
    const chats = useSelector(selectChats, (prev, next) => prev.length === next.length);
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (value) {
            dispatch(addChat(value));
            setValue('');
        }
    };
    return (
        <>
            <ul>
                {chats.map((chat) =>
                    <ListItem key={chat.name}>
                        <NavLink to={`/chats/${chat.name}`} style={({ isActive }) => ({ color: isActive ? 'black' : 'blue' })}>{chat.name}</NavLink>
                        <button id={chat.id} className="delete-btn" onClick={() => dispatch(deleteChat(chat.name))}>X</button>
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