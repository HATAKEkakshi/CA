import React from 'react';
import { Message, Role } from '../types';
import { UserIcon, ModelIcon } from './icons/AgentIcons';
import { cn } from '../utils';

interface MessageBubbleProps {
  message: Message;
}

const MarkdownContent: React.FC<{ content: string }> = ({ content }) => {
    const parts = content.split(/(```[\s\S]*?```)/g);

    return (
        <div className="prose prose-sm max-w-none">
            {parts.map((part, index) => {
                if (part.startsWith('```') && part.endsWith('```')) {
                    const code = part.substring(3, part.length - 3).trim();
                    const language = code.split('\n')[0];
                    const codeBlock = code.substring(language.length).trim();
                    return (
                        <div key={index} className="bg-muted rounded-md my-2">
                             <div className="flex justify-between items-center px-4 py-1 bg-muted/50 rounded-t-md text-xs text-muted-foreground">
                                <span>{language}</span>
                                <button onClick={() => navigator.clipboard.writeText(codeBlock)} className="hover:text-foreground">Copy</button>
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

  return (
    <div className={cn("flex items-start gap-3", isUser ? 'justify-end' : 'justify-start')}>
      {!isUser && (
        <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
          <ModelIcon />
        </div>
      )}
      <div className={cn(
        "max-w-xl lg:max-w-2xl rounded-lg px-4 py-2",
        isUser
          ? 'bg-primary text-primary-foreground'
          : 'bg-muted text-muted-foreground'
      )}>
        <MarkdownContent content={message.content} />
      </div>
       {isUser && (
        <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
          <UserIcon />
        </div>
      )}
    </div>
  );
};

export default MessageBubble;