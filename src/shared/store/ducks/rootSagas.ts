import { all, takeLatest } from 'redux-saga/effects';
import { AuthenticationTypes } from './authentication/types';

import {
  login,
  logout,
  signup,
  loadStorageAuth,
  updateAvatar,
  updateName,
  updateEmail,
  updateUsername,
} from './authentication/sagas';

const {
  LOAD_STORAGED_AUTHENTICATION_REQUEST,
  LOAD_AUTHENTICATION_REQUEST,
  UPDATE_AVATAR_REQUEST,
  UPDATE_NAME_REQUEST,
  UPDATE_EMAIL_REQUEST,
  UPDATE_USERNAME_REQUEST,
  SIGNUP_REQUEST,
  LOGOUT_REQUEST,
} = AuthenticationTypes;

export interface AxiosErrorResponse {
  message: string;
}

export interface ErrorResponse {
  message: string;
}

export default function* rootSaga() {
  yield all([
    takeLatest(LOGOUT_REQUEST, logout),
    takeLatest(SIGNUP_REQUEST, signup),
    takeLatest(LOAD_AUTHENTICATION_REQUEST, login),
    takeLatest(UPDATE_AVATAR_REQUEST, updateAvatar),
    takeLatest(LOAD_STORAGED_AUTHENTICATION_REQUEST, loadStorageAuth),
    takeLatest(UPDATE_NAME_REQUEST, updateName),
    takeLatest(UPDATE_EMAIL_REQUEST, updateEmail),
    takeLatest(UPDATE_USERNAME_REQUEST, updateUsername),
  ]);
}
