import React from 'react';
import { Agent } from '../types';
import { AGENTS } from '../constants';
import { cn } from '../utils';

interface AgentSelectorProps {
  onSelectAgent: (agent: Agent) => void;
}

const AgentCard: React.FC<{ agent: Agent; onSelect: () => void }> = ({ agent, onSelect }) => {
  return (
    <button
      onClick={onSelect}
      className="w-full text-left p-6 bg-card rounded-lg border border-border hover:bg-accent/50 transition-colors flex flex-col items-start"
    >
      <div className="w-12 h-12 mb-4">{agent.icon}</div>
      <h3 className="text-lg font-semibold">{agent.name}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{agent.description}</p>
    </button>
  );
};

const AgentSelector: React.FC<AgentSelectorProps> = ({ onSelectAgent }) => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 bg-background">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Virtual CA Platform
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          Select a specialized agent to begin. Each agent is tailored for specific tasks.
        </p>
      </div>
      <div className="mt-12 w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {AGENTS.map((agent) => (
          <AgentCard key={agent.id} agent={agent} onSelect={() => onSelectAgent(agent)} />
        ))}
      </div>
    </div>
  );
};

export default AgentSelector;