import {
  Box,
  HStack,
  StackDivider,
  Text,
  VStack,
} from "@chakra-ui/layout";
import React from "react";
import { IoCall, IoLocationSharp } from "react-icons/io5";

function Footer() {
  return (
    <Box bg={"#081621"} w={"100%"}>
      <VStack
        mt={"100"}
        divider={<StackDivider />}
        color={"gray"}
        w={{ xl: "1300px", base: "99%" }}
        mx={"auto"}
      >
        <HStack w={"100%"} my={"20"} justifyContent={"space-between"}>
          <VStack gap={"4"} alignItems={"start"}>
            <Text>SUPPORT</Text>
            <HStack
              color={"white"}
              border={"1px solid gray"}
              borderRadius={"full"}
              divider={<StackDivider />}
              py={"2"}
              px={"4"}
              cursor={"pointer"}
              _hover={{ borderColor: "#E8321C" }}
            >
              <Text fontSize={"2xl"} px={"4"}>
                <IoCall />
              </Text>
              <Box px={"4"}>
                <Text fontSize={"xs"} color={"gray"}>
                  9AM - 8PM
                </Text>
                <Text fontSize={"xl"} color={"#E8321C"}>
                  09678002003
                </Text>
              </Box>
            </HStack>
            <HStack
              color={"white"}
              border={"1px solid gray"}
              borderRadius={"full"}
              divider={<StackDivider />}
              py={"2"}
              px={"4"}
              cursor={"pointer"}
              _hover={{ borderColor: "#E8321C" }}
            >
              <Text fontSize={"2xl"} px={"4"}>
                <IoLocationSharp />
              </Text>
              <Box px={"4"}>
                <Text fontSize={"xs"} color={"gray"}>
                  Store Locator
                </Text>
                <Text fontSize={"xl"} color={"#E8321C"}>
                  Find Our Store
                </Text>
              </Box>
            </HStack>
          </VStack>
          <VStack
            h={"100%"}
            alignItems={"start"}
            alignContent={"space-between"}
            gap={"2"}
          >
            <Text color={"white"}>ABOUT US</Text>
            <Text
              cursor={"pointer"}
              _hover={{ color: "#E8321C", textDecoration: "underline" }}
            >
              EMI Terms
            </Text>
            <Text
              cursor={"pointer"}
              _hover={{ color: "#E8321C", textDecoration: "underline" }}
            >
              Privacy Policy
            </Text>
            <Text
              cursor={"pointer"}
              _hover={{ color: "#E8321C", textDecoration: "underline" }}
            >
              Star Point Policy
            </Text>
            <Text
              cursor={"pointer"}
              _hover={{ color: "#E8321C", textDecoration: "underline" }}
            >
              Brands
            </Text>
          </VStack>
          <VStack
            h={"100%"}
            alignItems={"start"}
            alignContent={"space-between"}
            gap={"2"}
          >
            <Text>#</Text>
            <Text
              cursor={"pointer"}
              _hover={{ color: "#E8321C", textDecoration: "underline" }}
            >
              About Us
            </Text>
            <Text
              cursor={"pointer"}
              _hover={{ color: "#E8321C", textDecoration: "underline" }}
            >
              Terms and Conditions
            </Text>
            <Text
              cursor={"pointer"}
              _hover={{ color: "#E8321C", textDecoration: "underline" }}
            >
              Blog
            </Text>
            <Text
              cursor={"pointer"}
              color={"#E8321C"}
              _hover={{ textDecoration: "underline" }}
            >
              Online Service Support
            </Text>
          </VStack>
          <VStack
            h={"100%"}
            alignItems={"start"}
            alignContent={"space-between"}
            gap={"2"}
          >
            <Text>#</Text>
            <Text
              cursor={"pointer"}
              _hover={{ color: "#E8321C", textDecoration: "underline" }}
            >
              Online Delivery
            </Text>
            <Text
              cursor={"pointer"}
              _hover={{ color: "#E8321C", textDecoration: "underline" }}
            >
              Refund and Return Policy
            </Text>
            <Text
              cursor={"pointer"}
              _hover={{ color: "#E8321C", textDecoration: "underline" }}
            >
              Contact Us
            </Text>
            <Text
              cursor={"pointer"}
              color={"#E8321C"}
              _hover={{ textDecoration: "underline" }}
            >
              Complain / Advice
            </Text>
          </VStack>
          <VStack
            h={"100%"}
            alignItems={"start"}
            alignContent={"space-between"}
            gap={"2"}
          >
            <Text color={"white"}>STAY CONNECTED</Text>
            <Text
              cursor={"pointer"}
              _hover={{ color: "#E8321C", textDecoration: "underline" }}
            >
              Star Tech & Engineering Ltd
            </Text>
            <Text
              cursor={"pointer"}
              _hover={{ color: "#E8321C", textDecoration: "underline" }}
            >
              6th floor, 28 Kazi Nazrul Islam Ave, Dhaka 1000
            </Text>
            <Text
              cursor={"pointer"}
              _hover={{ color: "#E8321C", textDecoration: "underline" }}
            >
              Email:
            </Text>
            <Text
              cursor={"pointer"}
              color={"#E8321C"}
              _hover={{ textDecoration: "underline" }}
            >
              info.webteam@startechbd.com
            </Text>
          </VStack>
        </HStack>
        <HStack
          fontSize={"xs"}
          pt={"4"}
          pb={"6"}
          w={"100%"}
          justifyContent={"space-between"}
        >
          <Text>© 2020 Star Tech & Engineering Ltd | All rights reserved</Text>
          <Text>Powered By: Star Soft</Text>
        </HStack>
      </VStack>
    </Box>
  );
}

export default Footer;
