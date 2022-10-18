import styled from 'styled-components';
const Content = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  background-size: cover;
  background: linear-gradient(
    -45deg,
    rgba(112, 0, 255, 0.77) 13.35%,
    rgba(250, 0, 255, 0) 100%
  );
`;
const Main = styled.main``;

const Inner = styled.div`
  width: 85%;
`;

export { Main, Inner, Content };
