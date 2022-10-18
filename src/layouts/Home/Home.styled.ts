import styled from 'styled-components';

const Title = styled.div`
  width: 100%;
  max-width: 544px;
  margin: 100px 0 30px;
  @media (max-width: 500px) {
    margin: 50px 0 30px;
  }
  @media (max-height: 800px) {
    margin: 30px 0 30px;
  }
`;
const Description = styled.div`
  width: 100%;
  max-width: 355px;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 30px;
`;
const SocialsWrapper = styled.div`
  position: fixed;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
  @media (max-height: 800px) {
    position: static;
    bottom: auto;
    left: auto;
    transform: none;
    margin: 40px 0;
  }
`;
const GetWhitelistedButtonWrapper = styled.div`
  max-width: 350px;
`;
export { Title, Description, SocialsWrapper, GetWhitelistedButtonWrapper };
