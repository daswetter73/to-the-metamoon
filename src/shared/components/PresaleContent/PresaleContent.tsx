import Balance from '../Balance/Balance';
import { Description, Title } from './PresaleContent.styled';

const PresaleContent = () => {
  return (
    <>
      <Title>Be an early bird!</Title>
      <Description>
        Choose the amount of tokens you want to buy and make a payment in any
        token.
      </Description>
      <Balance />
    </>
  );
};

export default PresaleContent;
