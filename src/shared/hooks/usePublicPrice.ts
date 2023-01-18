import { useContractRead } from 'wagmi';

import { contractDetails } from './data';

const usePublicPrice = () => {
  const { data } = <{ data: { _hex: string; _isBigNumber: boolean } }>(
    useContractRead({
      functionName: 'publicSalePrice',
      ...contractDetails,
    })
  );

  if (data) {
    const fromHexToDecimal = parseInt(data._hex, 16);
    return fromHexToDecimal;
  }
  return null;
};

export { usePublicPrice };
