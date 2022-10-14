import { FC } from 'react';

import { Button } from '../Button';
import { Modal } from '../Modal/Modal';
import { Description, Title, ButtonWrapper } from './ModalWrongNetwork.styled';
import { Props } from './types';

const ModalWrongNetwork: FC<Props> = ({ onClose, onButtonClick }) => {
  return (
    <Modal onClose={onClose}>
      <Title>Switch the network</Title>
      <Description>
        It seems like your network is not Goerli. Please switch the network
        using your wallet or allow our system to do it.
      </Description>
      <ButtonWrapper>
        <Button onClick={onButtonClick} isUpperCase={true}>
          switch to goerli
        </Button>
      </ButtonWrapper>
    </Modal>
  );
};

export default ModalWrongNetwork;
