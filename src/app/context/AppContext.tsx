import { createContext, useState, useContext, ReactNode } from 'react';

interface AppContextData {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
  handleOpenMenu: () => void;
  handleCloseMenu: () => void;
}

const initialAppContextData: AppContextData = {
  isMobileMenuOpen: false,
  setIsMobileMenuOpen: () => {},
  handleOpenMenu: () => {},
  handleCloseMenu: () => {},
};

export const AppContext = createContext<AppContextData>(initialAppContextData);

export const useAppContext = () => useContext(AppContext);

interface AppContextProviderProps {
  children: ReactNode;
}

const AppContextProvider: React.FC<AppContextProviderProps> = ({
  children,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const handleOpenMenu = () => {
    setIsMobileMenuOpen(true);
    console.log('Clicked Open');
  };

  const handleCloseMenu = () => {
    setIsMobileMenuOpen(false);
    console.log('Clicked Close');
  };

  return (
    <AppContext.Provider
      value={{
        isMobileMenuOpen,
        setIsMobileMenuOpen,
        handleCloseMenu,
        handleOpenMenu,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
