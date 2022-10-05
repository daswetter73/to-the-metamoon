import { FC, useEffect } from 'react';
import { useConnect } from 'wagmi';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';

import { Button } from '../Button';
import { Modal } from '../Modal/Modal';
import { Buttons, Title } from './ModalWallet.styled';
import { Props } from './types';

const ModalWallet: FC<Props> = ({ onClose }) => {
  const metaMask = new MetaMaskConnector();
  const { connect: metaMaskConnect, isSuccess: isSuccessMetaMask } = useConnect(
    {
      connector: metaMask,
    }
  );
  const { connect, connectors, isSuccess } = useConnect();

  useEffect(() => {
    if (isSuccess || isSuccessMetaMask) {
      onClose();
    }
  }, [isSuccess, isSuccessMetaMask]);

  return (
    <Modal onClose={onClose}>
      <Title>Connect wallet</Title>
      <Buttons>
        <Button
          key={metaMask.id}
          onClick={() => metaMaskConnect()}
          isUpperCase={false}
        >
          {metaMask.name}
        </Button>
        {connectors.map((connector) => {
          if (
            connector.id === 'walletConnect' ||
            connector.id === 'coinbaseWallet'
          )
            return (
              <Button
                key={connector.id}
                onClick={() => connect({ connector })}
                isUpperCase={false}
              >
                {connector.name}
              </Button>
            );
        })}
      </Buttons>
    </Modal>
  );
};
export default ModalWallet;
