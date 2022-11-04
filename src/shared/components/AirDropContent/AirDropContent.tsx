import Button from '../Button/Button';
import {
  Description,
  Title,
  Wrapper,
  ButtonWrapper,
} from './AirDropContent.styled';

const AirDropContent = () => {
  const isWhitelisted = false;

  const handleClaimClick = () => {};
  const whitelisted = (
    <Wrapper>
      <Title>Congratulations!</Title>
      <Description>
        Your wallet has been whitelisted! Claim your NFT now!
      </Description>
      <Button isUpperCase={true} onClick={handleClaimClick} maxWidth="150px">
        claim nft
      </Button>
    </Wrapper>
  );

  const notWhitelisted = (
    <Wrapper>
      <Title>You’re not whitelisted yet :&nbsp;(</Title>
      <Description>
        To participate in AirDrop please send us an information about your
        project
      </Description>
      <ButtonWrapper>
        <Button isUpperCase={true} onClick={handleClaimClick} maxWidth="250px">
          get whitelisted
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );

  return isWhitelisted ? whitelisted : notWhitelisted;
};
export default AirDropContent;
