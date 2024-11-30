import { AddJogCredential } from '../../../api/jogs/types';
import {Props as ModalProps} from '../types';

export type Props = ModalProps & {
  onSubmit: (value: AddJogCredential) => Promise<void>;
  isLoading?: boolean;
}