import clsx from 'clsx';
import './styles.css';
import { Props } from './types';

const ButtonIcon = ({ dataTestId, color = 'green', size = 'lg', icon: Icon, className, ...props }: Props) => {
  return (
    <button
      className={clsx(
        'button-icon',
        {
          'button-icon_green': color === 'green',
          'button-icon_white': color === 'white',
          'button-icon_purple': color === 'purple',
          'button-icon_gray': color === 'gray',
          'button-icon_xs': size === 'xs',
          'button-icon_lg': size === 'lg',
        },
        className
      )}
      {...(dataTestId ? {'data-testId': dataTestId}: {})}
      {...props}
    >
      <Icon/>
    </button>
  )
};

export default ButtonIcon;
