// ChatPane.tsx
import React from 'react';

interface MessageProps {
  role: 'user' | 'assistant';
  content: string;
}

interface ChatPaneProps {
  messages: MessageProps[];
  userMessageColor: string;
  assistantMessageColor: string;
  chatPaneShadow: string;
}

const ChatPane: React.FC<ChatPaneProps> = ({ messages, userMessageColor, assistantMessageColor, chatPaneShadow }) => {
  return (
    <div className="chat-pane" style={{ boxShadow: chatPaneShadow }}>
      {messages.map((message, index) => (
        <div
          key={index}
          className={`message ${message.role}`}
          style={{
            backgroundColor: message.role === 'user' ? userMessageColor : assistantMessageColor,
          }}
        >
          {message.content}
        </div>
      ))}
    </div>
  );
};

export default ChatPane;