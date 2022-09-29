import Head from 'next/head';
import { FC } from 'react';

import { Main, Inner } from './BaseLayout.styled';
import { Props } from './types';

const BaseLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Metamoon</title>
      </Head>
      <Main>
        <Inner>{children}</Inner>
      </Main>
    </>
  );
};

export default BaseLayout;
