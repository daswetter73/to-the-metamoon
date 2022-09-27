import { FC } from 'react';
import { useAccount, useConnect } from 'wagmi';

import { Button } from '../Button';
import { Modal } from '../Modal/Modal';
import { Props } from './types';

const ModalWallet: FC<Props> = ({ onClose }) => {
  const { connector: activeConnector } = useAccount();
  const { connect, connectors, isLoading, pendingConnector } = useConnect();
  console.log(connectors);

  return (
    <Modal onClose={onClose}>
      {activeConnector && <div>Connected to {activeConnector.name}</div>}

      {connectors.map((connector) => (
        <Button key={connector.id} onClick={() => connect({ connector })}>
          {connector.name}
          {isLoading &&
            pendingConnector?.id === connector.id &&
            ' (connecting)'}
        </Button>
      ))}
    </Modal>
  );
};
export default ModalWallet;
