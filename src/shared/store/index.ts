import {
  configureStore,
  Store,
  applyMiddleware,
  ConfigureStoreOptions,
  CombinedState,
} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './ducks/rootReducer';
import preloadedAuthenticationState from './ducks/authentication/preloadedAuthenticationState';

import { AuthenticationState } from './ducks/authentication/types';

import rootSaga from './ducks/rootSagas';

const sagaMiddleware = createSagaMiddleware();

export interface ApplicationState {
  authentication: AuthenticationState;
}

const store: Store<ApplicationState> = configureStore({
  reducer: rootReducer,
  middleware(getDefaultMiddlewares) {
    return getDefaultMiddlewares().concat(sagaMiddleware);
  },
  // preloadedState: {
  //   authentication: preloadedAuthenticationState(),
  // },
});

sagaMiddleware.run(rootSaga);

export default store;
