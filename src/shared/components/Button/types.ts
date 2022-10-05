import { ReactNode } from 'react';
interface Props {
  children: ReactNode;
  isUpperCase?: boolean;
  onClick?: () => void;
  href?: string;
}

export type { Props };
