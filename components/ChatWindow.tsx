
import React, { useRef, useEffect } from 'react';
import { Agent, Message } from '../types';
import MessageBubble from './MessageBubble';
import InputBar from './InputBar';
import { ThinkingIndicator } from './icons/AgentIcons';

interface ChatWindowProps {
  agent: Agent;
  messages: Message[];
  isLoading: boolean;
  onSendMessage: (content: string) => void;
}

const ChatWindow: React.FC<ChatWindowProps> = ({ agent, messages, isLoading, onSendMessage }) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages, isLoading]);

  return (
    <div className="flex-1 flex flex-col h-full bg-white dark:bg-gray-900">
      <header className="flex-shrink-0 flex items-center gap-4 p-4 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
        <div className="w-8 h-8 text-indigo-500">{agent.icon}</div>
        <div>
          <h2 className="text-lg font-semibold">{agent.name}</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">{agent.description}</p>
        </div>
      </header>
      <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4">
        {messages.map((msg, index) => (
          <MessageBubble key={index} message={msg} />
        ))}
        {isLoading && (
          <div className="flex justify-start">
             <div className="flex items-center gap-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg px-4 py-2">
                <ThinkingIndicator />
                <span className="text-sm">Thinking...</span>
             </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
       <div className="p-4 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-2">
            {agent.examplePrompts.map((prompt, i) => (
                <button 
                    key={i}
                    onClick={() => onSendMessage(prompt)}
                    className="text-xs text-left p-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    disabled={isLoading}
                >
                    {prompt}
                </button>
            ))}
        </div>
        <InputBar onSendMessage={onSendMessage} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default ChatWindow;
