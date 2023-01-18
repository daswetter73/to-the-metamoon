import { useContractReads } from 'wagmi';

import { contractDetails } from './data';

const useSaleStatus = () => {
  const { data } = useContractReads({
    contracts: [
      {
        functionName: 'airDrop',
        ...contractDetails,
      },
      {
        functionName: 'publicSale',
        ...contractDetails,
      },
      {
        functionName: 'whiteListSale',
        ...contractDetails,
      },
    ],
  });

  if (data) {
    return {
      airDrop: data[0],
      public: data[1],
      private: data[2],
    };
  }
  return null;
};

export { useSaleStatus };
