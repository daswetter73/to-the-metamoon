import { darkTheme, SwapWidget } from '@uniswap/widgets';
import { FC } from 'react';

import Modal from '../Modal/Modal';
import { Description, Title } from './ModalUniswap.styled';
import { Props } from './types';

const ModalUniswap: FC<Props> = ({ onClose }) => {
  return (
    <Modal onClose={onClose}>
      <Title>Lack of ETH?</Title>
      <Description>Swap your tokens and mint NFT using UniSwap</Description>
      <SwapWidget theme={darkTheme} />
    </Modal>
  );
};

export default ModalUniswap;
