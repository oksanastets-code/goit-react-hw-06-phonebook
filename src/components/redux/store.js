import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// import { setupListeners } from '@reduxjs/toolkit/query';
import logger from 'redux-logger';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import phonebookReducer from './PhoneBook/phone-book-reducer';
// import { PhoneBookApi } from './phone-book-api';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  // logger,
];

export const store = configureStore({
  reducer: {
    phonebook: phonebookReducer,
    // [PhoneBookApi.reducerPath]: PhoneBookApi.reducer,
  },
  // middleware: getDefaultMiddleware => [
  //   ...getDefaultMiddleware(),
    middleware,
    // PhoneBookApi.middleware,
  // ],
  // devTools: process.env.NODE_ENV === 'development',
});
// export const persistor = persistStore(store);
// setupListeners(store.dispatch);