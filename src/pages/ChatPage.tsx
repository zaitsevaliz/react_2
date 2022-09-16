import React, { FC, useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { ChatList } from '../components/ChatList';
import { Form } from '../components/Form';
import { MessageList } from '../components/MessageList';
//@ts-ignore
import style from './ChatPage.module.css';
import { WithClasses } from '../HOC/WithClasses';
import { useDispatch, useSelector } from 'react-redux';
import { StoreState } from '../store/index';
import { selectMessages } from '../store/messages/selectors';
import { addMessage } from '../store/messages/actions';
import { AUTHOR } from '../types';

export const ChatPage: FC = () => {
    const { chatId } = useParams();
    const MessageListWithClass = WithClasses(MessageList);
    const messages = useSelector(selectMessages);
    const dispatch = useDispatch();
    useEffect(() => {
        if (
            chatId &&
            messages[chatId]?.length > 0 &&
            messages[chatId][messages[chatId].length - 1].author === AUTHOR.AUTHOR) {
            const timeout = setTimeout(() => {
                dispatch(addMessage(chatId, {
                    author: AUTHOR.BOT,
                    value: 'Im BOT',
                }));
            }, 1500)
            return () => clearTimeout(timeout);
        }
    }, [chatId, messages, dispatch]);
    if (chatId && !messages[chatId]) {
        return <Navigate to="/chats" replace />
    }
    return <>
        <ChatList />
        <MessageListWithClass messages={chatId ? messages[chatId] : []} classes={style.border} />
        <Form />
    </>
}

