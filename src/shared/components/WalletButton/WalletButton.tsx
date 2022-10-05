import { useState, FC, useEffect } from 'react';
import { useAccount, useDisconnect } from 'wagmi';

import { Button } from 'shared/components/Button';
import ModalWallet from 'shared/components/ModalWallet/ModalWallet';

const WalletButton: FC = () => {
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isWalletConnected, setIsWalletConnected] = useState(false);

  useEffect(() => {
    setIsWalletConnected(isConnected);
  }, [isConnected]);

  const handleClick = () => {
    if (isConnected) {
      disconnect();
    } else {
      setIsModalOpen(true);
    }
  };

  return (
    <>
      <Button onClick={handleClick}>
        {isWalletConnected
          ? `${address?.slice(0, 4)}...${address?.slice(
              address.length - 4,
              address.length
            )}`
          : `Connect Wallet`}
      </Button>
      {isModalOpen && <ModalWallet onClose={() => setIsModalOpen(false)} />}
    </>
  );
};

export { WalletButton };
