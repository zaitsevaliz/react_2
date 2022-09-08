import React, { FC } from 'react'
import { useState } from "react"
import MUIButton from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { AUTHOR, Message } from '../types';

interface FormProps {
    addMessage: (msg: Message) => void;
}

export const Form: FC<FormProps> = ({ addMessage }) => {
    const [value, setValue] = useState('');
    const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
        addMessage({
            author: AUTHOR.AUTHOR,
            value,
        });
        setValue('');
    }

    return (<form onSubmit={handleSubmit} className="form" role="myForm">
        <TextField variant="outlined" placeholder='text' type="text" value={value} onChange={(e) => setValue(e.target.value)} inputRef={input => input && input.focus()} inputProps={{ 'data-testid': 'input' }} />
        < MUIButton variant="outlined" disabled={!value} type="submit" data-testid='button' >Send</MUIButton>
        {/* <button disabled={!value}>Send</button> */}
        {/* <Button label="send" disabled={!value} /> */}
    </form >)
}