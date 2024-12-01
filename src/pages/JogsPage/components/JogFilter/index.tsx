import { useEffect, useState } from 'react';
import DateInput from '../../../../components/forms/DateInput';
import './styles.css';
import { useJogsContext } from '../../../../context/JogsContext';

const JogFilter = () => {
  const { getRangeJogs } = useJogsContext();
  const [ startDate, setStartDate ] = useState('');
  const [ endDate, setEndDate ] = useState('');
  const [top, setTop] = useState(0);

  useEffect(() => {
    function handleChangePosition() {
      const header = document.querySelector('header');
      const headerHeight = header?.clientHeight || 0;

      setTop(headerHeight);
    }

    handleChangePosition();
    window.addEventListener('resize', handleChangePosition);

    return () => {
      window.removeEventListener('resize', handleChangePosition)
    }
  }, [])

  function handleChangeStartDate (event: React.ChangeEvent<HTMLInputElement>) {
    setStartDate(event.target.value);
  };

  function handleChangeEndDate (event: React.ChangeEvent<HTMLInputElement>) {
    setEndDate(event.target.value);
  };

  useEffect(() => {
    getRangeJogs({ end: endDate, start: startDate })
  }, [startDate, endDate])

  return (
    <div className="jog-filter" style={{ top: top + 'px'}}>
      <label className="label">
        Date from
        <DateInput
          value={startDate}
          onChange={handleChangeStartDate}
        />
      </label>
      <label className="label">
        Date to
        <DateInput
          value={endDate}
          onChange={handleChangeEndDate}
        />
      </label>
    </div>
  )
};

export default JogFilter;
