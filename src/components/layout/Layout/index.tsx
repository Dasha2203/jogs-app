import Header from '../Header';
import { Props } from './types';
import './styles.css';

const Layout = ({ children }: Props) => {
  return (
    <div className="layout">
      <Header />
      <div className="layout__container">
        {children}
      </div>
    </div>
  );
};

export default Layout;
