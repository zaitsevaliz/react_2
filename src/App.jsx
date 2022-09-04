import React from 'react';
import './App.css';
import { Form } from './components/Form';
import { useState, useEffect } from 'react';
import { MessageList } from './components/MessageList';

export const App = () => {
  const [messages, setMessages] = useState([])
  const addMessage = (newMessage) => {
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  }
  useEffect(() => {
    if (messages.length > 0 && messages[messages.length - 1].author === 'USER') {
      const timeout = setTimeout(() => {
        addMessage({
          author: 'BOT',
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

