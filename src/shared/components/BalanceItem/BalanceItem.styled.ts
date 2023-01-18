import styled from 'styled-components';

const Item = styled.div`
  display: flex;

  @media (max-width: 560px) {
    flex-direction: column;
    gap: 10px;
    align-items: center;
  }
`;

const Title = styled.div`
  width: 100%;
  max-width: max-content;
  margin-right: 20px;
  flex-shrink: 0;
  @media (max-width: 560px) {
    margin-right: 0;
  }
`;

const Underscore = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.white};
  width: 100%;

  @media (max-width: 560px) {
    display: none;
  }
`;

const Amount = styled.div`
  width: 100%;
  min-width: 200px;
  max-width: max-content;
  margin-left: 20px;
  flex-shrink: 0;
  @media (max-width: 1200px) {
    min-width: auto;
  }
  @media (max-width: 560px) {
    margin-left: 0;
  }
`;

export { Item, Title, Underscore, Amount };
