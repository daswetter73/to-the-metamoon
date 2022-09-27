import Head from 'next/head';
import { FC } from 'react';

import { Props } from './types';

const BaseLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Metamoon</title>
      </Head>
      <main>{children}</main>
    </>
  );
};

export default BaseLayout;
