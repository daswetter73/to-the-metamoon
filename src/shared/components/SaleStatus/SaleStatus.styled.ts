import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  align-content: flex-start;
  grid-template-columns: 1fr;
  gap: 40px;
`;

const ItemWrapper = styled.div`
  display: flex;
  align-items: start;
  cursor: pointer;
  @media (max-width: 1260px) {
    justify-content: center;
  }
  @media (max-width: 500px) {
    flex-direction: column;
    gap: 10px;
    align-items: center;
  }
`;

const Item = styled.div<{ isCurrent: boolean }>`
  font-size: 40px;
  margin-right: 10px;
  border-bottom: 1px solid
    ${({ isCurrent }) => (isCurrent ? 'white' : 'transparent')};
  user-select: none;

  @media (max-width: 1260px) {
    font-size: 30px;
  }
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
