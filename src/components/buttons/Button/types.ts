export type Props = {
  as?: 'link' | 'button';
  size?: 'lg' | 'md';
};

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    Props {
  as: 'button';
}

export interface AnchorProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    Props {
  as: 'link';
  href: string;
}

export type CustomButtonProps = ButtonProps | AnchorProps;