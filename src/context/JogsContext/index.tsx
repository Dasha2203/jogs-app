import { createContext, useContext, useState } from 'react';
import { createJog, getJogs, patchJog } from '../../api/jogs';
import { Jog } from '../../models/jogs';
import { AddJogCredential } from '../../api/jogs/types';
import { JogsContextType } from './types';

const JogsContext = createContext<JogsContextType>({
  jogs: [],
  filteredJogs: [],
  error: '',
  isLoading: false,
  getRangeJogs: () => {},
  addJog: async () => {},
  updateJog: () => {},
  fetchJogs: async () => {},
});

export const useJogsContext = () => useContext(JogsContext);

const JogsProvider = ({ children }: { children?: React.ReactNode }) => {
  const [ jogs, setJogs ] = useState<Jog[]>([]);
  const [ filteredJogs, setFilteredJogs ] = useState<Jog[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function fetchJogs() {
    try {
      setIsLoading(true);
      const data = await getJogs();

      if (data) {
        setJogs([...data]);

        return;
      }

      setJogs([]);
    } catch (error) {
      console.log(error);
      setError('Smth went wrong');
    } finally {
      setIsLoading(false)
    }
  }

  async function updateJog(value: Jog) {
    try {
      setIsLoading(true);
      const data = await patchJog(value);

      if (data) {
        const idx = jogs.findIndex(({ id }) => data.id === id);

        if (idx !== -1) {
          setJogs([...jogs.slice(0, idx), data, ...jogs.slice(idx + 1)]);
        }
      }
    } catch (error) {
      console.log(error);
      setError('Smth went wrong');
    } finally {
      setIsLoading(false)
    }
  }

  async function addJog(value: AddJogCredential) {
    try {
      setIsLoading(true);
      const data = await createJog(value);

      if (data) {
        setJogs([data, ...jogs]);
      }
    } catch (error) {
      console.log(error);
      setError('Smth went wrong');
    } finally {
      setIsLoading(false)
    }
  }

  function getRangeJogs({ start, end }: { start?: string, end?: string }) {
    const startDate = new Date(start || 0);
    const endDate = end ? new Date(end) : new Date();
    startDate.setHours(0, 0, 0, 0);
    endDate.setHours(0, 0, 0, 0);

    const filteredJogs = jogs.filter(jog => {
      const date = new Date(jog.date);
      date.setHours(0, 0, 0, 0);

      return date >= startDate && date <= endDate;
    })

    setFilteredJogs([...filteredJogs]);
  }

  return (
    <JogsContext.Provider
      value={{
        error,
        isLoading,
        jogs,
        filteredJogs,
        addJog,
        updateJog,
        fetchJogs,
        getRangeJogs
      }}
    >
      {children}
    </JogsContext.Provider>
  );
};

export default JogsProvider;