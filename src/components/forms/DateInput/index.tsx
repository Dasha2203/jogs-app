import { forwardRef, useRef, useState } from 'react';
import './styles.css';
import { Props } from './types';
import ErrorText from '../../ErrorText';

const DateInput = forwardRef<HTMLInputElement, Props>(
  ({
    placeholder,
    value,
    error,
    onChange,
  }, ref) => {
    const [inputType, setInputType] = useState('text');
    const dateInputRef = useRef<HTMLInputElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLInputElement>) => {
      const input = event.target as HTMLInputElement;
      input.showPicker?.();
    };

    const handleFocus = () => {
      setInputType('date');
      // Открытие календаря при фокусе
      if (dateInputRef.current) {
        dateInputRef.current.showPicker();
      }
    };

    const handleBlur = () => {
      setInputType('text');
    };

    return (
      <div className="input-field">
        <input
          ref={dateInputRef}
          placeholder={placeholder}
          value={value}
          type={inputType}
          onChange={onChange}
          onClick={handleClick}
          className="input-date"
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        {error && <ErrorText text={error} />}
      </div>
    )
});

export default DateInput;
