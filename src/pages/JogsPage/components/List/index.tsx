import { useEffect } from 'react';
import JogIcon from '../../../../assets/icons/JogIcon';
import Card from '../../../../components/Card';
import { useJogsContext } from '../../../../context/JogsContext';
import './styles.css';

const List = () => {
  const { jogs, fetchJogs } = useJogsContext();

  useEffect(() => {
    fetchJogs();
  }, []);

  if (!jogs.length) return 'Not found';

  return (
    <div className="list">
      {jogs.map(({ id, speed, time, distance, createdAt }) => (
        <Card
          key={id}
          icon={JogIcon}
          subtitle={createdAt}
          listProps={[
            {
              label: 'Speed',
              value: speed + '',
            },
            {
              label: 'Distance',
              value: distance + ' km',
            },
            {
              label: 'Time',
              value: time + ' min',
            },
          ]}
        />
      ))}
    </div>
  )
};

export default List;
