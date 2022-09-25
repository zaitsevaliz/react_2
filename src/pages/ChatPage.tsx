import React, { FC } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { ChatList } from '../components/ChatList';
import { Form } from '../components/Form';
import { MessageList } from '../components/MessageList';

export const ChatPage: FC<any> = ({ chats, messages }) => {
    const { chatId } = useParams();
    // const MessageListWithClass = WithClasses(MessageList);
    // const messages = useSelector(selectMessages);
    if (chatId && !messages[chatId]) {
        return <Navigate to="/chats" replace />
    }
    const prepareMessages = [...Object.values((chatId && messages[chatId].messages) || {}),];
    return <>
        <ChatList chats={chats} />
        <MessageList messages={prepareMessages} />
        {/* <MessageListWithClass messages={chatId ? messages[chatId] : []} classes={style.border} /> */}
        <Form />
    </>
}

