import clsx from 'clsx';
import './styles.css';
import { Props } from './types';

const ButtonIcon = ({ color = 'green', children, className, ...props }: Props) => {
  return (
    <button
      className={clsx(
        'button-icon',
        {
          'button-icon_green': color === 'green',
          'button-icon_white': color === 'white',
          'button-icon_purple': color === 'purple',
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
};

export default ButtonIcon;
