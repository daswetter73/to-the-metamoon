import styled from 'styled-components';

const Title = styled.h1`
  font-weight: 600;
  font-size: 36px;
  line-height: 44px;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 40px;
  text-align: center;
`;

const Buttons = styled.div`
  display: grid;
  gap: 35px;
`;

export { Title, Buttons };
