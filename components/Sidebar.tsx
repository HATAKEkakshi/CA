import React from 'react';
import { Agent } from '../types';
import { cn } from '../utils';

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
      <div className={cn("fixed inset-0 z-30 bg-black/50 transition-opacity md:hidden", isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none')} onClick={() => setIsOpen(false)}></div>
      <aside className={cn("absolute md:relative z-40 flex flex-col w-64 bg-card border-r border-border h-full transition-transform duration-300", isOpen ? 'translate-x-0' : '-translate-x-full', 'md:translate-x-0')}>
        <div className="flex items-center justify-between p-4 border-b border-border">
          <h1 className="text-xl font-semibold">Virtual CA</h1>
          <button
            onClick={onNewChat}
            className="flex items-center gap-2 px-3 py-1.5 text-sm rounded-md bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            New
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto p-2">
          <p className="px-2 py-1 text-xs font-medium text-muted-foreground uppercase tracking-wider">Agents</p>
          <ul className="space-y-1 mt-2">
            {agents.map((agent) => (
              <li key={agent.id}>
                <button
                  onClick={() => {
                    onSelectAgent(agent);
                    setIsOpen(false);
                  }}
                  className={cn(
                    "w-full flex items-center gap-3 p-2 rounded-md text-left text-sm transition-colors",
                    selectedAgent?.id === agent.id
                      ? 'bg-accent text-accent-foreground'
                      : 'hover:bg-accent/50'
                  )}
                >
                  <span className="flex-shrink-0 w-5 h-5">{agent.icon}</span>
                  <span className="truncate">{agent.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <div className="p-4 border-t border-border">
          <p className="text-xs text-muted-foreground">
            Powered by Gemini
          </p>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;