import { Jog } from '../../models/jogs';
import { authAxios } from '../../services/axiosInstance';
import { JogsResponse, AddJogCredential } from './types';

export const getJogs = async () => {
  try {
    const { data } = await authAxios.get<JogsResponse>('/jogs');

    return data.jogs;
  } catch (error) {
    console.log(error);
  }
}

export const createJog = async (value: AddJogCredential) => {
  try {
    const { data } = await authAxios.post<JogsResponse>('/jogs', value);

    return data.jogs[0];
  } catch (error) {
    console.log(error);
  }
}

export const patchJog = async ({ id, distance, date, time }: Jog) => {
  try {
    const { data } = await authAxios.patch<JogsResponse>(`/jogs/${id}`, {
      distance,
      time,
      date
    });

    return data.jogs[0];
  } catch (error) {
    console.log(error);
  }
}