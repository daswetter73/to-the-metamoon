import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  gap: 50px;
  grid-template-columns: repeat(4, max-content);
  width: max-content;
  padding: 10px 40px;
  border-radius: 20px;
  background: ${({ theme }) => theme.colors.primary}B2;
`;

export { Wrapper };
