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
import NoResult from '../NoResult';
import { AddJogCredential } from '../../../../api/jogs/types';

const List = () => {
  const [ isOpen, setIsOpen ] = useState<boolean>(false);
  const { filteredJogs, fetchJogs, addJog, updateJog, isLoading } = useJogsContext();
  const [ selectedJog, setSelectedJog ] = useState<Jog | null>(null);
  const { isOpenFilter } = useAppContext();

  useEffect(() => {
    fetchJogs();
  }, []);

  function handleSelectedJog(jog: Jog) {
    setSelectedJog(jog);
    setIsOpen(true)
  }

  function handleCreate() {
    setIsOpen(true);
  }

  async function handleSubmit(value: Jog | AddJogCredential) {
    if ('id' in value) {
      await updateJog(value);

      return;
    }

    await addJog(value)
  }

  return (
    <div className="section-jogs w-full relative">
      {isOpenFilter && (
        <JogFilter />
      )}
      {isLoading && !isOpen && <Loader />}
      {!filteredJogs.length && !isLoading && <NoResult onClick={handleCreate} />}
      {filteredJogs.length ? (
        <ButtonIcon
          icon={AddIcon}
          color="green"
          onClick={handleCreate}
          dataTestId={'add-jog-btn'}
        />
      ) : null}

      {!isLoading && (
        <div className="list">
          {filteredJogs.map(({ id, speed, time, distance, date, ...props }) => (
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
      )}

      {isOpen && (
        <JogFormModal
          onClose={setIsOpen}
          onSubmit={handleSubmit}
          isLoading={isLoading}
          jog={selectedJog}
        />
      )}
    </div>
  )
};

export default List;
