import { Center, Text } from "@chakra-ui/layout";
import React from "react";
import { NavLink } from "react-router-dom";
import { useDataContext } from "../../contexts/DataContext";

function StickyNavbar() {
  const { Links } = useDataContext();

  return (
    <Center
      h={"50px"}
      bg={"white"}
      position={"sticky"}
      top={"0"}
      boxShadow={"md"}
      zIndex={"999"}
      opacity={"0.9"}
    >
      <Center
        w={{ xl: "1300px", base: "99%" }}
        fontSize={"sm"}
        fontWeight={"bold"}
        justifyContent={"space-around"}
      >
        {Links.map((link, i) => (
          <NavLink key={i} to={"/product/" + link}>
            <Text _hover={{ color: "tomato" }}>{link}</Text>
          </NavLink>
        ))}
      </Center>
    </Center>
  );
}

export default StickyNavbar;
