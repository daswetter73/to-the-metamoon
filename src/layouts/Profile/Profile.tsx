import { useEffect, useState } from 'react';

import BaseLayout from 'layouts/BaseLayout/BaseLayout';
import AirDropContent from 'shared/components/AirDropContent/AirDropContent';
import PresaleContent from 'shared/components/PresaleContent/PresaleContent';
import ProgressBar from 'shared/components/ProgressBar/ProgressBar';
import PublicSaleContent from 'shared/components/PublicSaleContent/PublicSaleContent';
import SaleStatus from 'shared/components/SaleStatus/SaleStatus';
import { useSaleStatus } from 'shared/hooks/useSaleStatus';

import { Content, MainContent, ProgressWrapper } from './Profile.styled';

const Profile = () => {
  const [sidebarItemId, setSidebarItemId] = useState(0);
  const status = useSaleStatus();
  const [airDrop, setAirDrop] = useState({
    title: 'AirDrop',
    statusId: 0,
    id: 0,
  });
  const [privateSale, setPrivateSale] = useState({
    title: 'Private Presale',
    statusId: 0,
    id: 1,
  });
  const [publicSale, setPublicSale] = useState({
    title: 'Public Sale',
    statusId: 0,
    id: 2,
  });

  useEffect(() => {
    setPublicSale({ ...publicSale, statusId: Number(status?.public) });
    setAirDrop({ ...airDrop, statusId: Number(status?.airDrop) });
    setPrivateSale({ ...privateSale, statusId: Number(status?.private) });
  }, []);

  const items = [airDrop, privateSale, publicSale];

  const handleSideBarClick = (event: any) => {
    event.preventDefault();
    if (event.currentTarget !== null) {
      const currentId = (event.currentTarget as HTMLElement).dataset.id;
      const clickedStatus = items.find(({ id }) => Number(currentId) === id);
      setSidebarItemId(clickedStatus?.id || items[0].id);
    }
  };

  const getContent = () => {
    switch (sidebarItemId) {
      case 0:
        return <AirDropContent />;
      case 1:
        return <PresaleContent />;
      case 2:
        return <PublicSaleContent />;
    }
  };

  return (
    <BaseLayout>
      <ProgressWrapper>
        <ProgressBar currentPercent={27} />
      </ProgressWrapper>
      <Content>
        <SaleStatus
          data={items}
          onItemClick={handleSideBarClick}
          currentItemId={sidebarItemId}
        />
        <MainContent>{getContent()}</MainContent>
      </Content>
    </BaseLayout>
  );
};
export { Profile };
