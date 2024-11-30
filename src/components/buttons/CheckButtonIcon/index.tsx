import clsx from 'clsx';
import './styles.css';
import { Props } from './types';

const CheckButtonIcon = ({
  color = 'green',
  ariaLabel,
  children,
  className,
  isSelected,
  ...props
}: Props) => {
  return (
    <button
      aria-label={ariaLabel}
      className={clsx(
        'button-check-icon',
        {
          'button-check-icon_green': color === 'green',
          'button-check-icon_white': color === 'white',
          'button-check-icon_purple': color === 'purple',
          'button-check-icon_active': isSelected
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
};

export default CheckButtonIcon;
