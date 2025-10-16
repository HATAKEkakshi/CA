
import React from 'react';
import { Agent } from '../types';
import { AGENTS } from '../constants';

interface AgentSelectorProps {
  onSelectAgent: (agent: Agent) => void;
}

const AgentCard: React.FC<{ agent: Agent; onSelect: () => void }> = ({ agent, onSelect }) => {
  return (
    <button
      onClick={onSelect}
      className="w-full text-left p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-200 dark:border-gray-700 flex flex-col items-start"
    >
      <div className="w-12 h-12 text-indigo-500 mb-4">{agent.icon}</div>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{agent.name}</h3>
      <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{agent.description}</p>
    </button>
  );
};

const AgentSelector: React.FC<AgentSelectorProps> = ({ onSelectAgent }) => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 bg-gray-100 dark:bg-gray-900">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
          Welcome to the Virtual CA Platform
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
          Select a specialized agent below to begin. Each agent is tailored for a specific task, from company incorporation to tax preparation.
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
