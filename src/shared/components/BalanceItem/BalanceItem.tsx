import { FC } from 'react';

import { Amount, Item, Title, Underscore } from './BalanceItem.styled';
import { Props } from './types';

const BalanceItem: FC<Props> = ({ title, amount }) => {
  return (
    <Item>
      <Title>{title}</Title>
      <Underscore />
      <Amount>{amount}</Amount>
    </Item>
  );
};

export default BalanceItem;
