import { Props } from './types';
import './styles.css';

const Title = ({ children }: Props) => {
  return (
    <h1 className="title">
      {children}
    </h1>
  )
};

export default Title;
