import { createContext, useContext, useState } from 'react';
import { JogsContextType } from './types';
import { getJogs } from '../../api/jogs';
import { Jog } from '../../models/jogs';

const JogsContext = createContext<JogsContextType>({
  jogs: [],
  addJog: () => {},
  updateJog: () => {},
});

export const useJogsContext = () => useContext(JogsContext);

const JogsProvider = ({ children }: { children?: React.ReactNode }) => {
  const [ jogs, setJogs ] = useState<Jog[]>([]);

  async function fetchJogs() {
    try {
      const data = await getJogs();

      if (data) {
        setJogs([...data]);

        return;
      }

      setJogs([]);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <JogsContext.Provider
      value={{
        jogs,
        addJog: (value) => {},
        updateJog: (value) => {},
        fetchJogs
      }}
    >
      {children}
    </JogsContext.Provider>
  );
};

export default JogsProvider;