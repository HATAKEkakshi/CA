
import React from 'react';
import { Agent } from '../types';

interface SidebarProps {
  agents: Agent[];
  selectedAgent: Agent | null;
  onSelectAgent: (agent: Agent) => void;
  onNewChat: () => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ agents, selectedAgent, onSelectAgent, onNewChat, isOpen, setIsOpen }) => {
  return (
    <>
      <div className={`fixed inset-0 z-30 bg-black bg-opacity-50 transition-opacity md:hidden ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={() => setIsOpen(false)}></div>
      <aside className={`absolute md:relative z-40 flex flex-col w-64 md:w-72 bg-gray-50 dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 h-full transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          <h1 className="text-xl font-bold">Virtual CA</h1>
          <button
            onClick={onNewChat}
            className="flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-md bg-indigo-500 text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            New Chat
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto p-2">
          <p className="px-2 py-1 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Agents</p>
          <ul className="space-y-1 mt-2">
            {agents.map((agent) => (
              <li key={agent.id}>
                <button
                  onClick={() => {
                    onSelectAgent(agent);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 p-2 rounded-md text-left text-sm transition-colors ${
                    selectedAgent?.id === agent.id
                      ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/50 dark:text-white'
                      : 'hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  <span className="flex-shrink-0 w-6 h-6">{agent.icon}</span>
                  <span className="truncate">{agent.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Powered by Gemini. Legal filings require a licensed CA's review.
          </p>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
