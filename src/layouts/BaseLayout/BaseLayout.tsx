import Head from 'next/head';
import { FC } from 'react';

import Header from 'shared/components/Header/Header';

import { Content, Inner, Main } from './BaseLayout.styled';
import { Props } from './types';

const BaseLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Metamoon</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <meta name="description" content="" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicons/site.webmanifest" />

        <meta name="msapplication-TileColor" content="#2b5797" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Content>
        <Inner>
          <Header />
          <Main>{children}</Main>
        </Inner>
      </Content>
    </>
  );
};

export default BaseLayout;
