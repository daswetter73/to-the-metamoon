import styled from 'styled-components';

const Wrapper = styled.div<{ currentPercent: number }>`
  display: flex;
  justify-content: center;
  padding: 10px 20px;
  width: 100%;
  background: ${({ currentPercent }) =>
    `linear-gradient(90deg, rgba(112, 0, 255, 0.77) ${
      currentPercent - 5
    }%, #000000 ${currentPercent}%)`};
  border-radius: 20px;
`;
const Text = styled.div``;
export { Wrapper, Text };
