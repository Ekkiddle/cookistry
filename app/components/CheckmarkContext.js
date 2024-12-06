import { createContext, useState } from "react";

export const CheckmarkContext = createContext();

export const CheckmarkContextProvider = ({ children }) => {
  const [existCheckedSteps, setExistCheckedSteps] = useState(false);

  return (
    <CheckmarkContext.Provider value={{ existCheckedSteps, setExistCheckedSteps }}>
      {children}
    </CheckmarkContext.Provider>
  );
}