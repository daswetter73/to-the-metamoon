import Image from 'next/image';
import Link from 'next/link';

import { WalletButton } from '../WalletButton/WalletButton';
import {
  Links,
  Logo,
  WalletWrapper,
  Wrapper,
  StyledLink,
  Nav,
} from './Header.styles';

const Header = () => {
  const links = [
    { title: 'about us', href: '/about-us' },
    { title: 'roadmap', href: '/roadmap' },
    { title: 'team', href: '/team' },
    { title: 'community', href: '/community' },
  ];

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

      <Nav>
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

export { Header };
