import { FC } from 'react';

import { Amount, Item, Title, Underscore } from './BalanceItem.styled';
import { Props } from './types';

const BalanceItem: FC<Props> = ({ id, title, amount }) => {
  return (
    <Item key={id}>
      <Title>{title}</Title>
      <Underscore />
      <Amount>{amount}</Amount>
    </Item>
  );
};

export default BalanceItem;
