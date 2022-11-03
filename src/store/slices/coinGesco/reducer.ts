import { createSlice } from '@reduxjs/toolkit';

import { initialState } from './constants';
import { getRateFromCoinGesco } from './thunk';
import { ErrorType, State } from './types';

const {
  reducer,
  actions: { resetStatus, clearError },
} = createSlice({
  name: 'coinGesco',
  initialState: initialState,
  reducers: {
    resetStatus: (state: State) => {
      state.status = 'idle';
    },
    clearError: (state: State) => {
      state.error = null;
    },
  },

  extraReducers: {
    [getRateFromCoinGesco.pending.type]: (state: State) => {
      state.status = 'start';
    },

    [getRateFromCoinGesco.fulfilled.type]: (
      state: State,
      { payload }: { payload: number }
    ) => {
      state.status = 'success';
      state.ethereumRate = payload;
    },

    [getRateFromCoinGesco.rejected.type]: (
      state: State,
      { payload }: { payload: ErrorType }
    ) => {
      state.status = 'error';
      state.error = payload;
    },
  },
});

export { reducer, resetStatus, clearError };
