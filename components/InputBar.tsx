import React, { useState } from 'react';
import { cn } from '../utils';

interface InputBarProps {
  onSendMessage: (content: string) => void;
  isLoading: boolean;
}

const InputBar: React.FC<InputBarProps> = ({ onSendMessage, isLoading }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() && !isLoading) {
      onSendMessage(inputValue);
      setInputValue('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        handleSubmit(e as unknown as React.FormEvent);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <textarea
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Type your message here..."
        className="flex-1 p-2 border border-input rounded-lg focus:ring-2 focus:ring-ring focus:outline-none bg-background resize-none"
        rows={1}
        disabled={isLoading}
        style={{ maxHeight: '150px' }}
      />
      <button
        type="submit"
        disabled={isLoading || !inputValue.trim()}
        className={cn(
          "p-2 rounded-full transition-colors",
          "bg-primary text-primary-foreground hover:bg-primary/90",
          "disabled:bg-muted disabled:cursor-not-allowed"
        )}
      >
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </form>
  );
};

export default InputBar;