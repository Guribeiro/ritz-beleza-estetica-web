import { call, put } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { toast } from 'react-toastify';
import axios from 'axios';

import { errorHandler } from '@/shared/utils/error-handler';
import { api } from '@/shared/services/api';
import {
  Authentication,
  LoginRequestPayload,
  SignupRequestPayload,
  UpdateAvatarRequestPayload,
  UpdateNameRequestPayload,
  UpdateEmailRequestPayload,
  UpdateUsernameRequestPayload,
  User,
} from './types';

import {
  AxiosErrorResponse,
  ErrorResponse,
} from '@/shared/store/ducks/rootSagas';

import {
  signupRequestFailure,
  loginRequestSuccess,
  loginRequestFailure,
  logoutRequestSuccess,
  logoutRequestFailure,
  loadStorageAuthenticationSuccess,
  loadStorageAuthenticationFailure,
  updateAvatarRequestSuccess,
  updateAvatarRequestFailure,
  updateNameRequestSuccess,
  updateNameRequestFailure,
  updateEmailRequestSuccess,
  updateEmailRequestFailure,
  updateUsernameRequestSuccess,
  updateUsernameRequestFailure,
} from './actions';

export const STORAGE_AUTHENTICATION_KEY = `@test:authentication`;

interface ApiRequestAuthenticationProps {
  email: string;
  password: string;
}

interface ApiPostRequestSignupProps {
  name: string;
  email: string;
  password: string;
  avatar: string;
  username: string;
}

type AsyncStorageGetRequestResponse = string | null;

interface AsyncStorageGetRequestProps {
  key: string;
}

interface Action {
  type: string;
  payload: LoginRequestPayload;
}

interface UpdateAvatarAction {
  type: string;
  payload: UpdateAvatarRequestPayload;
}

interface UpdateNameAction {
  type: string;
  payload: UpdateNameRequestPayload;
}

interface UpdateEmailAction {
  type: string;
  payload: UpdateEmailRequestPayload;
}

interface UpdateUsernameAction {
  type: string;
  payload: UpdateUsernameRequestPayload;
}

interface SignupAction {
  type: string;
  payload: SignupRequestPayload;
}

function apiRequestAuthentication({
  email,
  password,
}: ApiRequestAuthenticationProps) {
  return api.post(`/signin`, {
    email,
    password,
  });
}

function apiPostRequestSignup({
  name,
  email,
  password,
  avatar,
  username,
}: ApiPostRequestSignupProps) {
  const form = new FormData();

  form.append(`photo`, { uri: avatar, name: avatar });
  form.append(`email`, email);
  form.append(`full_name`, name);
  form.append(`password`, password);
  form.append(`username`, username);

  return api.post(`/users`, form, {
    headers: {
      Accept: `application/json`,
      'Content-Type': `multipart/form-data`,
    },
  });
}

function asyncStorageGetRequest({ key }: AsyncStorageGetRequestProps) {
  return localStorage.getItem(key);
}

function apiPutRequestUpdateAvatar({ image }: UpdateAvatarRequestPayload) {
  const form = new FormData();
  form.append(`photo`, { uri: image, name: image });

  return api.put(`/profile/avatar`, form);
}

function apiPutRequestUpdateName({ name }: UpdateNameRequestPayload) {
  return api.put(`/profile/name`, {
    name,
  });
}

function apiPutRequestUpdateEmail({ email }: UpdateEmailRequestPayload) {
  return api.put(`/profile/email`, {
    email,
  });
}

function apiPutRequestUpdateUsername({
  username,
}: UpdateUsernameRequestPayload) {
  return api.put(`/profile/username`, {
    username,
  });
}

export function* signup({ payload }: SignupAction) {
  try {
    const { name, email, password, avatar, username } = payload;

    yield call(apiPostRequestSignup, {
      name,
      email,
      password,
      avatar,
      username,
    });

    const response: AxiosResponse<Authentication> = yield call(
      apiRequestAuthentication,
      { email, password },
    );

    const { user, token, refresh_token } = response.data;

    api.defaults.headers.common[`Authorization`] = `Bearer ${token}`;

    yield localStorage.setItem(
      STORAGE_AUTHENTICATION_KEY,
      JSON.stringify({ token, user, refresh_token }),
    );

    yield put(
      loginRequestSuccess({
        user,
        token,
        refresh_token,
      }),
    );
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.data) {
      const { message } = error.response?.data as AxiosErrorResponse;
      toast.error(message);
    } else {
      const { message } = error as ErrorResponse;
      toast.error(message);
    }

    yield put(signupRequestFailure());
    yield put(loginRequestFailure());
  }
}

export function* login({ payload }: Action) {
  try {
    const { email, password } = payload;

    const response: AxiosResponse<Authentication> = yield call(
      apiRequestAuthentication,
      { email, password },
    );

    const { user, token, refresh_token } = response.data;

    console.log(response.data);

    api.defaults.headers.common[`Authorization`] = `Bearer ${token}`;

    yield localStorage.setItem(
      STORAGE_AUTHENTICATION_KEY,
      JSON.stringify({ token, user, refresh_token }),
    );

    yield put(
      loginRequestSuccess({
        user,
        token,
        refresh_token,
      }),
    );
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.data) {
      const { message } = error.response?.data as AxiosErrorResponse;
      toast.error(message);
    } else {
      const { message } = error as ErrorResponse;
      toast.error(message);
    }

    yield put(loginRequestFailure());
  }
}

export function* logout() {
  try {
    yield localStorage.removeItem(STORAGE_AUTHENTICATION_KEY);

    delete api.defaults.headers.common[`Authorization`];

    yield put(logoutRequestSuccess());
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.data) {
      const { message } = error.response?.data as AxiosErrorResponse;
      toast.error(message);
    } else {
      const { message } = error as ErrorResponse;
      toast.error(message);
    }

    yield put(logoutRequestFailure());
  }
}

export function* loadStorageAuth() {
  try {
    const storagedData: AsyncStorageGetRequestResponse = yield call(
      asyncStorageGetRequest,
      { key: STORAGE_AUTHENTICATION_KEY },
    );

    if (!storagedData) throw new Error(`storagedAuth could not be found`);

    const { token, user, refresh_token } = JSON.parse(storagedData);

    api.defaults.headers.common[`Authorization`] = `Bearer ${token}`;

    const data: Authentication = {
      token,
      user,
      refresh_token,
    };

    yield put(loadStorageAuthenticationSuccess(data));
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.data) {
      const { message } = error.response?.data as AxiosErrorResponse;
      toast.error(message);
    } else {
      const { message } = error as ErrorResponse;
      toast.error(message);
    }

    yield put(loadStorageAuthenticationFailure());
  }
}

export function* updateAvatar({ payload }: UpdateAvatarAction) {
  try {
    const { image } = payload;

    const response: AxiosResponse<User> = yield call(
      apiPutRequestUpdateAvatar,
      { image },
    );

    const { data } = response;

    const storagedData: AsyncStorageGetRequestResponse = yield call(
      asyncStorageGetRequest,
      { key: STORAGE_AUTHENTICATION_KEY },
    );

    if (!storagedData) throw new Error(`storagedAuth could not be found`);

    const { token, refresh_token } = JSON.parse(storagedData);

    const authentication: Authentication = {
      token,
      user: data,
      refresh_token,
    };

    yield localStorage.setItem(
      STORAGE_AUTHENTICATION_KEY,
      JSON.stringify(authentication),
    );

    yield put(updateAvatarRequestSuccess(data));

    toast.success(`Seu avatar foi atualizado com sucesso`);
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.data) {
      const { message } = error.response?.data as AxiosErrorResponse;
      toast.error(message);
    } else {
      const { message } = error as ErrorResponse;
      toast.error(message);
    }

    yield put(updateAvatarRequestFailure());
  }
}

export function* updateName({ payload }: UpdateNameAction) {
  try {
    const response: AxiosResponse<User> = yield call(
      apiPutRequestUpdateName,
      payload,
    );

    const { data } = response;

    const storagedData: AsyncStorageGetRequestResponse = yield call(
      asyncStorageGetRequest,
      { key: STORAGE_AUTHENTICATION_KEY },
    );

    if (!storagedData) throw new Error(`storagedAuth could not be found`);

    const { token, refresh_token } = JSON.parse(storagedData);

    const authentication: Authentication = {
      token,
      user: data,
      refresh_token,
    };

    yield localStorage.setItem(
      STORAGE_AUTHENTICATION_KEY,
      JSON.stringify(authentication),
    );

    yield put(updateNameRequestSuccess(data));

    toast.success(`Seu nome foi atualizado com sucesso`);
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.data) {
      const { message } = error.response?.data as AxiosErrorResponse;
      toast.error(message);
    } else {
      const { message } = error as ErrorResponse;
      toast.error(message);
    }

    yield put(updateNameRequestFailure());
  }
}

export function* updateEmail({ payload }: UpdateEmailAction) {
  try {
    const response: AxiosResponse<User> = yield call(
      apiPutRequestUpdateEmail,
      payload,
    );

    const { data } = response;

    const storagedData: AsyncStorageGetRequestResponse = yield call(
      asyncStorageGetRequest,
      { key: STORAGE_AUTHENTICATION_KEY },
    );

    if (!storagedData) throw new Error(`storagedAuth could not be found`);

    const { token, refresh_token } = JSON.parse(storagedData);

    const authentication: Authentication = {
      token,
      user: data,
      refresh_token,
    };

    yield localStorage.setItem(
      STORAGE_AUTHENTICATION_KEY,
      JSON.stringify(authentication),
    );

    yield put(updateEmailRequestSuccess(data));

    toast.success(`Seu email foi atualizado com sucesso`);
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.data) {
      const { message } = error.response?.data as AxiosErrorResponse;
      toast.error(message);
    } else {
      const { message } = error as ErrorResponse;
      toast.error(message);
    }

    yield put(updateEmailRequestFailure());
  }
}

export function* updateUsername({ payload }: UpdateUsernameAction) {
  try {
    const response: AxiosResponse<User> = yield call(
      apiPutRequestUpdateUsername,
      payload,
    );

    const { data } = response;

    const storagedData: AsyncStorageGetRequestResponse = yield call(
      asyncStorageGetRequest,
      { key: STORAGE_AUTHENTICATION_KEY },
    );

    if (!storagedData) throw new Error(`storagedAuth could not be found`);

    const { token, refresh_token } = JSON.parse(storagedData);

    const authentication: Authentication = {
      token,
      user: data,
      refresh_token,
    };

    yield localStorage.setItem(
      STORAGE_AUTHENTICATION_KEY,
      JSON.stringify(authentication),
    );

    yield put(updateUsernameRequestSuccess(data));

    toast.success(`Seu username foi atualizado com sucesso`);
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.data) {
      const { message } = error.response?.data as AxiosErrorResponse;
      toast.error(message);
    } else {
      const { message } = error as ErrorResponse;
      toast.error(message);
    }

    yield put(updateUsernameRequestFailure());
  }
}
