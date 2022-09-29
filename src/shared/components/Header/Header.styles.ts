import styled from 'styled-components';

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
`;
const Logo = styled.a``;
const Links = styled.ul``;
const WalletWrapper = styled.div``;
const StyledLink = styled.a`
  font-weight: 500;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.white};
  text-transform: uppercase;
  padding: 15px 20px;
  cursor: pointer;
`;
const Nav = styled.nav`
  display: flex;
`;

export { Wrapper, Logo, Links, WalletWrapper, StyledLink, Nav };
