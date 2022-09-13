import React, { FC, useMemo } from 'react';
import './App.css';
import { Form } from './components/Form';
import { useState, useEffect } from 'react';
import { MessageList } from './components/MessageList';
import { AUTHOR, Chat, Message, Messages } from './types';
import { Routes, Route } from 'react-router-dom';
import { Main } from './pages/Main';
import { Profile } from './pages/Profile';
import { ChatList } from './components/ChatList';
import { ChatPage } from './pages/ChatPage';
import { Header } from './components/header';
import { nanoid } from 'nanoid';
const defaultMessages: Messages = {
  first: [{ author: AUTHOR.AUTHOR, value: 'hello,world!' }],
  second: [{ author: AUTHOR.BOT, value: 'hello, im bot' }],
}
export const App: FC = () => {
  const [messages, setMessages] = useState<Messages>(defaultMessages);
  const chats = useMemo(() => Object.keys(messages).map((chatName) => ({
    name: chatName,
    id: nanoid(),
  })),
    [Object.keys(messages).length]
  );
  console.log(chats)
  const onAddChat = (newChat: Chat) => {
    setMessages({
      ...messages,
      [newChat.name]: [],
    })
  }
  const onAddMessage = (chatId: string, newMessage: Message) => {
    setMessages({
      ...messages,
      [chatId]: [...messages[chatId], newMessage],
    });
  };
  const removeChat = (id: string) => {
    const newMessages = { ...messages };
    delete newMessages[id];
    setMessages(newMessages);
  };
  return (<>
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Main />} />
        <Route path="profile" element={<Profile />} />
        <Route path="chats" >
          <Route index element={<ChatList chats={chats} onAddChat={onAddChat} removeChat={removeChat} />} />
          <Route path=":chatId" element={
            <ChatPage chats={chats} onAddChat={onAddChat} messages={messages}
              onAddMessage={onAddMessage} removeChat={removeChat} />} />
        </Route>
      </Route>
      <Route path="*" element={<div>404 page</div>} />
    </Routes>
  </>);
};

