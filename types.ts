
import React from 'react';

export enum Role {
  USER = 'user',
  MODEL = 'model',
}

export interface Message {
  role: Role;
  content: string;
}

export interface Agent {
  id: string;
  name: string;
  description: string;
  systemPrompt: string;
  icon: React.ReactElement;
  examplePrompts: string[];
}
