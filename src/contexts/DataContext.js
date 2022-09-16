import React, { createContext, useContext, useState } from "react";

const DataContext = createContext();
export const useDataContext = () => useContext(DataContext);

const Links = [
  "Desktop",
  "Laptop",
  "Component",
  "Monitor",
  "UPS",
  "Tablet",
  "Office Equipment",
  "Camera",
  "Security",
  "Networking",
  "Accessories",
  "Software",
  "Server & Storage",
  "TV",
  "AC",
  "Gadget",
  "Gaming",
];

function DataContextProvider(props) {
  const [isLogin, setLogin] = useState(false);
  const [userName, setUserName] = useState("");

  const value = { Links, isLogin, setLogin, userName, setUserName };

  return <DataContext.Provider value={value}>{props.children}</DataContext.Provider>;
}

export default DataContextProvider;
