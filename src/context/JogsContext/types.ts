import { AddJogCredential } from '../../api/jogs/types';
import { Jog } from '../../models/jogs';

export type JogsContextType = {
  jogs: Jog[];
  error: string;
  isLoading: boolean;
  fetchJogs: () => Promise<void>;
  addJog: (value: AddJogCredential) => Promise<void>;
  updateJog: (value: Jog) => void;
  getRangeJogs: ({ start, end } : { start?: string, end?: string }) => void;
};
