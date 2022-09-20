import React, { FC, useContext } from 'react';
import { useState } from "react";
import { useParams } from 'react-router-dom';
import MUIButton from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { AUTHOR } from '../types';
import { ThemeContext } from '../utils/ThemeContext';
import { useDispatch } from 'react-redux';
import { addMessageWithReply } from '../store/messages/slice';
import { Wrapper } from './styled';
import { ThunkDispatch } from 'redux-thunk';
import { StoreState } from '../store';


export const Form: FC = () => {
    const [value, setValue] = useState('');
    const { chatId } = useParams();
    const { theme, toggleTheme } = useContext(ThemeContext);
    const dispatch = useDispatch<ThunkDispatch<StoreState, void, any>>();

    const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
        if (chatId) {
            dispatch(
                addMessageWithReply({
                    chatName: chatId,
                    message: { author: AUTHOR.AUTHOR, value },
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