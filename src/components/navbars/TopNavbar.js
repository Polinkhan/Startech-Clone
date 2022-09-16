import { Button, IconButton } from "@chakra-ui/button";
import { Img } from "@chakra-ui/image";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { Box, Center, Text } from "@chakra-ui/layout";
import { HStack } from "@chakra-ui/react";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { IoSearchSharp, IoPerson } from "react-icons/io5";
import { IoMdGift, IoMdFlash } from "react-icons/io";

function TopNavbar() {
  return (
    <Center h={"9vh"} bg={"#081621"} color={"white"}>
      {/* {Contsiner Starts} */}
      <Center w={{ xl: "1300px", base: "99%" }}>
        {/* {Logo & SearchBar Starts} */}
        <HStack justifycontent={"start"} w={"60%"}>
          <NavLink to="/">
            <Img mr={"8"} maxW={"120px"} src="/./assets/logo.png" />
          </NavLink>
          <InputGroup w={"580px"}>
            <Input bg={"white"} placeholder={"Search"} />
            <InputRightElement>
              <IconButton color={"black"} fontSize={"xl"} bg={""} icon={<IoSearchSharp />} />
            </InputRightElement>
          </InputGroup>
        </HStack>
        {/* {Logo & SearchBar Ends} */}
        {/* {Buttons Starts} */}
        <HStack w={"40%"} justifyContent={"space-between"}>
          <Link to="/product/offers">
            <HStack>
              <Text fontSize={"2xl"} color={"tomato"}>
                <IoMdGift />
              </Text>
              <Box alignItems={"start"} gap={"0"}>
                <Text>Offers</Text>
                <Text color={"gray"} fontSize={"xs"}>
                  Latest Offers
                </Text>
              </Box>
            </HStack>
          </Link>

          <Link to="/product/Gadget Fest">
            <HStack>
              <Text fontSize={"2xl"} color={"tomato"}>
                <IoMdFlash />
              </Text>
              <Box alignItems={"start"} gap={"0"}>
                <Text>Gadget Fest</Text>
                <Text color={"gray"} fontSize={"xs"}>
                  Special Deals
                </Text>
              </Box>
            </HStack>
          </Link>

          <Link to="/login">
            <HStack>
              <Text fontSize={"2xl"} color={"tomato"}>
                <IoPerson />
              </Text>
              <Box alignItems={"start"} gap={"0"}>
                <Text>Account</Text>
                <Text color={"gray"} fontSize={"xs"}>
                  Register or Login
                </Text>
              </Box>
            </HStack>
          </Link>

          <Link to="/PC Builder">
            <Button colorScheme={"blue"}>PC Builder</Button>
          </Link>
        </HStack>
        {/* {Buttons Starts} */}
      </Center>
      {/* {Contsiner Ends} */}
    </Center>
  );
}

export default TopNavbar;
