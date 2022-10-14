import styled from 'styled-components';

const Title = styled.h2`
  font-weight: 600;
  font-size: 36px;
  line-height: 44px;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 40px;
  text-align: center;
  margin: 0 0 30px 0;
  text-align: center;
`;
const Description = styled.div`
  font-weight: 500;
  font-size: 24px;
  line-height: 121%;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 60px;
  text-align: center;
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
export { Title, Description, ButtonWrapper };
