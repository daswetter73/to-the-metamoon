import { useContractRead } from 'wagmi';

const usePublicPrice = () => {
  const contractDetails = {
    address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
    abi: JSON.parse(process.env.NEXT_PUBLIC_ABI),
    chainId: Number(process.env.NEXT_PUBLIC_CHAIN_ID),
  };
  const { data } = <{ data: { _hex: string; _isBigNumber: boolean } }>(
    useContractRead({
      functionName: 'publicSalePrice',
      ...contractDetails,
    })
  );
  console.log(data);

  if (data) {
    const fromHexToDecimal = parseInt(data._hex, 16);
    return fromHexToDecimal;
  }
  return null;
};

export { usePublicPrice };
