import React, { FC, useContext } from 'react';
import { useState } from "react";
import { useParams } from 'react-router-dom';
import MUIButton from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { AUTHOR, Message } from '../types';
import { ThemeContext } from '../utils/ThemeContext';
import { useDispatch } from 'react-redux';
import { addMessage } from '../store/messages/actions';
import { Wrapper } from './styled';
interface FormProps {
    addMessage: (chatId: string, msg: Message) => void;
}

export const Form: FC = () => {
    const [value, setValue] = useState('');
    const { chatId } = useParams();
    const { theme, toggleTheme } = useContext(ThemeContext);
    const dispatch = useDispatch();
    const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
        if (chatId) {
            dispatch(
                addMessage(chatId, {
                    author: AUTHOR.AUTHOR,
                    value,
                })
            );
        }
        setValue('');
    };

    return (
        <Wrapper>
            <form onSubmit={handleSubmit} className="form" role="myForm">
                <TextField variant="outlined" placeholder='text' type="text" value={value} onChange={(e) => setValue(e.target.value)} autoFocus inputProps={{ 'data-testid': 'input' }} />
                < MUIButton variant="outlined" disabled={!value} type="submit" data-testid='button' >Send</MUIButton>
            </form >
            <p>theme: {theme === 'light' ? 'light' : 'dark'}</p>
            <button onClick={toggleTheme}>toggle theme</button>
        </Wrapper>
    )
}