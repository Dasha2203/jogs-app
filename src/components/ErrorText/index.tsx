import clsx from 'clsx';
import './styles.css';
import { Props } from './types';

const ErrorText = ({ text, className }: Props) => {
  return <span className={clsx('error', className)}>{text}</span>
};

export default ErrorText;
