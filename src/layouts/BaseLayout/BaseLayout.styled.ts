import styled from 'styled-components';

const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  background-image: url('/backgrounds/main.svg');
  background-size: cover;
`;

const Inner = styled.div`
  width: 85%;
`;

export { Content, Inner };
