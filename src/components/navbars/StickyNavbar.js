import { Avatar } from "@chakra-ui/avatar";
import { Box, Center, HStack, Text } from "@chakra-ui/layout";
import React from "react";
import { NavLink } from "react-router-dom";
import { useDataContext } from "../../contexts/DataContext";

function StickyNavbar() {
  const { Links, isLogin, userName } = useDataContext();

  return (
    <Center h={"5vh"} bg={"white"} position={"sticky"} top={"0"} boxShadow={"md"}>
      <Center
        w={{ xl: "1300px", base: "99%" }}
        fontSize={"sm"}
        fontWeight={"bold"}
        justifyContent={"space-around"}
      >
        {Links.map((link) => (
          <NavLink to={"/product/" + link}>
            <Text _hover={{ color: "tomato" }}>{link}</Text>
          </NavLink>
        ))}
      </Center>
    </Center>
  );
}

export default StickyNavbar;
