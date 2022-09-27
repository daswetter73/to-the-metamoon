import { useState, FC, useEffect } from 'react';
import { useAccount } from 'wagmi';

import BaseLayout from 'layouts/BaseLayout/BaseLayout';
import { Button } from 'shared/components/Button';
import ModalWallet from 'shared/components/ModalWallet/ModalWallet';

const Home: FC = () => {
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
      <BaseLayout>
        <Button onClick={handleClick}>
          {isWalletConnected ? `Connected to ${address}` : `Connect Wallet`}
        </Button>
      </BaseLayout>
      {isModalOpen && <ModalWallet onClose={() => setIsModalOpen(false)} />}
    </>
  );
};

export default Home;
