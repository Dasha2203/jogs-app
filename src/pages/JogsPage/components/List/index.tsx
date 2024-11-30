import { useEffect, useState } from 'react';
import JogIcon from '../../../../assets/icons/JogIcon';
import Card from '../../../../components/Card';
import { useJogsContext } from '../../../../context/JogsContext';
import JogFormModal from '../../../../components/Modal/JogFormModal';
import { getDate } from '../../../../utils/getDate';
import Loader from '../../../../components/Loader';
import ButtonIcon from '../../../../components/buttons/ButtonIcon';
import AddIcon from '../../../../assets/icons/AddIcon';
import { useAppContext } from '../../../../context/AppContext';
import JogFilter from '../JogFilter';
import './styles.css';
import { Jog } from '../../../../models/jogs';

const List = () => {
  const [ isOpen, setIsOpen ] = useState<boolean>(false);
  const { jogs, fetchJogs, addJog, updateJog, isLoading } = useJogsContext();
  const [ selectedJog, setSelectedJog ] = useState<Jog | null>(null);
  const { isOpenFilter } = useAppContext();

  useEffect(() => {
    fetchJogs();
  }, []);

  function handleSelectedJog(jog: Jog) {
    setSelectedJog(jog);
    setIsOpen(true)
  }

  if (isLoading && !isOpen) return <div className="list"><Loader className="" /></div>;
  if (!jogs.length) return 'Not found';

  return (
    <div className="section-jogs w-full relative">
      {isOpenFilter && (
        <JogFilter />
      )}
      <ButtonIcon color="green" onClick={() => setIsOpen(true)}>
        <AddIcon />
      </ButtonIcon>
      <div className="list">
        {jogs.map(({ id, speed, time, distance, date, ...props }) => (
          <Card
            key={id}
            icon={JogIcon}
            subtitle={getDate(date)}
            onClick={() => handleSelectedJog({ id, speed, time, distance, date, ...props })}
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

      {isOpen && (
        <JogFormModal
          onClose={setIsOpen}
          children={'content'}
          onSubmit={selectedJog ? updateJog : addJog}
          isLoading={isLoading}
          jog={selectedJog}
        />
      )}
    </div>
  )
};

export default List;
