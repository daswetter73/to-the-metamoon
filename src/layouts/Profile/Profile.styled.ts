import styled from 'styled-components';

const ProgressWrapper = styled.div`
  margin-top: 100px;
`;
const Content = styled.div`
  margin-top: 200px;
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 50px;
`;
const MainContent = styled.div``;
const Title = styled.h1`
  font-size: 40px;
  margin: 0 0 30px 0;
  font-weight: 500;
`;
const Description = styled.div`
  font-size: 32px;
  margin-bottom: 30px;
`;
export { ProgressWrapper, Content, MainContent, Title, Description };
