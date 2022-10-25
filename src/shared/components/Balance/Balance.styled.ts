import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 800px;
  width: 100%;
`;
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
export { Wrapper, Item, Title, Underscore, Amount };
