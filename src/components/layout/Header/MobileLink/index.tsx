import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import './styles.css';
import { Props } from './types';

const MobileLink = ({ link, name }: Props) => {
  function getActiveLink ({ isActive }: {isActive: boolean}) {
    return clsx('mobile__navigation-link', isActive && 'mobile__navigation-link_active');
  }

  return (
    <NavLink to={link} className={getActiveLink}>{name}</NavLink>
  )
};

export default MobileLink;
