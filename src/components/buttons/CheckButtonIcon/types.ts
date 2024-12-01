export type Props = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'ariaLabel'> & {
  color?: 'green' | 'white' | 'purple';
  ariaLabel: string;
  isSelected: boolean;
}