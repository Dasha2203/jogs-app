import { Link } from 'react-router-dom';
import { Props } from './types';
import './styles.css';

const MobileLink = ({ link, name }: Props) => {
  return (
    <Link to={link} className="mobile__navigation-link">{name}</Link>
  )
};

export default MobileLink;
