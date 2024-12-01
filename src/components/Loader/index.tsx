import clsx from 'clsx';
import './styles.css';
import { Props } from './types';

const Loader = ({ className, color = 'green' }: Props) => {
  return (
    <span
      className={clsx(
        'loader',
        className, {
          'loader_green': color === 'green',
          'loader_purple': color === 'purple',
          'loader_white': color === 'white',
        }
      )}
    />
  )
};

export default Loader;
