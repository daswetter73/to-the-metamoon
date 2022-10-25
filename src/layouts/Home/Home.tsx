import Image from 'next/image';
import { FC, useState } from 'react';

import BaseLayout from 'layouts/BaseLayout/BaseLayout';
import Button from 'shared/components/Button/Button';
import { ModalGetWhitelisted } from 'shared/components/ModalGetWhitelisted/ModalGetWhitelisted';
import Socials from 'shared/components/Socials/Socials';

import {
  Description,
  Title,
  SocialsWrapper,
  GetWhitelistedButtonWrapper,
} from './Home.styled';

const Home: FC = () => {
  const [isModalGetWhitelistedOpen, setIsModalGetWhitelistedOpen] =
    useState(false);
  return (
    <BaseLayout>
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

      <GetWhitelistedButtonWrapper>
        <Button
          onClick={() => setIsModalGetWhitelistedOpen(true)}
          isUpperCase={true}
        >
          get whitelisted for airdrop
        </Button>
      </GetWhitelistedButtonWrapper>

      {isModalGetWhitelistedOpen && (
        <ModalGetWhitelisted
          onClose={() => setIsModalGetWhitelistedOpen(false)}
        />
      )}
      <SocialsWrapper>
        <Socials />
      </SocialsWrapper>
    </BaseLayout>
  );
};

export default Home;
