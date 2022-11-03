import { useContractReads } from 'wagmi';
const useSaleStatus = () => {
  const contractDetails = {
    address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
    abi: JSON.parse(process.env.NEXT_PUBLIC_ABI),
    chainId: Number(process.env.NEXT_PUBLIC_CHAIN_ID),
  };
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
