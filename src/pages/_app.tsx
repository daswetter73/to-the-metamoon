import type { AppProps } from 'next/app';
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

const { provider } = configureChains(defaultChains, [
  alchemyProvider({ apiKey: 'yourAlchemyApiKey' }),
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
        jsonRpcUrl: process.env.NEXT_PUBLIC_GOERLI_RPC_URL,
      },
    }),
  ],
});

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <WagmiConfig client={client}>
      <Component {...pageProps} />
    </WagmiConfig>
  );
};

export default MyApp;
