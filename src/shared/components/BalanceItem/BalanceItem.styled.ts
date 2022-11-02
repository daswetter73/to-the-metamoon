import styled from 'styled-components';

const Item = styled.div`
  display: flex;
`;
const Title = styled.div`
  width: 100%;
  max-width: max-content;
  margin-right: 20px;
`;
const Underscore = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.white};
  width: 100%;
`;
const Amount = styled.div`
  width: 100%;
  min-width: 200px;
  max-width: max-content;
  margin-left: 20px;
`;
export { Item, Title, Underscore, Amount };
