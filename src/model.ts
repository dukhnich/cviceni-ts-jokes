export type JokeTypes = 'general' | 'dad' | 'knock-knock' | 'programming';

export interface Joke {
  type: JokeTypes;
  setup: string;
  punchline: string;
}

export interface JokeWithId extends Joke {
    id: number;
}

export interface FormData {
  name: string;
  type: JokeTypes;
  count: number;
}