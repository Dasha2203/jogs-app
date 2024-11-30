import { Link } from 'react-router-dom';
import { AnchorProps, ButtonProps, CustomButtonProps } from './types';
import clsx from 'clsx';
import './styles.css';

const Button = ({ as, size = 'lg', ...props }: CustomButtonProps) => {
  if (as === 'link') {
    const { href, children, className, ...rest } = props as AnchorProps;
    const isInternal = href.startsWith('/');

    if (isInternal) {
      return (
        <Link to={href} className={clsx('button', className)}>
          {children}
        </Link>
      );
    }

    return (
      <a
        href={href}
        className={clsx('button', className)}
        {...rest}
      >
        {children}
      </a>
    );
  }

  const {
    className,
    type = 'button',
    children,
    ...rest
  } = props as ButtonProps;

  return (
    <button
      className={clsx('button', size === 'lg' ? 'button_lg' : 'button_md', className)}
      type={type}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
