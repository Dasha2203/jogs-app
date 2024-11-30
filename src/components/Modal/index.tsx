import CloseIcon from '../../assets/icons/CloseIcon';
import './styles.css';
import { Props } from './types';

const Modal = ({ onClose, children }: Props) => {

  function handleClose() {
    onClose(false);
  }

  return (
    <div className="modal">
      <div className="modal__container">
        <button onClick={handleClose} className="modal__close" aria-label="Close modal">
          <CloseIcon />
        </button>
        <div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
