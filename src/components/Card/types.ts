export type Props = {
  icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
  subtitle: string;
  listProps: {
    label: string;
    value: string;
  }[];
};
