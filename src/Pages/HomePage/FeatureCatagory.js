import { Image } from "@chakra-ui/image";
import { Center, Text, VStack, Wrap, WrapItem } from "@chakra-ui/layout";
import React from "react";
import { Link } from "react-router-dom";
import { useHomeDataContext } from "./HomeDataContext";

function FeatureCatagory() {
  const { catagoryList } = useHomeDataContext();

  return (
    <VStack>
      <Text fontWeight={"bold"} fontSize={"xl"}>
        Featured Catagory
      </Text>
      <Text>Get Your Desired Product from Featured Category!</Text>

      <Center>
        <Wrap justify={"center"}>
          {catagoryList.map((catagory, i) => (
            <WrapItem key={i}>
              <Link to={"product/" + catagory.to}>
                <VStack
                  h={"135px"}
                  w={"150px"}
                  bg={"white"}
                  borderRadius={"2xl"}
                  justifyContent={"center"}
                  my={"2"}
                  _hover={{ color: "tomato" }}
                >
                  <Image src={catagory.src} />
                  <Text>{catagory.name}</Text>
                </VStack>
              </Link>
            </WrapItem>
          ))}
        </Wrap>
      </Center>
    </VStack>
  );
}

export default FeatureCatagory;
