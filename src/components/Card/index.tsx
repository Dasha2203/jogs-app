import './styles.css';
import { Props } from './types';

const Card = ({ icon: Icon, subtitle, listProps, ...props }: Props) => {
  return (
    <div className="card" {...props}>
      <div className="card__img">
        <Icon />
      </div>
      <div className="card__content">
        <div className="card__subtitle">{subtitle}</div>
        {listProps.length && (
          <ul className="card__list">
            {listProps.map(({label, value}, idx) => (
              <li key={idx}><span>{label}&#58;</span> {value}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
};

export default Card;
