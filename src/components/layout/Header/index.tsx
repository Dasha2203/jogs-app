import { Link } from 'react-router-dom';
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
    setIsOpenMenu(!isOpenMenu);
  }

  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" aria-label="Go to main page">
          <LogoIcon className="header__logo" />
        </Link>

        {headerNavigation.length && (
          <nav className={
            clsx(
              'header__navigation',
            )
          }>
            {headerNavigation.map(({ name, link }, idx) => (
              <Link
                key={idx}
                to={link}
                className="header__navigation-link"
              >
                {name}
              </Link>
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
        <MenuButton onClick={handleToggleMenu} isOpen={isOpenMenu} />
        <MobileNavigation list={headerNavigation} setIsOpen={setIsOpenMenu} isOpen={isOpenMenu} />
      </div>
    </header>
  )
};

export default Header;
