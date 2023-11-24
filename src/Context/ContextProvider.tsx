import * as React from 'react';


type propsDarkMode = {
    DarkMode: boolean,
    setDarkMode: React.Dispatch<React.SetStateAction<boolean>>
}

interface propsDataProvider {
    children?: React.ReactNode,
}

const context = React.createContext<undefined | propsDarkMode>(undefined);

export const DataProvider = ({ children}: propsDataProvider) => {
  
  const [DarkMode, setDarkMode] = React.useState<boolean>(
    localStorage.getItem("ThemeMode") === "lightMode" ? true : false);
  React.useEffect(() => {
    if (DarkMode) {
      window.document.body.style.backgroundColor = '#202C36';
    } else {
      window.document.body.style.backgroundColor = '#f9f9f9';
    }
  }, [DarkMode]);

  const value: propsDarkMode = {DarkMode, setDarkMode};

  return (
    <context.Provider value={value}>
      {children}
    </context.Provider>
  );
};

export const useContext = () => {
  const Context = React.useContext(context);
  if (!Context) {
    throw new Error('Vous utilisez le hook hors de son contexte');
  }
  return Context;
};
