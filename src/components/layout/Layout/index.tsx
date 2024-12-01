import Header from '../Header';
import { Props } from './types';
import './styles.css';

const Layout = ({ type = 'full', children }: Props) => {
  return (
    <div className="layout">
      <Header type={type} />
      <div className="layout__container">
        {children}
      </div>
    </div>
  );
};

export default Layout;
