import React, { useState } from 'react';
import useInterval from '@use-it/interval';
import { motion } from 'framer-motion';

const messages = [
  { text: 'Hello, What you can do?' },
  { text: 'Play games and Watch movies....' },
  { text: 'Hmmmm!' },
  { text: 'Go to peerapat-ch.dev i list a short story about myself.' },
  { text: 'That great' }
];

export default function Chatbox() {
  const [messageToShow, setMessageToShow] = useState(0);

  useInterval(() => {
    setMessageToShow((messageToShow) => messageToShow + 1);
  }, 3000);

  return (
    <div className="app-chat" p={1 / 2}>
      <div className="walkthrough">
        {messages.map((message, index) => {
          const even = index % 2 === 0;
          if (messageToShow + 1 === index) {
            return <Typing key={index} even={even} />;
          }
          if (index > messageToShow) return <div key={index} />;

          return <Message key={index} message={message} />;
        })}
      </div>
    </div>
  );
}

function Typing({ even }) {
  return (
    <motion.div
      className={`typing ${even ? 'is-right' : 'is-left'}`}
      initial={{ rotate: 10, scale: 0 }}
      animate={{ rotate: 0, scale: 1 }}
    >
      <div className="dots">
        <div />
        <div />
        <div />
      </div>
    </motion.div>
  );
}

function Message({ message }) {
  return (
    <motion.div
      className="message"
      initial={{ rotate: -5, scale: 0 }}
      animate={{ rotate: 0, scale: 1 }}
    >
      <div className="avatar">🐷</div>
      <div className="text">{message.text}</div>
      <div className="avatar">🦊</div>
    </motion.div>
  );
}
