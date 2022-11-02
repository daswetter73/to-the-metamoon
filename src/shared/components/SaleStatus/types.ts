type StatusTitle = 'Available now' | 'Soon' | 'Finished';

type Status = {
  title: StatusTitle;
  id: 0 | 1 | 2;
}[];

interface Props {
  data: {
    title: string;
    statusId: number;
  }[];
}

export type { Status, Props };
