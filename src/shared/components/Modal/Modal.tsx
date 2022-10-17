import Image from 'next/image';
import { FC, MouseEvent } from 'react';

import {
  ModalContainer,
  StyledModal,
  ButtonClose,
  Content,
} from './Modal.styled';
import { Props } from './types';

const Modal: FC<Props> = ({ onClose, children }) => {
  const handleStyledModalClick = (event: MouseEvent) => {
    event.stopPropagation();
  };

  return (
    <ModalContainer onClick={onClose}>
      <StyledModal onClick={handleStyledModalClick}>
        <Content>{children}</Content>

        <ButtonClose onClick={onClose}>
          <Image
            src="/icons/cross.svg"
            width={16}
            height={16}
            alt="close modal window icon"
          />
        </ButtonClose>
      </StyledModal>
    </ModalContainer>
  );
};

export default Modal;
