export type JokeTypes = 'general' | 'dad' | 'knock-knock' | 'programming';

export interface Joke {
  type: JokeTypes;
  setup: string;
  punchline: string;
}