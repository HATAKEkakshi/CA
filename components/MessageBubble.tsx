
import React from 'react';
import { Message, Role } from '../types';
import { UserIcon, ModelIcon } from './icons/AgentIcons';

interface MessageBubbleProps {
  message: Message;
}

const MarkdownContent: React.FC<{ content: string }> = ({ content }) => {
    const parts = content.split(/(\`\`\`[\s\S]*?\`\`\`)/g);

    return (
        <div className="prose prose-sm dark:prose-invert max-w-none">
            {parts.map((part, index) => {
                if (part.startsWith('```') && part.endsWith('```')) {
                    const code = part.substring(3, part.length - 3).trim();
                    const language = code.split('\n')[0];
                    const codeBlock = code.substring(language.length).trim();
                    return (
                        <div key={index} className="bg-gray-800 dark:bg-black rounded-md my-2">
                             <div className="flex justify-between items-center px-4 py-1 bg-gray-700 dark:bg-gray-900 rounded-t-md text-xs text-gray-300">
                                <span>{language}</span>
                                <button onClick={() => navigator.clipboard.writeText(codeBlock)} className="hover:text-white">Copy</button>
                            </div>
                            <pre className="p-4 overflow-x-auto">
                                <code>{codeBlock}</code>
                            </pre>
                        </div>
                    );
                }
                return <p key={index} className="whitespace-pre-wrap">{part}</p>;
            })}
        </div>
    );
};


const MessageBubble: React.FC<MessageBubbleProps> = ({ message }) => {
  const isUser = message.role === Role.USER;

  const wrapperClasses = `flex items-start gap-3 ${isUser ? 'justify-end' : 'justify-start'}`;
  const bubbleClasses = `max-w-xl lg:max-w-2xl rounded-lg px-4 py-2 ${
    isUser
      ? 'bg-indigo-500 text-white'
      : 'bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-gray-100'
  }`;

  return (
    <div className={wrapperClasses}>
      {!isUser && (
        <div className="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center flex-shrink-0">
          <ModelIcon />
        </div>
      )}
      <div className={bubbleClasses}>
        <MarkdownContent content={message.content} />
      </div>
       {isUser && (
        <div className="w-8 h-8 rounded-full bg-indigo-200 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 flex items-center justify-center flex-shrink-0">
          <UserIcon />
        </div>
      )}
    </div>
  );
};

export default MessageBubble;
