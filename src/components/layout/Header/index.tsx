import { Link } from 'react-router-dom';
import LogoIcon from '../../../assets/icons/LogoIcon';
import './styles.css';
import CheckButtonIcon from '../../buttons/CheckButtonIcon';
import FilterIcon from '../../../assets/icons/FilterIcon';
import { useAppContext } from '../../../context/AppContext';

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

  function handleToggleFilter() {
    setIsOpenFilter(!isOpenFilter);
  }

  return (
    <header className="header">
      <div className="header__container">
        <Link to="/">
          <LogoIcon className="header__logo" />
        </Link>
        {headerNavigation.length && (
          <nav className="header__navigation">
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
      </div>
    </header>
  )
};

export default Header;
