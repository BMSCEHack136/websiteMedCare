import React, { createContext, useState } from "react";
const GlobalContext = createContext();

const GlobalData = (props) => {
  return (
    <GlobalContext.Provider value={{}}>{props.children}</GlobalContext.Provider>
  );
};

export { GlobalData, GlobalContext };
