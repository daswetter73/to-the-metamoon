import BalanceItem from '../BalanceItem/BalanceItem';
import Button from '../Button/Button';
import {
  BalanceWrapper,
  ButtonWrapper,
  Description,
  Title,
} from './PublicSaleContent.styled';

const PublicSaleContent = () => {
  const { title, amount } = { title: 'Public Price', amount: '0' };

  const handleSubscribeClick = () => {};
  return (
    <>
      <Title>Subscribe to our news!</Title>
      <Description>
        We’ll send you a notification when public sale is available to
        participate
      </Description>
      <BalanceWrapper>
        <BalanceItem title={title} amount={amount} />
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
