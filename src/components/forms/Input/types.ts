import { InputHTMLAttributes } from 'react';

export type Props = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'size' | 'value'> & {
  label?: string;
  placeholder?: string;
  error?: string;
  id?: string;
  value: string;
  onChange: (value: string) => void;
  isInvalid?: boolean;
  disabled?: boolean;
}