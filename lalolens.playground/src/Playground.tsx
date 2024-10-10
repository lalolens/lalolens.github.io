import React, { useState } from 'react';
import './Playground.css';

const Playground: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSendMessage = () => {
    if (input.trim() !== '') {
      setMessages([...messages, input]);
      setInput('');
    }
  };

  return (
    <section className="playground">
      <h1>Playground Component</h1>
      <div className="chat-pane">
        {messages.map((message, index) => (
          <div key={index} className="message">
            {message}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          className="input-bubble"
          placeholder="Type a message..."
        />
        <button onClick={handleSendMessage} className="send-button">Send</button>
      </div>
    </section>
  );
};

export default Playground;