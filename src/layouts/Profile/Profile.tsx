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
  return (
    <BaseLayout>
      <ProgressWrapper>
        <ProgressBar currentPercent={27} />
      </ProgressWrapper>
      <Content>
        <SaleStatus />
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
