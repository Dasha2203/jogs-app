import { HTMLAttributes } from 'react';

export type Props = HTMLAttributes<HTMLDivElement> & {
  icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
  subtitle: string;
  listProps: {
    label: string;
    value: string;
  }[];
};
