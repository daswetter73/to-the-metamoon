import styled from 'styled-components';

const Main = styled.main`
  position: relative;
`;
const Title = styled.div`
  width: 100%;
  max-width: 544px;
  margin: 100px 0 30px;
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
const Buttons = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  gap: 20px;
`;
const SocialsWrapper = styled.div`
  position: fixed;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
`;

export { Title, Description, Buttons, Main, SocialsWrapper };
