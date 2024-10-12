import React, { useState, useRef } from 'react';

import './Playground.css';

interface MessageProps {
  role: 'user' | 'assistant';
  content: string;
}

const Playground: React.FC = () => {
  const [messages, setMessages] = useState<MessageProps[]>([
    { role: 'user', content: 'Hello, can you help me understand what machine learning is?' },
    { role: 'assistant', content: 'Of course! Machine learning is a type of artificial intelligence that allows computers to learn from and make predictions based on data, rather than being explicitly programmed for every task.' },
    { role: 'user', content: 'That sounds interesting. So, is it like teaching a computer how to think?' },
    { role: 'assistant', content: 'In a way, yes. Instead of giving the computer specific instructions, you provide it with data and let it find patterns and make decisions based on those patterns.' },
    { role: 'user', content: 'How does it know if it’s making the right decisions?' },
    { role: 'assistant', content: 'Great question! Machine learning models are typically trained using a process where they compare their predictions to known outcomes. If the predictions are wrong, they adjust their internal parameters to improve.' },
    { role: 'user', content: 'Can you give me an example of how machine learning is used in everyday life?' },
    { role: 'assistant', content: 'Sure! One common example is spam email filtering. Email services use machine learning to analyze emails and classify them as spam or not based on patterns found in the content.' },
    { role: 'user', content: 'Ah, that makes sense. What about something more complex, like self-driving cars?' },
    { role: 'assistant', content: 'Exactly! Self-driving cars use machine learning to interpret data from sensors and cameras to make decisions like when to stop, accelerate, or turn. They continuously learn from their environment to improve over time.' },
    { role: 'user', content: 'That sounds complicated. How do they ensure the cars make the right decisions and are safe?' },
    { role: 'assistant', content: 'Safety in self-driving cars comes from extensive testing and training on massive datasets. They use simulations and real-world driving data to learn how to react to different situations. Engineers also build in strict safety protocols.' },
    { role: 'user', content: 'Wow, so they learn from both simulated and real experiences?' },
    { role: 'assistant', content: 'Yes, exactly! Simulation allows for safe experimentation with extreme scenarios that might be rare in real life, while real-world data helps the car adapt to the complexities of actual driving.' },
    { role: 'user', content: 'Are there other types of AI that aren’t machine learning?' },
    { role: 'assistant', content: 'Yes, there are other types. For example, rule-based systems, where an AI follows a set of pre-defined rules to make decisions. Machine learning, however, is more flexible because it can improve and adapt on its own.' },
    { role: 'user', content: 'I see. What’s the difference between machine learning and deep learning?' },
    { role: 'assistant', content: 'Deep learning is actually a subset of machine learning that focuses on using neural networks with many layers. These deep neural networks are capable of learning complex patterns and are used for tasks like image recognition and natural language processing.' },
    { role: 'user', content: 'So neural networks are like how our brain works, right?' },
    { role: 'assistant', content: 'Exactly! Neural networks are loosely inspired by the human brain. They consist of layers of nodes (similar to neurons) that work together to process information and make decisions.' },
    { role: 'user', content: 'That’s amazing. Are there any downsides to machine learning?' },
    { role: 'assistant', content: 'There are a few challenges. Machine learning models require a lot of data to perform well, and they can sometimes learn biases present in the data. Also, they often act as "black boxes," meaning it’s difficult to understand how exactly they make their decisions.' },
    { role: 'user', content: 'How do people deal with the black box problem?' },
    { role: 'assistant', content: 'Researchers are working on techniques called "explainable AI" to make machine learning models more interpretable. These techniques help us understand why a model made a particular decision, which is especially important in sensitive applications like healthcare.' },
    { role: 'user', content: 'Explainable AI sounds really important. Is it used in medical diagnoses?' },
    { role: 'assistant', content: 'Yes, exactly. In healthcare, machine learning models are used to assist in diagnoses, but doctors need to understand why a model made a particular prediction. Explainable AI helps provide that insight, making it easier for professionals to trust and use AI effectively.' },
  ]);

  const [input, setInput] = useState<string>('');
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);

    if (inputRef.current) {
      inputRef.current.style.height = 'auto';
      inputRef.current.style.height = `${inputRef.current.scrollHeight}px`;
    }
  };

  const handleSendMessage = () => {
    if (input.trim() !== '') {
      const newUserMessage: MessageProps = {
        role: 'user',
        content: input,
      };

      // Example dummy response from the assistant
      const assistantResponse: MessageProps = {
        role: 'assistant',
        content: 'This is a response.',
      };

      setMessages((prevMessages) => [...prevMessages, newUserMessage, assistantResponse]);
      setInput('');
      if (inputRef.current) {
        inputRef.current.style.height = 'auto';
      }
    }
  };

  return (
    <section className="playground">
      <h1>Playground Component</h1>
      <div className="chat-pane">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.role}`}>
            {message.content}
          </div>
        ))}
      </div>
      <div className="input-container">
        <textarea
          ref={inputRef}
          value={input}
          onChange={handleInputChange}
          className="input-bubble"
          placeholder="Type a message..."
          rows={1}
        />
        <button onClick={handleSendMessage} className="send-button">
          Send
        </button>
      </div>
    </section>
  );
};


export default Playground;
