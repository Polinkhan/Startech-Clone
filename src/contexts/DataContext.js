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

const Data = {
  Desktop: [
    "Special PC",
    "Start PC",
    "All in one PC",
    "Apple PC",
    "Budget Pc",
    "Gaming PC",
    "Intel PC",
    "Ryzen PC",
  ],
  Laptop: [
    "All Laptop",
    "Gaming Laptop",
    "Premium Ultrabook",
    "Laptop Accesssories",
    "External Graphics Encloser",
  ],
  Component: [
    "Processor",
    "Cpu Cooler",
    "Processor Mobo Combo",
    "Water | Liquid Cooling",
    "Motherboard",
    "Graphics Card",
    "Ram (Dasktop)",
    "Ram (Laptop)",
    "Power Supply",
    "Hard Disk Drive",
    "SSD",
    "Casing",
    "Portable Hard Disk Drive",
    "Portable SSD",
    "Casing Cooler",
    "Optical Disk Drive",
    "Vertical Graphics Card Holder",
  ],
  Monitor: [
    "Apple ",
    "Huawei ",
    "LG ",
    "Lenovo ",
    "Asus ",
    "GameMax ",
    "MSI ",
    "HP ",
    "BenQ ",
    "Fantech ",
    "Hikvision ",
    "Corsair ",
    "Huntkey ",
    "Sony ",
    "Dell ",
    "Samsung ",
    "Viewsonic ",
    "Acer ",
    "GIGABYTE ",
    "XIAOMI ",
    "AOC ",
    "PHILIPS ",
    "Walton ",
    "Esonic ",
  ],
};

function DataContextProvider(props) {
  const [isLogin, setLogin] = useState(false);
  const [userName, setUserName] = useState("");

  const value = { Links, Data, isLogin, setLogin, userName, setUserName };

  return <DataContext.Provider value={value}>{props.children}</DataContext.Provider>;
}

export default DataContextProvider;
