import { FC } from 'react';

import { StyledTextArea } from './TextArea.styled';
import { Props } from './types';

const TextArea: FC<Props> = ({ placeholder = '', rows = 2, name }) => {
  return (
    <StyledTextArea
      placeholder={placeholder}
      rows={rows}
      name={name}
    ></StyledTextArea>
  );
};
export default TextArea;
