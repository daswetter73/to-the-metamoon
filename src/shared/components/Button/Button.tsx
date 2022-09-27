import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';

import { WalletButton } from './Button.styled';

const Button = () => {
  const { address, isConnected } = useAccount();
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });
  const { disconnect } = useDisconnect();

  if (isConnected)
    return (
      <div>
        Connected to {address}
        <WalletButton onClick={() => disconnect()}>Disconnect</WalletButton>
      </div>
    );
  return <WalletButton onClick={() => connect()}>Connect Wallet</WalletButton>;
};

export { Button };
