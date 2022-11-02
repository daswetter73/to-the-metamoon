import { useEffect, useState } from 'react';
import { useContractReads } from 'wagmi';

import BaseLayout from 'layouts/BaseLayout/BaseLayout';
import Balance from 'shared/components/Balance/Balance';
import ProgressBar from 'shared/components/ProgressBar/ProgressBar';
import SaleStatus from 'shared/components/SaleStatus/SaleStatus';

import {
  Content,
  MainContent,
  ProgressWrapper,
  Title,
  Description,
} from './Profile.styled';
const Profile = () => {
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
  const [status, setStatus] = useState([
    { title: 'AirDrop', statusId: 0 },
    { title: 'Private Presale', statusId: 0 },
    { title: 'Public Sale', statusId: 0 },
  ]);
  useEffect(() => {
    if (Array.isArray(data)) {
      const [airDropStatus, publicSaleStatus, whiteListSale] = data;
      setStatus([
        { title: 'AirDrop', statusId: Number(airDropStatus) },
        { title: 'Private Presale', statusId: Number(whiteListSale) },
        { title: 'Public Sale', statusId: Number(publicSaleStatus) },
      ]);
    }
  }, [data]);

  return (
    <BaseLayout>
      <ProgressWrapper>
        <ProgressBar currentPercent={27} />
      </ProgressWrapper>
      <Content>
        <SaleStatus data={status} />
        <MainContent>
          <Title>Be an early bird!</Title>
          <Description>
            Choose the amount of tokens you want to buy and make a payment in
            any token.
          </Description>
          <Balance />
        </MainContent>
      </Content>
    </BaseLayout>
  );
};
export { Profile };
