import { isAxiosError } from 'axios';

export const errorHandler = (error: any): string => {
  if (isAxiosError(error)) {
    return error.response?.data || error.response?.data.statusText;
  }

  const { message } = error as Error;

  return message;
};
