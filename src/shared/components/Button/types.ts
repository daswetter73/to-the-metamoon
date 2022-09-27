import { ReactNode } from 'react';
interface Props {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
}

export type { Props };
