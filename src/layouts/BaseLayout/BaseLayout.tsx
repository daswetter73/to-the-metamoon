import Head from 'next/head';
import { FC } from 'react';

import { Content, Inner } from './BaseLayout.styled';
import { Props } from './types';

const BaseLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Metamoon</title>
      </Head>
      <Content>
        <Inner>{children}</Inner>
      </Content>
    </>
  );
};

export default BaseLayout;
