// ChatHeader.tsx
import React from 'react';

interface ChatHeaderProps {
  title: string;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ title }) => {
  return <h1>{title}</h1>;
};

export default ChatHeader;