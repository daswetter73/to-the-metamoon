import { configureStore, createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

import { reducer as coinGescoReducer } from './slices/coinGesco/reducer';

const hydrateSlice = createSlice({
  name: 'subject',
  initialState: {},
  reducers: {
    setEnt(state, action) {
      return action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.subject,
      };
    },
  },
});

const store = configureStore({
  reducer: {
    [hydrateSlice.name]: hydrateSlice.reducer,
    coinGesco: coinGescoReducer,
  },
});

type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export { store };
export type { AppDispatch };
