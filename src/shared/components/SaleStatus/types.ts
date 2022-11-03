import { MouseEventHandler } from 'react';
type StatusTitle = 'Available now' | 'Soon' | 'Finished';

type Status = {
  title: StatusTitle;
  id: 0 | 1 | 2;
}[];

interface Props {
  data: {
    title: string;
    statusId: number;
    id: number;
  }[];
  onItemClick: MouseEventHandler;
  currentItemId: number;
}

export type { Status, Props };
