export type Props = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'> & {
  color?: 'green' | 'white' | 'purple' | 'gray';
  size?: 'lg' | 'xs';
  icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
}