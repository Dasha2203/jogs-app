export type SignInCredentials = {
  username: string;
  password: string;
}

export type SignInResponse = {
  accessToken: string;
}

export type SignInResponseError = {
  message: string;
  statusCode: number;
}