import React, { useState, useContext, createContext } from "react";
import uuid from "react-uuid";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  if (
    localStorage.getItem("mapId") === "undefined" ||
    localStorage.getItem("mapId") === undefined
  ) {
    localStorage.setItem("mapId", uuid());
  }
  const userid = localStorage.getItem("mapId") || uuid();
  const [location, setLocation] = useState("");
  const [coordinates, setCoordinates] = useState([]);
  const [mapId, setMapId] = useState(userid);

  const value = {
    location,
    setLocation,
    coordinates,
    setCoordinates,
    mapId,
    setMapId
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
