import { useEffect, useState } from 'react';

import CoinGescoApi from 'services/api/CoinGescoApi';

import { Amount, Item, Title, Underscore, Wrapper } from './Balance.styled';

const Balance = () => {
  const prices = {
    currentBalance: 1,
    presale: 0.2,
    currentNft: 2,
    totalNft: 5,
    totalCost: 0.2,
  };
  const api = new CoinGescoApi();
  const [rate, setRate] = useState(0);
  useEffect(() => {
    getRate();
  }, []);

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

  async function getRate() {
    const objectRate = await api.getEthereumRate();
    setRate(objectRate.ethereum.usd);
  }

  return (
    <Wrapper>
      {data.map(({ title, amount, id }) => (
        <Item key={id}>
          <Title>{title}</Title>
          <Underscore />
          <Amount>{amount}</Amount>
        </Item>
      ))}
    </Wrapper>
  );
};

export default Balance;
