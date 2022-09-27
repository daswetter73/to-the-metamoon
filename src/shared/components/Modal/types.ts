import { ReactNode } from 'react';

interface Props {
  onClose: () => void;
  isCommonError?: boolean;
  children?: ReactNode;
}

export type { Props };
