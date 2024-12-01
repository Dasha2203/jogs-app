import { Jog } from '../../models/jogs';

export type JogsResponse = {
  jogs: Jog[];
};

export type AddJogCredential = {
  date: string;
  time: number;
  distance: number;
};
