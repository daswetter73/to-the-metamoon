import { AsyncThunkPayloadCreator, createAsyncThunk } from '@reduxjs/toolkit';

import Api from 'services/api/Api';
import { COMMON_ERROR } from 'services/api/errors';

const getRate: AsyncThunkPayloadCreator<unknown> = async (
  _,
  { rejectWithValue }
) => {
  const api = new Api();
  try {
    return await api.coinGescoApi.getEthereumRate();
  } catch (error) {
    return rejectWithValue(COMMON_ERROR);
  }
};

const getRateFromCoinGesco = createAsyncThunk('/coinGesco', getRate);

export { getRateFromCoinGesco };
