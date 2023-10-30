import { configureStore } from '@reduxjs/toolkit';
import appSlice from './appSlice';
import { starwarsApi } from '../api/index';

export const store = configureStore({
    reducer: {
        app: appSlice,
        [starwarsApi.reducerPath]: starwarsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(starwarsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
