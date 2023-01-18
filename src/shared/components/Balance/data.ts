import { Prices } from './types';

const getData = (prices: Prices, rate: number) => [
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

export { getData };
