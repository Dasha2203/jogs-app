import clsx from 'clsx';
import { Props } from './types';
import './styles.css';

const MenuButton = ({ className, ...props }: Props) => {
  return (
    <button className={clsx('menu-btn', className)} {...props}>
      <span />
    </button>
  )
};

export default MenuButton;
