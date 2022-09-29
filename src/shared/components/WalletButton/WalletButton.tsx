import { useState, FC, useEffect } from 'react';
import { useAccount } from 'wagmi';

import { Button } from 'shared/components/Button';
import ModalWallet from 'shared/components/ModalWallet/ModalWallet';

const WalletButton: FC = () => {
  const { address, isConnected } = useAccount();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isWalletConnected, setIsWalletConnected] = useState(false);

  useEffect(() => {
    setIsWalletConnected(isConnected);
  }, [isConnected]);

  const handleClick = () => {
    !isConnected && setIsModalOpen(true);
  };

  return (
    <>
      <Button onClick={handleClick}>
        {isWalletConnected ? `Connected to ${address}` : `Connect Wallet`}
      </Button>
      {isModalOpen && <ModalWallet onClose={() => setIsModalOpen(false)} />}
    </>
  );
};

export { WalletButton };
