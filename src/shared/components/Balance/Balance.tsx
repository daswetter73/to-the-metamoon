import { useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector } from 'store/hooks';
import { getRateFromCoinGesco } from 'store/slices/coinGesco/thunk';
import { State as CoinGescoState } from 'store/slices/coinGesco/types';

import BalanceItem from '../BalanceItem/BalanceItem';
import { Wrapper } from './Balance.styled';
import { getData } from './data';

const Balance = () => {
  const prices = {
    currentBalance: 1,
    presale: 0.2,
    currentNft: 2,
    totalNft: 5,
    totalCost: 0.2,
  };
  const [rate, setRate] = useState(0);
  const dispatch = useAppDispatch();

  const {
    coinGesco: { ethereumRate },
  } = useAppSelector((state: { coinGesco: CoinGescoState }) => state);

  useEffect(() => {
    dispatch(getRateFromCoinGesco());
  }, []);

  useEffect(() => {
    setRate(ethereumRate);
  }, [ethereumRate]);

  return (
    <Wrapper>
      {getData(prices, rate).map(({ title, amount, id }) => (
        <BalanceItem title={title} amount={amount} key={id} />
      ))}
    </Wrapper>
  );
};

export default Balance;
