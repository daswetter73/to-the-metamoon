import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

const Title = styled.h1`
  font-size: 40px;
  margin: 0 0 30px 0;
  font-weight: 500;
  @media (max-width: 560px) {
    font-size: 32px;
  }
`;

const Description = styled.div`
  font-size: 32px;
  margin-bottom: 50px;
  @media (max-width: 560px) {
    font-size: 24px;
  }
`;

const ButtonWrapper = styled.div`
  width: 100%;
  @media (max-width: 560px) {
    display: flex;
    justify-content: center;
  }
`;

export { Wrapper, Title, Description, ButtonWrapper };
