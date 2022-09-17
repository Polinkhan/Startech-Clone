import {
  Center,
  Text,
  HStack,
  VStack,
  StackDivider,
} from "@chakra-ui/layout";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/modal";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useDataContext } from "../../contexts/DataContext";
import { useNavbarDataContext } from "./NavbarDataContext";
import { IoClose, IoAdd } from "react-icons/io5";

function StickyNavbar() {
  const { Links } = useDataContext();
  const { onClose, isOpen } = useNavbarDataContext();

  return (
    <Center
      h={"50px"}
      bg={"white"}
      position={"sticky"}
      top={"0"}
      boxShadow={"md"}
      zIndex={"999"}
      display={{ xl: "flex", base: "none" }}
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

      <Drawer
        placement={"left"}
        onClose={onClose}
        isOpen={isOpen}
        display={{ xl: "none", base: "static" }}
      >
        <DrawerOverlay />
        <DrawerContent mt={"50px"}>
          <DrawerHeader borderBottomWidth="1px">
            <HStack justifyContent={"space-between"}>
              <Text>Basic Drawer</Text>
              <Text
                fontSize={"2xl"}
                onClick={onClose}
                bg={"gray.200"}
                p={"2"}
                cursor={"pointer"}
              >
                <IoClose />
              </Text>
            </HStack>
          </DrawerHeader>
          <DrawerBody>
            <VStack alignItems={"start"} divider={<StackDivider />}>
              {Links.map((link, i) => (
                <HStack w={"100%"} justifyContent={"space-between"}>
                  <Link
                    key={i}
                    to={"/product/" + link}
                    style={{ width: "100%" }}
                  >
                    <Text
                      w={"100%"}
                      py={"1"}
                      _hover={{ color: "tomato" }}
                      onClick={onClose}
                      fontSize={"sm"}
                    >
                      {link}
                    </Text>
                  </Link>
                  <Text
                    fontSize={"2xl"}
                    cursor={"pointer"}
                    _hover={{ color: "tomato" }}
                  >
                    <IoAdd />
                  </Text>
                </HStack>
              ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Center>
  );
}

export default StickyNavbar;
