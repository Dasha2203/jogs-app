import { Link } from 'react-router-dom';
import LogoIcon from '../../../assets/icons/LogoIcon';
import './styles.css';

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
      </div>
    </header>
  )
};

export default Header;
