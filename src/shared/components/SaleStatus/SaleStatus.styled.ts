import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
`;
const ItemWrapper = styled.div`
  display: flex;
  align-items: start;
`;
const Item = styled.div`
  font-size: 40px;
  margin-right: 10px;
`;
const Status = styled.div<{ type: 'Available now' | 'Soon' | 'Finished' }>`
  font-size: 13px;
  border-radius: 10px;
  padding: 5px 20px;
  border: 1px solid
    ${({ type, theme }) =>
      type === 'Available now'
        ? theme.colors.secondary
        : theme.colors.borderColor};
`;
export { Wrapper, ItemWrapper, Item, Status };
