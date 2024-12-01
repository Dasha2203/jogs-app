import SadSmileIcon from '../../../../assets/icons/SadSmile';
import Button from '../../../../components/buttons/Button';
import { Props } from './types';
import './index.css';

const NoResult = ({ onClick }: Props) => {
  return (
    <div className="no-result-section">
      <SadSmileIcon className="no-result-section__img" />
      <p className="no-result-section__text">Nothing is there</p>
      <Button as="button" onClick={onClick}>Create your jog first</Button>
    </div>
  )
};

export default NoResult;