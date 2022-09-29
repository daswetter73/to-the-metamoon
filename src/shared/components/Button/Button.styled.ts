import styled, { css } from 'styled-components';

const ButtonStyles = css`
  color: ${({ theme }) => theme.colors.black};
  padding: 15px 20px;
  border-radius: 10px;
  text-transform: uppercase;
  background-color: ${({ theme }) => theme.colors.primary};
  font-size: 18px;
  outline: none;
  border: none;
  cursor: pointer;
`;
const StyledButton = styled.button`
  ${ButtonStyles}
`;
const StyledLink = styled.a`
  ${ButtonStyles};
  text-decoration: none;
`;
export { StyledButton, StyledLink };
