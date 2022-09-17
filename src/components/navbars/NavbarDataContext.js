import { useDisclosure } from "@chakra-ui/hooks";
import React, { createContext, useContext } from "react";


const NavbarDataContext = createContext();
export const useNavbarDataContext = () => useContext(NavbarDataContext);

function NavbarDataContextProvider(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const value = { isOpen, onOpen, onClose };

  return (
    <NavbarDataContext.Provider value={value}>
      {props.children}
    </NavbarDataContext.Provider>
  );
}

export default NavbarDataContextProvider;
