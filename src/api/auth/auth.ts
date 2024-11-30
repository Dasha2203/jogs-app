import axios from 'axios';
import { axiosClient } from '../../services/axiosInstance';
import { SignInCredentials, SignInResponse, SignInResponseError } from './types';

const user: SignInCredentials = {
  username: 'alex',
  password: 'qwerty',
}

export const signin = async () => {
  try {
    const { data } = await axiosClient.post<SignInResponse>('/auth/signin', user);
    return data.accessToken;

  } catch(error) {
    if (axios.isAxiosError(error)) {
      const serverError = error.response?.data as SignInResponseError;

      if (error.response?.status === 401 && serverError) {
        console.error('Error authorization:', serverError.message);
        throw new Error(serverError.message)
      } else {
        throw new Error(error.message)
      }
    } else {
      console.error('error:', error);
      throw new Error('Smth went srong');
    }
  }
};
