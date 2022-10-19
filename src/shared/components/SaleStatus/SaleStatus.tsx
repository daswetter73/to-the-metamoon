import { Item, ItemWrapper, Status, Wrapper } from './SaleStatus.styled';

const SaleStatus = () => {
  const sales: {
    title: string;
    status: 'Available now' | 'Soon' | 'Finished';
  }[] = [
    { title: 'AirDrop', status: 'Available now' },
    { title: 'Private Presale', status: 'Available now' },
    { title: 'Public Sale', status: 'Soon' },
  ];
  return (
    <Wrapper>
      {sales.map(({ title, status }) => {
        return (
          <ItemWrapper>
            <Item>{title}</Item>
            <Status type={status}>{status}</Status>
          </ItemWrapper>
        );
      })}
    </Wrapper>
  );
};
export default SaleStatus;
