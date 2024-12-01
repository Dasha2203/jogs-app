import { useEffect, useRef, useState } from 'react';
import CloseIcon from '../../assets/icons/CloseIcon';
import { getHeightHeader } from '../../utils/getHeightHeader';
import './styles.css';
import { Props } from './types';

const Modal = ({ onClose, children }: Props) => {
  const [top, setTop] = useState(0);
  const modalRef = useRef<HTMLDivElement>(null);
  const previouslyFocusedElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    function handleChangeTop() {
      const headerHeight = getHeightHeader();
      setTop(headerHeight);
    }

    window.addEventListener('resize', handleChangeTop);
    handleChangeTop();

    return () => {
      window.removeEventListener('resize', handleChangeTop);
    }

  }, [])

  useEffect(() => {
    previouslyFocusedElement.current = document.activeElement as HTMLElement;
    modalRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      previouslyFocusedElement.current?.focus();
    };
  }, [onClose]);

  function handleClose(e: React.MouseEvent) {
    if (e.target === e.currentTarget) {
      onClose(false);
    }
  }

  return (
    <div
      className="modal"
      role="dialog"
      style={{ marginTop: top + 'px' }}
      onClick={handleClose}
      aria-modal="true"
      tabIndex={-1}
      ref={modalRef}
    >
      <div className="modal__container">
        <button onClick={() => onClose(false)} className="modal__close" aria-label="Close modal">
          <CloseIcon />
        </button>
        <div className="modal__content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
