// InputContainer.tsx
import React, { RefObject } from 'react';

interface InputContainerProps {
  input: string;
  handleInputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleSendMessage: () => void;
  inputRef: RefObject<HTMLTextAreaElement>;
  inputBorderColor: string;
  sendButtonColor: string;
  sendButtonHoverColor: string;
}

const InputContainer: React.FC<InputContainerProps> = ({
  input,
  handleInputChange,
  handleSendMessage,
  inputRef,
  inputBorderColor,
  sendButtonColor,
  sendButtonHoverColor,
}) => {
  return (
    <div className="input-container">
      <textarea
        ref={inputRef}
        value={input}
        onChange={handleInputChange}
        className="input-bubble"
        placeholder="Type a message..."
        rows={1}
        style={{ borderColor: inputBorderColor }}
      />
      <button
        onClick={handleSendMessage}
        className="send-button"
        style={{ backgroundColor: sendButtonColor }}
      >
        Send
      </button>
    </div>
  );
};

export default InputContainer;