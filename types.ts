export interface Character {
  id: string;
  name: string;
  actor: string;
  role: string;
  description: string;
  imageUrl: string;
  accentColor: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export enum GalaxySection {
  HOME = 'home',
  CHARACTERS = 'characters',
  MIXTAPE = 'mixtape',
  DATABASE = 'database',
}