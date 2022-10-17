import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { useWindowDimensions } from 'shared/hooks/useWindowDimensions';

import { WalletButton } from '../WalletButton/WalletButton';
import {
  Links,
  Logo,
  WalletWrapper,
  Wrapper,
  StyledLink,
  Nav,
  BurgerMenu,
  Line,
  CloseIcon,
} from './Header.styles';

const Header = () => {
  const links = [
    { title: 'about us', href: '/about-us' },
    { title: 'roadmap', href: '/roadmap' },
    { title: 'team', href: '/team' },
    { title: 'community', href: '/community' },
  ];

  const { windowWidth } = useWindowDimensions();

  const [isMobileHeaderOpen, setIsMobileHeaderOpen] = useState(false);

  return (
    <Wrapper>
      <Link href="/" passHref>
        <Logo>
          <Image
            src="/img/metalamp-logo.svg"
            alt="metalamp logo"
            width={92}
            height={98}
          />
        </Logo>
      </Link>

      {windowWidth < 1040 && (
        <BurgerMenu
          onClick={() => setIsMobileHeaderOpen(!isMobileHeaderOpen)}
          isMobileHeaderOpen={isMobileHeaderOpen}
        >
          {isMobileHeaderOpen ? (
            <CloseIcon />
          ) : (
            <>
              <Line />
              <Line />
              <Line />
            </>
          )}
        </BurgerMenu>
      )}

      <Nav windowWidth={windowWidth} isMobileHeaderOpen={isMobileHeaderOpen}>
        <Links>
          {links.map(({ title, href }) => {
            return (
              <Link href={href} key={href}>
                <StyledLink>{title}</StyledLink>
              </Link>
            );
          })}
        </Links>
        <WalletWrapper>
          <WalletButton />
        </WalletWrapper>
      </Nav>
    </Wrapper>
  );
};

export default Header;
