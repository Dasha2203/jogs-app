import clsx from 'clsx';
import './styles.css';
import { Props } from './types';

const Loader = ({ className }: Props) => {
  return (
    <span className={clsx('loader', className)}></span>
  )
};

export default Loader;
