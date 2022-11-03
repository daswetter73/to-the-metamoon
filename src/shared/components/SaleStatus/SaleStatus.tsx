import { FC } from 'react';

import { status } from './data';
import { Item, ItemWrapper, Status, Wrapper } from './SaleStatus.styled';
import { Props } from './types';

const SaleStatus: FC<Props> = ({ data, onItemClick, currentItemId }) => {
  return (
    <Wrapper>
      {data.map(({ title, statusId: currentStatusId, id }) => {
        const statusItem = status.find(({ id: statusId }) => {
          return currentStatusId === statusId;
        });

        return (
          <ItemWrapper key={title} onClick={onItemClick} data-id={id}>
            <Item isCurrent={currentItemId === id}>{title}</Item>
            {statusItem && (
              <Status type={statusItem.title}>{statusItem.title}</Status>
            )}
          </ItemWrapper>
        );
      })}
    </Wrapper>
  );
};

export default SaleStatus;
