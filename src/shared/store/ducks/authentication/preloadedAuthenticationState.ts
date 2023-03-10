import { STORAGE_AUTHENTICATION_KEY } from './sagas';
import { Authentication, AuthenticationState } from './types';

const preloadedAuthenticationState = (): AuthenticationState => {
  const storagedData = localStorage.getItem(STORAGE_AUTHENTICATION_KEY);

  if (!storagedData) {
    return {
      data: {} as Authentication,
      error: false,
      loading: false,
    };
  }

  const { token, user, refresh_token } = JSON.parse(storagedData);

  const data: Authentication = {
    token,
    user,
    refresh_token,
  };

  const authenticationState = {
    data,
    error: false,
    loading: false,
  };

  return authenticationState;
};

export default preloadedAuthenticationState;
