import React from "react";
/** Hooks */
import { useState, useContext, createContext } from "react";

const PersonalnfoContext = createContext(null);

const PersonalInfoProvider = ({ value, children }) => {
  const [currentPI, setCurrentPI] = useState(value);

  return (
    <PersonalnfoContext.Provider value={{ currentPI, setCurrentPI }}>
      {children}
    </PersonalnfoContext.Provider>
  );
};

export default PersonalInfoProvider;
export const usePersonalInfo = () => useContext(PersonalnfoContext);
