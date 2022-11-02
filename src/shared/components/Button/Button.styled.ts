import styled, { css } from 'styled-components';

import { Props } from './types';

const ButtonStyles = (
  isUpperCase: Props['isUpperCase'],
  maxWidth: Props['maxWidth']
) => css`
  color: ${({ theme }) => theme.colors.black};
  padding: 15px 20px;
  border-radius: 10px;
  ${isUpperCase && `text-transform: uppercase`};
  ${maxWidth && `max-width: ${maxWidth}`};
  background-color: ${({ theme }) => theme.colors.primary};
  font-size: 18px;
  outline: none;
  border: none;
  cursor: pointer;
  width: 100%;
  @media (max-width: 500px) {
    font-size: 16px;
  }
  @media (max-width: 370px) {
    font-size: 13px;
  }
`;
const StyledButton = styled.button<{
  isUpperCase: Props['isUpperCase'];
  maxWidth: Props['maxWidth'];
}>`
  ${({ isUpperCase, maxWidth }) => ButtonStyles(isUpperCase, maxWidth)}
`;
const StyledLink = styled.a<{
  isUpperCase: Props['isUpperCase'];
  maxWidth: Props['maxWidth'];
}>`
  ${({ isUpperCase, maxWidth }) => ButtonStyles(isUpperCase, maxWidth)}
  text-decoration: none;
  display: block;
  width: max-content;
`;
export { StyledButton, StyledLink };
