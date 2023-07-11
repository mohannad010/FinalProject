import React from "react";
/** Hooks */
import { useState, useContext, createContext } from "react";

const BiographiesContext = createContext(null);

const BiographiesProvider = ({ value, children }) => {
  const [currentBios, setCurrentBios] = useState(value);

  return (
    <BiographiesContext.Provider value={{ currentBios, setCurrentBios }}>
      {children}
    </BiographiesContext.Provider>
  );
};

export default BiographiesProvider;
export const useBiographies = () => useContext(BiographiesContext);
