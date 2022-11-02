import { FC } from 'react';

import { StyledButton, StyledLink } from './Button.styled';
import { Props } from './types';

const Button: FC<Props> = ({
  onClick,
  href,
  children,
  type = 'button',
  isUpperCase = false,
  maxWidth,
}) => {
  return href ? (
    <StyledLink href={href} isUpperCase={isUpperCase} maxWidth={maxWidth}>
      {children}
    </StyledLink>
  ) : (
    <StyledButton
      onClick={onClick}
      isUpperCase={isUpperCase}
      type={type}
      maxWidth={maxWidth}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
