import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { WagmiConfig, createClient, configureChains, allChains } from 'wagmi';
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet';
import { InjectedConnector } from 'wagmi/connectors/injected';
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

import { store } from 'store/store';
import fonts from 'styles/fonts.module.css';
import { GlobalStyle } from 'styles/global';
import { theme } from 'styles/theme';

const Fonts = createGlobalStyle`
  ${fonts};
`;
const { provider } = configureChains(allChains, [
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
  // const { store } = storeWrapper.useWrappedStore(pageProps);
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Fonts />
      <ThemeProvider theme={theme}>
        <WagmiConfig client={client}>
          <Component {...pageProps} />
        </WagmiConfig>
      </ThemeProvider>
    </Provider>
  );
};

export default MyApp;
