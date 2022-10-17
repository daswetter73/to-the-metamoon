import { useState, FC, useEffect } from 'react';
import { useAccount, useDisconnect, useNetwork, useSwitchNetwork } from 'wagmi';

import ModalWallet from 'shared/components/ModalWallet/ModalWallet';

import Button from '../Button/Button';
import ModalWrongNetwork from '../ModalWrongNetwork/ModalWrongNetwork';

const WalletButton: FC = () => {
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  const { chain } = useNetwork();
  const { switchNetwork } = useSwitchNetwork();

  const [isModalWalletOpen, setIsModalWalletOpen] = useState(false);
  const [isModalWrongNetworkOpen, setIsModalWrongNetworkOpen] = useState(false);
  const [isWalletConnected, setIsWalletConnected] = useState(false);

  useEffect(() => {
    setIsWalletConnected(isConnected);
  }, [isConnected]);

  useEffect(() => {
    if (chain && chain.id !== Number(process.env.NEXT_PUBLIC_CHAIN_ID)) {
      setIsModalWrongNetworkOpen(true);
      setIsModalWalletOpen(false);
    } else {
      setIsModalWrongNetworkOpen(false);
    }
  }, [chain]);

  const handleClick = () => {
    if (isConnected) {
      disconnect();
    } else {
      setIsModalWrongNetworkOpen(false);
      setIsModalWalletOpen(true);
    }
  };

  const handleSwitchNetworkClick = () => {
    if (process.env.NEXT_PUBLIC_CHAIN_ID && switchNetwork) {
      switchNetwork(Number(process.env.NEXT_PUBLIC_CHAIN_ID));
    }
  };

  return (
    <>
      <Button onClick={handleClick} isUpperCase={true}>
        {isWalletConnected
          ? `${address?.slice(0, 4)}...${address?.slice(
              address.length - 4,
              address.length
            )}`
          : `Connect Wallet`}
      </Button>
      {isModalWalletOpen && (
        <ModalWallet onClose={() => setIsModalWalletOpen(false)} />
      )}
      {isModalWrongNetworkOpen && (
        <ModalWrongNetwork
          onClose={() => setIsModalWrongNetworkOpen(false)}
          onButtonClick={handleSwitchNetworkClick}
        />
      )}
    </>
  );
};

export { WalletButton };
