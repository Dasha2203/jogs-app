import { createContext, useContext, useState } from 'react';
import { AppContextType } from './types';

const AppContext = createContext<AppContextType>({
  isOpenFilter: false,
  setIsOpenFilter: () => {}
});

export const useAppContext = () => useContext(AppContext);

const AppProvider = ({ children }: { children?: React.ReactNode }) => {
  const [isOpenFilter, setIsOpenFilter] = useState(false);

  return (
    <AppContext.Provider
      value={{
        isOpenFilter,
        setIsOpenFilter
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;