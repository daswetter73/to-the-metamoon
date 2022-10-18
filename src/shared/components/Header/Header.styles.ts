import styled from 'styled-components';

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
`;
const Logo = styled.a``;
const Links = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  @media (max-width: 1040px) {
    flex-direction: column;
    padding: 0;
  }
`;
const WalletWrapper = styled.div``;
const StyledLink = styled.a`
  font-weight: 500;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.white};
  text-transform: uppercase;
  padding: 15px 20px;
  cursor: pointer;
`;
const Nav = styled.nav<{ windowWidth: number; isMobileHeaderOpen: boolean }>`
  display: flex;
  @media (max-width: 1040px) {
    display: ${({ isMobileHeaderOpen }) =>
      isMobileHeaderOpen ? 'flex' : 'none'};
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 142px;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 100;
    background: ${({ theme }) => theme.colors.black};
    padding: 60px;
  }
`;

const BurgerMenu = styled.div<{ isMobileHeaderOpen: boolean }>`
  display: flex;
  flex-direction: column;
`;

const Line = styled.div`
  width: 50px;
  height: 5px;
  margin: 5px;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 10px;
`;

const CloseIcon = styled.div`
  width: 48px;
  height: 48px;
  background: url('icons/close.svg');
`;

export {
  Wrapper,
  Logo,
  Links,
  WalletWrapper,
  StyledLink,
  Nav,
  BurgerMenu,
  Line,
  CloseIcon,
};
