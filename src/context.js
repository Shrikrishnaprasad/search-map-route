import React, { useState, useContext, createContext } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [location, setLocation] = useState("");
  const [coordinates, setCoordinates] = useState([]);

  const value = { location, setLocation, coordinates, setCoordinates };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
