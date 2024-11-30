import { AddJogCredential } from '../../../api/jogs/types';
import { Jog } from '../../../models/jogs';
import {Props as ModalProps} from '../types';

export type Props = ModalProps & {
  onSubmit: (value: AddJogCredential | Jog) => Promise<void>;
  isLoading?: boolean;
  jog?: Jog | null;
}