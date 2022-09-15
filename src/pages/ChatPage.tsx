import React, { FC, useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { ChatList } from '../components/ChatList';
import { Form } from '../components/Form';
import { MessageList } from '../components/MessageList';
import { AUTHOR, Chat, Message, Messages } from '../types';
import style from './ChatPage.module.css';
//@ts-ignore
import { WithClasses } from '../HOC/WithClasses';
interface ChatPageProps {
    chats: Chat[];
    onAddChat: (chat: Chat) => void;
    messages: Messages;
    onAddMessage: (chatId: string, msg: Message) => void;
    removeChat: (id: string) => void;
}
export const ChatPage: FC<ChatPageProps> = ({ chats, onAddChat, messages, onAddMessage, removeChat }) => {
    const { chatId } = useParams();
    const MessageListWithClass = WithClasses(MessageList);
    useEffect(() => {
        //messages[chatId]?.length > 0 &&
        if (
            chatId &&
            messages[chatId]?.length > 0 &&
            messages[chatId][messages[chatId].length - 1].author === AUTHOR.AUTHOR) {
            const timeout = setTimeout(() => {
                onAddMessage(chatId, {
                    author: AUTHOR.BOT,
                    value: 'Im BOT',
                });
            }, 1500)
            return () => clearTimeout(timeout);
        }
    }, [chatId, messages, onAddMessage]);
    if (chatId && !messages[chatId]) {
        return <Navigate to="/chats" replace />
    }
    return <>
        <ChatList chats={chats} onAddChat={onAddChat} removeChat={removeChat} />
        <MessageListWithClass messages={chatId ? messages[chatId] : []} classes={style.border} />
        <Form addMessage={onAddMessage} />
    </>
}

