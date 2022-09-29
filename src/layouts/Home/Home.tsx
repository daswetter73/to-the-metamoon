import Image from 'next/image';
import { FC } from 'react';

import BaseLayout from 'layouts/BaseLayout/BaseLayout';
import { Button } from 'shared/components/Button';
import { Header } from 'shared/components/Header';
import { WalletButton } from 'shared/components/WalletButton';

import { Buttons, Description, Title } from './Home.styled';

const Home: FC = () => {
  return (
    <BaseLayout>
      <Header />
      <Title>
        <Image
          src="/img/to-the-metamoon.svg"
          alt="to the metamoon"
          width={544}
          height={244}
        />
      </Title>
      <Description>
        From the creators of the first Cardano NFT-marketplace
      </Description>
      <Buttons>
        <WalletButton />
        <Button href="/mock-address">get whitelisted for airdrop</Button>
      </Buttons>
    </BaseLayout>
  );
};

export default Home;
