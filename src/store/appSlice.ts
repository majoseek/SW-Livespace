import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { AppState } from './types';

const initialState: AppState = {};

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setCurrentPage: (
            state,
            action: PayloadAction<AppState['currentPage']>
        ) => {
            state.currentPage = action.payload;
        },
    },
});

export const { setCurrentPage } = appSlice.actions;

export default appSlice.reducer;
