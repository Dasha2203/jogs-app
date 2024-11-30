import { authAxios } from '../../services/axiosInstance';
import { JogsResponse } from './types';

export const getJogs = async () => {
  try {
    const { data } = await authAxios.get<JogsResponse>('/jogs');

    return data.jogs;
  } catch (error) {
    console.log(error);
  }
}