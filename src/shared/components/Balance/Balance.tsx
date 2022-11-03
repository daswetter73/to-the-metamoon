import { useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector } from 'store/hooks';
import { getRateFromCoinGesco } from 'store/slices/coinGesco/thunk';
import { State as CoinGescoState } from 'store/slices/coinGesco/types';

import BalanceItem from '../BalanceItem/BalanceItem';
import { Wrapper } from './Balance.styled';

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

  const data = [
    {
      title: 'Your balance',
      amount: `${prices.currentBalance} ETH ($${rate * prices.currentBalance})`,
      id: 1,
    },
    {
      title: 'Presale Price',
      amount: `${prices.presale} ETH ($${
        Math.floor(rate * prices.presale * 100) / 100
      })`,
      id: 2,
    },
    {
      title: 'Amount of NFT',
      amount: `${prices.currentNft}/${prices.totalNft}`,
      id: 3,
    },
    {
      title: 'Total Cost',
      amount: `${prices.totalCost} ETH ($${
        Math.floor(rate * prices.totalCost * 100) / 100
      })`,
      id: 4,
    },
  ];

  return (
    <Wrapper>
      {data.map(({ title, amount, id }) => (
        <BalanceItem title={title} amount={amount} key={id} />
      ))}
    </Wrapper>
  );
};

export default Balance;
