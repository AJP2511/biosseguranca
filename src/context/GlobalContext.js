import React from "react";

export const GlobalContext = React.createContext({});

export function GlobalProvider({ children }) {
  const [isOpened, setIsOpened] = React.useState(false);

  return (
    <GlobalContext.Provider value={{ isOpened, setIsOpened }}>
      {children}
    </GlobalContext.Provider>
  );
}
