import { FC } from 'react';

import { StyledButton, StyledLink } from './Button.styled';
import { Props } from './types';

const Button: FC<Props> = ({
  onClick,
  href,
  children,
  isUpperCase = false,
}) => {
  return href ? (
    <StyledLink href={href} isUpperCase={isUpperCase}>
      {children}
    </StyledLink>
  ) : (
    <StyledButton onClick={onClick} isUpperCase={isUpperCase}>
      {children}
    </StyledButton>
  );
};

export { Button };
