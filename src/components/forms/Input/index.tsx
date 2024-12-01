import { ChangeEvent, forwardRef } from 'react';
import ErrorText from '../../ErrorText';
import { Props } from './types';
import './styles.css';

const Input = forwardRef<HTMLInputElement, Props>(
  ({
    placeholder,
    value,
    error,
    type,
    onChange,
    onClick
  }, ref) => {

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
      const val = e.target.value
      onChange(val)
    }

    return (
      <div className="input-field">
        <input
          ref={ref}
          placeholder={placeholder}
          value={value}
          type={type}
          onChange={handleChange}
          onClick={onClick}
        />
        {error && <ErrorText text={error} />}
      </div>
    )
});

export default Input;
