import { Props } from './types';
import './index.css';
import LogoIcon from '../../../../assets/icons/LogoIcon';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import MobileLink from '../MobileLink';
import ButtonIcon from '../../../buttons/ButtonIcon';
import CloseIcon from '../../../../assets/icons/CloseIcon';

const MobileNavigation = ({ list, isOpen, setIsOpen }: Props) => {
  function handleClick() {
    setIsOpen(false);
  }

  return (
    <div className={clsx('mobile-menu', isOpen && 'mobile-menu_open')}>
      <div className="mobile-menu__header">
        <Link to="/" aria-label={"Go to main page"}>
          <LogoIcon className="logo-icon"/>
        </Link>
        <ButtonIcon
          icon={CloseIcon}
          size="xs"
          color="gray"
          aria-label="Close menu"
          onClick={handleClick}
        />
      </div>
      <nav className="mobile__navigation">
        <ul>
          {list.map(({ link, name }, idx) => (
            <li key={idx} onClick={handleClick}>
              <MobileLink
                link={link}
                name={name}
              />
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
};

export default MobileNavigation;
