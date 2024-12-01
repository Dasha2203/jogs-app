import { NavLink } from 'react-router-dom';
import LogoIcon from '../../../assets/icons/LogoIcon';
import CheckButtonIcon from '../../buttons/CheckButtonIcon';
import FilterIcon from '../../../assets/icons/FilterIcon';
import { useAppContext } from '../../../context/AppContext';
import './styles.css';
import MenuButton from './MenuButton';
import { useState } from 'react';
import clsx from 'clsx';
import MobileNavigation from './MobileNavigation';

const headerNavigation = [
  {
    name: 'Jogs',
    link: '/jogs',
  },
  {
    name: 'Info',
    link: '/info',
  },
  {
    name: 'Contact us',
    link: '/contact-us',
  },
]

const Header = () => {
  const { isOpenFilter, setIsOpenFilter } = useAppContext();
  const [ isOpenMenu, setIsOpenMenu ] = useState(false);

  function handleToggleFilter() {
    setIsOpenFilter(!isOpenFilter);
  }

  function handleToggleMenu() {
    document.body.classList.toggle('no-scroll-y');
    setIsOpenMenu(!isOpenMenu);
  }

  function getActiveLink ({ isActive }: {isActive: boolean}) {
    return clsx('header__navigation-link', isActive && 'header__navigation-link_active');
  }

  return (
    <header className="header">
      <div className="header__container">
        <NavLink to="/" aria-label="Go to main page">
          <LogoIcon className="header__logo" />
        </NavLink>

        {headerNavigation.length && (
          <nav className={
            clsx(
              'header__navigation',
            )
          }>
            {headerNavigation.map(({ name, link }, idx) => (
              <NavLink
                key={idx}
                to={link}
                className={getActiveLink}
              >
                {name}
              </NavLink>
            ))}
          </nav>
        )}
        <CheckButtonIcon
          color="green"
          ariaLabel={isOpenFilter ? 'Hide filter' : 'Open filter'}
          isSelected={isOpenFilter}
          onClick={handleToggleFilter}
        >
          <FilterIcon />
        </CheckButtonIcon>
        <MenuButton onClick={handleToggleMenu} />
        <MobileNavigation
          list={headerNavigation}
          setIsOpen={handleToggleMenu}
          isOpen={isOpenMenu}
        />
      </div>
    </header>
  )
};

export default Header;
