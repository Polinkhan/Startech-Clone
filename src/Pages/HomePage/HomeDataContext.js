import React, { createContext, useContext } from "react";

const HomeDataContext = createContext();
export const useHomeDataContext = () => useContext(HomeDataContext);

const catagoryList = [
  {
    name: "All Laptop",
    src: "https://www.startech.com.bd/image/cache/catalog/category-thumb/laptop-48x48.png",
    to: "Laptop/All Laptop",
  },
  {
    name: "Laptop Battery",
    src: "https://www.startech.com.bd/image/cache/catalog/category-thumb/laptop-battery-48x48.png",
    to: "Laptop/Laptop Accesssories/Laptop Battery",
  },
  {
    name: "Charger / Adapter",
    src: "https://www.startech.com.bd/image/cache/catalog/category-thumb/laptop-charger-adapter-48x48.png",
  },
  {
    name: "Desktop",
    src: "https://www.startech.com.bd/image/cache/catalog/category-thumb/desktop-48x48.png",
    to: "Desktop",
  },
  {
    name: "Monitor",
    src: "https://www.startech.com.bd/image/cache/catalog/category-thumb/monitor-48x48.png",
    to: "Monitor",
  },
  {
    name: "Processor",
    src: "https://www.startech.com.bd/image/cache/catalog/category-thumb/cpu-48x48.png",
    to: "Component/Processor",
  },
  {
    name: "Graphics Card",
    src: "https://www.startech.com.bd/image/cache/catalog/category-thumb/gpu-48x48.png",
  },
  {
    name: "SSD",
    src: "https://www.startech.com.bd/image/cache/catalog/category-thumb/ssd-48x48.png",
  },
  {
    name: "Keyboard",
    src: "https://www.startech.com.bd/image/cache/catalog/category-thumb/keyboard-48x48.png",
  },
  {
    name: "Mouse",
    src: "https://www.startech.com.bd/image/cache/catalog/category-thumb/mouse-48x48.png",
  },
  {
    name: "Headphone",
    src: "https://www.startech.com.bd/image/cache/catalog/category-thumb/headphone-48x48.png",
  },
  {
    name: "Router",
    src: "https://www.startech.com.bd/image/cache/catalog/category-thumb/router-48x48.png",
  },
  {
    name: "Gadget",
    src: "https://www.startech.com.bd/image/cache/catalog/category-thumb/gadget-48x48.png",
  },
  {
    name: "Smart Watch",
    src: "https://www.startech.com.bd/image/cache/catalog/category-thumb/smart-watch-48x48.png",
  },
  {
    name: "Gaming Console",
    src: "https://www.startech.com.bd/image/cache/catalog/category-thumb/gaming-console-48x48.png",
  },
  {
    name: "Converter & Cable",
    src: "https://www.startech.com.bd/image/cache/catalog/category-thumb/cable-converter-48x48.png",
  },
];

function HomeDataContextProvider(props) {
  const value = { catagoryList };

  return (
    <HomeDataContext.Provider value={value}>
      {props.children}
    </HomeDataContext.Provider>
  );
}

export default HomeDataContextProvider;
