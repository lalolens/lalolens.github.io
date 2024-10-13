// src/components/Contact.tsx
import React from 'react';
import './Assistant.css';
import '../MainContent.css';

import ChatInterface from '../../../packages/chat/src/ChatInterface';

const Assistant: React.FC = () => {
  return (
    <main className="main-container">
      <div className="main-content">
        <div className="assistant">
        <ChatInterface
            userMessageColor={'#d1f5ff'}
            assistantMessageColor={'#ffffff'}
            backgroundColor={'#ffffff'}
            chatPaneShadow = {'0 4px 15px rgba(0, 0, 0, 0.0)'}
            inputBorderColor = {'#ccc'}
            sendButtonColor = {'#0071EB'}
            sendButtonHoverColor = {'#005bb5'}
        />
        </div>
      </div>
    </main>
  );
};

export default Assistant;
