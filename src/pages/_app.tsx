import type { AppProps } from 'next/app';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import {
  WagmiConfig,
  createClient,
  configureChains,
  defaultChains,
} from 'wagmi';
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet';
import { InjectedConnector } from 'wagmi/connectors/injected';
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

import fonts from 'styles/fonts.module.css';
import { GlobalStyle } from 'styles/global';
import { theme } from 'styles/theme';

const Fonts = createGlobalStyle`
  ${fonts};
`;
const { provider } = configureChains(defaultChains, [
  alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_MUMBAI_API_KEY }),
  publicProvider(),
]);

const client = createClient({
  autoConnect: true,
  provider,
  connectors: [
    new InjectedConnector(),
    new WalletConnectConnector({
      options: {
        qrcode: true,
      },
    }),
    new CoinbaseWalletConnector({
      options: {
        appName: 'wagmi.sh',
        jsonRpcUrl: process.env.NEXT_PUBLIC_MUMBAI_URL,
      },
    }),
  ],
});

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyle />
      <Fonts />
      <ThemeProvider theme={theme}>
        <WagmiConfig client={client}>
          <Component {...pageProps} />
        </WagmiConfig>
      </ThemeProvider>
    </>
  );
};

export default MyApp;
