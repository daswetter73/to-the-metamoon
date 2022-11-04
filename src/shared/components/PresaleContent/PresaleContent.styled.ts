import styled from 'styled-components';

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
  margin-bottom: 30px;
  @media (max-width: 560px) {
    font-size: 24px;
  }
`;

export { Title, Description };
