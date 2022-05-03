import React, { createContext, useState } from "react";
export const ToggleContext = createContext();
export const ToggleProvider = ({ children }) => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <ToggleContext.Provider value={{ toggle, setToggle, handleToggle }}>
      {children}
    </ToggleContext.Provider>
  );
};
