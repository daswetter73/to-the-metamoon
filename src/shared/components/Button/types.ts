import { ReactNode } from 'react';
interface Props {
  children: ReactNode;
  isUpperCase?: boolean;
  onClick?: () => void;
  href?: string;
  type?: 'button' | 'submit';
  maxWidth?: string;
}

export type { Props };
