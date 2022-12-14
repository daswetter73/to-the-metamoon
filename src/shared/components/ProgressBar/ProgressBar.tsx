import { FC } from 'react';

import { Text, Wrapper } from './ProgressBar.styled';
import { Props } from './types';

const ProgressBar: FC<Props> = ({ currentPercent }) => {
  return (
    <Wrapper currentPercent={currentPercent}>
      <Text>{currentPercent}/100 NFT are already minted</Text>
    </Wrapper>
  );
};

export default ProgressBar;
