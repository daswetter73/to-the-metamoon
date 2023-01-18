import Button from '../Button/Button';
import {
  Description,
  Title,
  Wrapper,
  ButtonWrapper,
} from './AirDropContent.styled';
import { notWhitelistedText, whitelistedText } from './data';

const AirDropContent = () => {
  const isWhitelisted = true;
  const text = isWhitelisted ? whitelistedText : notWhitelistedText;

  const handleClaimClick = () => {};

  return (
    <Wrapper>
      <Title>{text.title}</Title>
      <Description>{text.description}</Description>
      <ButtonWrapper>
        <Button isUpperCase={true} onClick={handleClaimClick} maxWidth="250px">
          {text.buttonTitle}
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
};
export default AirDropContent;
