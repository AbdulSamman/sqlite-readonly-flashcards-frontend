import { createContext } from "react";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

interface IAppContext {
  appTitle: string;
}

interface IAppProvider {
  children: React.ReactNode;
}

export const AppContext = createContext<IAppContext>({} as IAppContext);

export const AppProvider: React.FC<IAppProvider> = ({ children }) => {
  const appTitle = "Info Site";

  return (
    <AppContext.Provider
      value={{
        appTitle,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
