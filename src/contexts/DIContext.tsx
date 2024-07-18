import React, { createContext, useContext, ReactNode } from 'react';
import { container } from 'tsyringe';


type DIProviderPropsType = {
  children: ReactNode;
}
const DIContext = createContext(container);
export const useDIContainer = () => useContext(DIContext);

export const DIProvider: React.FC<DIProviderPropsType> = ({ children }) => (
  <DIContext.Provider value={container}>
    {children}
  </DIContext.Provider>
);