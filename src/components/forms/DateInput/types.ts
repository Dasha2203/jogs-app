import { InputHTMLAttributes } from 'react';

export type Props = Omit<InputHTMLAttributes<HTMLInputElement>, | 'size' | 'value'> & {
  error?: string;
  id?: string;
  value: string;
}