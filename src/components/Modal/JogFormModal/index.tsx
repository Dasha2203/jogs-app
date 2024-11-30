import { useState } from 'react';
import Modal from '..';
import Input from '../../forms/Input';
import { Props } from './types';
import Button from '../../Button';
import './styles.css';
import DateInput from '../../forms/DateInput';
import Loader from '../../Loader';

const JogFormModal = ({ onSubmit, isLoading, ...props }: Props) => {
  const [distance, setDistance] = useState('');
  const [time, setTime] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [formError, setFormError] = useState('');

  function handleChangeDistance(value: string) {
    setDistance(value.replace(/[^0-9]/g, ''));
  }

  function handleChangeTime(value: string) {
    setTime(value.replace(/[^0-9]/g, ''));
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
      date: date.toISOString(),
      distance: Number(distance),
      time: Number(time)
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
          {formError && <span className="error">{formError}</span>}
          <Button as="button" type="submit" size="md">Save</Button>
        </form>
      )}
    </Modal>
  )
};

export default JogFormModal;
