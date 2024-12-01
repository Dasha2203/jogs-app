import clsx from 'clsx';
import { Props } from './types';
import './styles.css';

const Text = ({ children, className }: Props) => {
  return (
    <p className={clsx('text', className)}>
      {children}
    </p>
  )
};

export default Text;
