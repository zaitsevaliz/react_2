import React, { FC } from 'react';
import './App.css';
import { Form } from './components/Form';
import { useState, useEffect } from 'react';
import { MessageList } from './components/MessageList';
import { AUTHOR, Message, Messages } from './types';

export const App: FC = () => {
  const [messages, setMessages] = useState<Messages>([])
  const addMessage = (newMessage: Message) => {
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  }
  useEffect(() => {
    if (messages.length > 0 && messages[messages.length - 1].author === AUTHOR.AUTHOR) {
      const timeout = setTimeout(() => {
        addMessage({
          author: AUTHOR.BOT,
          value: 'Im BOT',
        });
      }, 1500)
      return () => clearTimeout(timeout);
    }
  }, [messages]);
  return <>
    <MessageList messages={messages} />
    <Form addMessage={addMessage} />
  </>
}

