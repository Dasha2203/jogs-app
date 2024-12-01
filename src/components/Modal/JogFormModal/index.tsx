import { useEffect, useState } from 'react';
import Modal from '..';
import Input from '../../forms/Input';
import Button from '../../buttons/Button';
import DateInput from '../../forms/DateInput';
import Loader from '../../Loader';
import { REGEX_NUMBER } from '../../../const';
import { Props } from './types';
import './styles.css';
import ErrorText from '../../ErrorText';

const JogFormModal = ({ onSubmit, jog, isLoading, ...props }: Props) => {
  const [distance, setDistance] = useState(jog?.distance ? String(jog.distance) : '');
  const [time, setTime] = useState(jog?.time ? String(jog.time) : '');
  const [selectedDate, setSelectedDate] = useState(jog?.date ? jog.date.split('T')[0] : '');
  const [formError, setFormError] = useState('');

  useEffect(() => {
    document.body.classList.toggle('no-scroll-y');

    return () => {
      document.body.classList.toggle('no-scroll-y');
    }
  }, [])

  function handleChangeDistance(value: string) {
    setDistance(value.replace(REGEX_NUMBER, ''));
  }

  function handleChangeTime(value: string) {
    setTime(value.replace(REGEX_NUMBER, ''));
  }

  function handleChangeDate (event: React.ChangeEvent<HTMLInputElement>) {
    setSelectedDate(event.target.value);
  };

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const date = new Date(selectedDate.split('.').reverse().join('-'));

    if (!distance) {
      setFormError('You need to input Distance');
      return;
    }

    if (!time) {
      setFormError('You need to input Time');
      return;
    }

    if (!selectedDate) {
      setFormError('You need to select Date');
      return;
    }

    await onSubmit({
      ...(jog ? jog : {}),
      date: date.toISOString(),
      distance: Number(distance),
      time: Number(time),
    });

    props.onClose(false);
  }

  return (
    <Modal {...props}>
      {isLoading ? <Loader color="white" /> : (
        <form onSubmit={handleSubmit} className="form-add-jog">
          <div className="field">
            <div>Distance</div>
            <Input
              value={distance}
              onChange={handleChangeDistance}
              type="text"
            />
          </div>
          <div className="field">
            <div>Time</div>
            <Input
              label="Time"
              type="text"
              value={time}
              onChange={handleChangeTime}
            />
          </div>
          <div className="field">
            <div>Date</div>
            <DateInput
              value={selectedDate}
              onChange={handleChangeDate}
            />
          </div>
          {formError && <ErrorText text={formError} />}
          <Button as="button" type="submit" size="md">Save</Button>
        </form>
      )}
    </Modal>
  )
};

export default JogFormModal;
