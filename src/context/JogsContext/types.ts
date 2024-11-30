import { Jog } from '../../models/jogs';

export type JogsContextType = {
  jogs: Jog[];
  fetchJogs: () => Promise<void>;
  addJog: (value: Jog) => void;
  updateJog: (value: Jog) => void;
};
