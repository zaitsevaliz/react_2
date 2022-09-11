import React, { FC } from 'react';
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
const defaultChats: Chat[] = [
  {
    id: '1',
    name: 'first'
  },
  {
    id: '2',
    name: 'second'
  },
];
const defaultMessages: Messages = {
  '1': [{ author: AUTHOR.AUTHOR, value: 'hello,world!' }],
  '2': [{ author: AUTHOR.BOT, value: 'hello, im bot' }],
}
export const App: FC = () => {
  const [chats, setChats] = useState<Chat[]>(defaultChats);
  const [messages, setMessages] = useState<Messages>(defaultMessages);
  const onAddChat = (newChat: Chat) => {
    setChats([...chats, newChat]);
    setMessages({
      ...messages,
      [newChat.id]: [],
    })
  }
  const onAddMessage = (chatId: string, newMessage: Message) => {
    setMessages({
      ...messages,
      [chatId]: [...messages[chatId], newMessage],
    });
  };
  const removeChat = (id: string) => {
    setChats(chats.filter(el => el.id !== id));
  };
  return (<>
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Main />} />
        <Route path="profile" element={<Profile />} />
        <Route path="chats" >
          <Route index element={<ChatList chats={chats} onAddChat={onAddChat} removeChat={removeChat} />} />
          <Route path=":chatId" element={<ChatPage chats={chats} onAddChat={onAddChat} messages={messages} onAddMessage={onAddMessage} removeChat={removeChat} />} />
        </Route>
      </Route>
      <Route path="*" element={<div>404 page</div>} />
    </Routes>
  </>);
};

