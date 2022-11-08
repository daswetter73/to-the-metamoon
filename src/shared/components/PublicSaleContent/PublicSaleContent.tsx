import { usePublicPrice } from 'shared/hooks/usePublicPrice';

import BalanceItem from '../BalanceItem/BalanceItem';
import Button from '../Button/Button';
import {
  BalanceWrapper,
  ButtonWrapper,
  Description,
  Title,
} from './PublicSaleContent.styled';

const PublicSaleContent = () => {
  const amount = usePublicPrice();
  const title = 'Public Price';

  const handleSubscribeClick = () => {};
  return (
    <>
      <Title>Subscribe to our news!</Title>
      <Description>
        We’ll send you a notification when public sale is available to
        participate
      </Description>
      <BalanceWrapper>
        <BalanceItem title={title} amount={String(amount)} />
      </BalanceWrapper>
      <ButtonWrapper>
        <Button
          isUpperCase={true}
          maxWidth="200px"
          onClick={handleSubscribeClick}
        >
          subscribe
        </Button>
      </ButtonWrapper>
    </>
  );
};

export default PublicSaleContent;
