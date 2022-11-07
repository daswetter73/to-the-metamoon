import Link from 'next/link';
import { useState, FC, useEffect, useRef } from 'react';
import { useAccount, useDisconnect, useNetwork, useSwitchNetwork } from 'wagmi';

import ModalWallet from 'shared/components/ModalWallet/ModalWallet';

import Button from '../Button/Button';
import ModalWrongNetwork from '../ModalWrongNetwork/ModalWrongNetwork';
import {
  Dropdown,
  DropdownItem,
  DropdownLink,
  Wrapper,
} from './WalletButton.styled';

const WalletButton: FC = () => {
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  const { chain } = useNetwork();
  const { switchNetwork } = useSwitchNetwork();

  const [isModalWalletOpen, setIsModalWalletOpen] = useState(false);
  const [isModalWrongNetworkOpen, setIsModalWrongNetworkOpen] = useState(false);
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const wrapper = useRef(null);

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

  const handleMainButtonClick = () => {
    if (isConnected) {
      setIsDropdownOpen(true);
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

  const handleDisconnectClick = () => {
    disconnect();
  };

  const handleWrapperBlur = () => {
    setTimeout(() => {
      setIsDropdownOpen(false);
    }, 200);
  };

  return (
    <Wrapper onBlur={handleWrapperBlur} tabIndex={0} ref={wrapper}>
      <Button onClick={handleMainButtonClick} isUpperCase={true}>
        {isWalletConnected
          ? `${address?.slice(0, 4)}...${address?.slice(
              address.length - 4,
              address.length
            )}`
          : `Connect Wallet`}
      </Button>
      {isDropdownOpen && isWalletConnected && (
        <Dropdown>
          <DropdownItem onClick={handleDisconnectClick}>
            Disconnect
          </DropdownItem>
          <Link href={'/profile'} passHref>
            <DropdownLink>My NFT</DropdownLink>
          </Link>
        </Dropdown>
      )}
      {isModalWalletOpen && (
        <ModalWallet onClose={() => setIsModalWalletOpen(false)} />
      )}
      {isModalWrongNetworkOpen && (
        <ModalWrongNetwork
          onClose={() => setIsModalWrongNetworkOpen(false)}
          onButtonClick={handleSwitchNetworkClick}
        />
      )}
    </Wrapper>
  );
};

export { WalletButton };
