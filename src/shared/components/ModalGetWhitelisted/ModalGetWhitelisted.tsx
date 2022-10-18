import { FC } from 'react';

import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import TextArea from '../TextArea/TextArea';
import { TextField } from '../TextField/TextField';
import {
  Title,
  Description,
  FormWrapper,
  ButtonWrapper,
} from './ModalGetWhitelisted.styled';
import { Props } from './types';

const ModalGetWhitelisted: FC<Props> = ({ onClose }) => {
  return (
    <Modal onClose={onClose}>
      <form
        method="post"
        // eslint-disable-next-line max-len
        action="https://script.google.com/macros/s/AKfycbz9KbRacV4_gZb8DnAx8iRuFrMUCTJN1rqpog5Ywj7ccKlOMJZJTec4a62_5eaWpA6Cvw/exec"
        target="_blank"
      >
        <Title>To get whitelisted for an AirDrop</Title>
        <Description>
          send us an information about your project you want us to participate
          in
        </Description>
        <FormWrapper>
          <TextField placeholder="Contacts" name="contacts" />
          <TextField placeholder="Wallet address" name="wallet address" />
          <TextArea placeholder="Project info" rows={4} name="project info" />
        </FormWrapper>
        <ButtonWrapper>
          <Button isUpperCase={true} type="submit">
            Send
          </Button>
        </ButtonWrapper>
      </form>
    </Modal>
  );
};

export { ModalGetWhitelisted };
