import { isAxiosError } from 'axios';

export const errorHandler = (error: any): string => {
  if (isAxiosError(error)) {
    return error.response?.data.message;
  }

  const { message } = error as Error;

  return message;
};
