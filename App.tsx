
import React, { useState, useCallback, useEffect } from 'react';
import { Agent, Message, Role } from './types';
import { AGENTS } from './constants';
import Sidebar from './components/Sidebar';
import AgentSelector from './components/AgentSelector';
import ChatWindow from './components/ChatWindow';
import { generateResponse } from './services/geminiService';

const App: React.FC = () => {
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  useEffect(() => {
    if (selectedAgent) {
      setMessages([
        {
          role: Role.MODEL,
          content: `Hello! I am the ${selectedAgent.name}. How can I assist you with ${selectedAgent.description.toLowerCase()} today?`,
        },
      ]);
    }
  }, [selectedAgent]);

  const handleSelectAgent = useCallback((agent: Agent) => {
    setSelectedAgent(agent);
    setMessages([]);
  }, []);

  const handleSendMessage = useCallback(async (content: string) => {
    if (!selectedAgent) return;

    const userMessage: Message = { role: Role.USER, content };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setIsLoading(true);

    try {
      const responseContent = await generateResponse(selectedAgent.systemPrompt, content);
      const modelMessage: Message = { role: Role.MODEL, content: responseContent };
      setMessages((prevMessages) => [...prevMessages, modelMessage]);
    } catch (error) {
      console.error('Error fetching response from Gemini:', error);
      const errorMessage: Message = {
        role: Role.MODEL,
        content: 'Sorry, I encountered an error. Please try again.',
      };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  }, [selectedAgent]);
  
  const resetChat = () => {
    setSelectedAgent(null);
    setMessages([]);
  };

  return (
    <div className="flex h-screen font-sans bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Sidebar 
        agents={AGENTS} 
        selectedAgent={selectedAgent} 
        onSelectAgent={handleSelectAgent} 
        onNewChat={resetChat}
        isOpen={sidebarOpen}
        setIsOpen={setSidebarOpen}
      />
      <main className="flex-1 flex flex-col transition-all duration-300">
        <div className="flex-shrink-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-2 md:hidden">
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            </button>
        </div>
        
        {selectedAgent ? (
          <ChatWindow
            agent={selectedAgent}
            messages={messages}
            isLoading={isLoading}
            onSendMessage={handleSendMessage}
          />
        ) : (
          <AgentSelector onSelectAgent={handleSelectAgent} />
        )}
      </main>
    </div>
  );
};

export default App;
