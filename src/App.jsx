import React from 'react';
import './App.css';
import { Message } from './components/Message';
import { useState, useEffect } from 'react';

export const App = () => {
  const [messageList, setMessageList] = useState([]);
  const [author, setAuthor] = useState('');
  const [text, setText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const handleClick = () => {
    if (author !== '' && text !== '') {
      setIsTyping(false);
      setMessageList([...messageList, {
        text: text,
        author: author,
      }]);
    } else {
      alert('Заполните поля')
    }
  }

  const authorChange = (ev) => {
    setIsTyping(true);
    setAuthor(ev.target.value);
  }

  const textChange = (ev) => {
    setText(ev.target.value);
  }
  useEffect(() => {
    if (isTyping) {
      return;
    }
    setTimeout(() => {
      alert('Статья опубликована. Автор:  ' + author);
    }, 1500);
  }, [author, isTyping]);

  return (
    <div className="messageandform">
      <div className="inputs">
        <h3>App comp(parent)</h3>
        <p>Author:</p>
        <input type="text" onChange={authorChange} placeholder="Your name"></input>
        <p>Text:</p>
        <input type="text" onChange={textChange} placeholder="Your message"></input>
        <button onClick={handleClick}>Send</button>
      </div>
      <Message data={messageList.length} />
      <div>
        {messageList.map((message, idx) => <div key={idx}>{message.author}: {message.text}</div>)}
      </div>
    </div>
  )
}