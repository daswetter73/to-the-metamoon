import { FC } from 'react';

import { Input } from './TextField.styled';
import { Props } from './types';

const TextField: FC<Props> = ({ type = 'text', placeholder = '', name }) => {
  return <Input type={type} placeholder={placeholder} name={name} />;
};
export { TextField };
