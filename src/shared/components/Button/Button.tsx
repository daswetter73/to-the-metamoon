import { FC } from 'react';

import { StyledButton, StyledLink } from './Button.styled';
import { Props } from './types';

const Button: FC<Props> = ({ onClick, href, children }) => {
  return href ? (
    <StyledLink href={href}>{children}</StyledLink>
  ) : (
    <StyledButton onClick={onClick}>{children}</StyledButton>
  );
};

export { Button };
