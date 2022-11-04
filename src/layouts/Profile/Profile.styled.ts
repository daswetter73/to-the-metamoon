import styled from 'styled-components';

const ProgressWrapper = styled.div`
  margin-top: 100px;
`;
const Content = styled.div`
  margin-top: 200px;
  display: flex;
  gap: 50px;
  min-width: 500px;
  @media (max-width: 1260px) {
    margin-top: 70px;
    flex-direction: column;
    min-width: auto;
  }
`;
const MainContent = styled.div``;
export { ProgressWrapper, Content, MainContent };
