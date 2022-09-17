import { Button, IconButton } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { Box, Center, Text } from "@chakra-ui/layout";
import { HStack } from "@chakra-ui/react";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { IoSearchSharp, IoPerson, IoMenu, IoCart } from "react-icons/io5";
import { IoMdGift, IoMdFlash } from "react-icons/io";
import { useNavbarDataContext } from "./NavbarDataContext";

const Buttons = () => {
  return (
    <>
      <Link to="/product/offers">
        <HStack
          flexDirection={{ xl: "row", base: "column" }}
          textAlign={"center"}
        >
          <Text fontSize={{ md: "2xl", base: "md" }} color={"tomato"}>
            <IoMdGift />
          </Text>
          <Box alignItems={"start"}>
            <Text fontSize={{ md: "md", base: "xs" }}>Offers</Text>
            <Text
              color={"gray"}
              fontSize={"xs"}
              display={{ xl: "block", base: "none" }}
            >
              Latest Offers
            </Text>
          </Box>
        </HStack>
      </Link>

      <Link to="/product/Gadget Fest">
        <HStack
          flexDirection={{ xl: "row", base: "column" }}
          textAlign={"center"}
        >
          <Text fontSize={{ md: "2xl", base: "md" }} color={"tomato"}>
            <IoMdFlash />
          </Text>
          <Box alignItems={"start"}>
            <Text fontSize={{ md: "md", base: "xs" }}>Gadget Fest</Text>
            <Text
              color={"gray"}
              fontSize={"xs"}
              display={{ xl: "block", base: "none" }}
            >
              Special Deals
            </Text>
          </Box>
        </HStack>
      </Link>

      <Link to="/account/login">
        <HStack flexDirection={{ xl: "row", base: "column" }}>
          <Text fontSize={{ md: "2xl", base: "md" }} color={"tomato"}>
            <IoPerson />
          </Text>
          <Box alignItems={"start"}>
            <Text fontSize={{ md: "md", base: "xs" }}>Account</Text>
            <Text
              color={"gray"}
              fontSize={"xs"}
              display={{ xl: "block", base: "none" }}
            >
              Register or Login
            </Text>
          </Box>
        </HStack>
      </Link>

      <Link to="/PC Builder">
        <Button size={{ md: "md", base: "sm" }} colorScheme={"blue"}>
          PC Builder
        </Button>
      </Link>
    </>
  );
};

function TopNavbar() {
  const { onOpen } = useNavbarDataContext();

  return (
    <Center
      h={{ xl: "80px", base: "50px" }}
      w={"100%"}
      bg={"#081621"}
      position={{ xl: "static", base: "fixed" }}
      top={"0"}
      color={"white"}
      zIndex={"999"}
    >
      {/* {Contsiner Starts} */}
      <Center w={{ xl: "1300px", base: "99%" }}>
        {/* {Logo & SearchBar Starts} */}
        <Center w={"20%"} display={{ xl: "none", base: "flex" }}>
          <Text fontSize={"2xl"} onClick={onOpen} p={"2"} cursor={"pointer"}>
            <IoMenu />
          </Text>
        </Center>
        <Center justifycontent={{ xl: "start" }} w={"60%"}>
          <NavLink to="/">
            <Image
              mx={"8"}
              maxW={{ xl: "120px", base: "80px" }}
              src="/./assets/logo.png"
            />
          </NavLink>
          <InputGroup w={"580px"} display={{ xl: "block", base: "none" }}>
            <Input bg={"white"} placeholder={"Search"} />
            <InputRightElement>
              <IconButton
                color={"black"}
                fontSize={"xl"}
                bg={""}
                icon={<IoSearchSharp />}
              />
            </InputRightElement>
          </InputGroup>
        </Center>
        <Center w={"20%"} display={{ xl: "none", base: "flex" }}>
          <Text fontSize={"2xl"}>
            <IoCart />
          </Text>
        </Center>
        {/* {Logo & SearchBar Ends} */}
        {/* {Buttons Starts} */}
        <HStack
          w={"40%"}
          display={{ xl: "flex", base: "none" }}
          justifyContent={"space-between"}
        >
          <Buttons />
        </HStack>
        {/* {Buttons Starts} */}
      </Center>
      {/* {Contsiner Ends} */}
      <HStack
        w={"100%"}
        justifyContent={"space-around"}
        position={"fixed"}
        bottom={"0"}
        bg={"#081621"}
        color={"white"}
        zIndex={"999"}
        h={"80px"}
        display={{ xl: "none", base: "flex" }}
      >
        <Buttons />
      </HStack>
    </Center>
  );
}

export default TopNavbar;
