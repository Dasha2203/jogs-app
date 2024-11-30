import clsx from 'clsx';
import { Props } from './types';
import './style.css';

const Container = ({ children, className }: Props) => {
  return (
    <div className={clsx('container', className)}>
      {children}
    </div>
  )
};

export default Container;
