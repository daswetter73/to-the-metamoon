import { getDefaultProvider } from 'ethers';
import type { AppProps } from 'next/app';
import { WagmiConfig, createClient } from 'wagmi';

const client = createClient({
  autoConnect: true,
  provider: getDefaultProvider(),
});

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <WagmiConfig client={client}>
      <Component {...pageProps} />
    </WagmiConfig>
  );
};

export default MyApp;
