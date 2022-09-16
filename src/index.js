import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import DataContextProvider from "./contexts/DataContext";

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <ChakraProvider>
    <DataContextProvider>
      <App />
    </DataContextProvider>
  </ChakraProvider>
);
