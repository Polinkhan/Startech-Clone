import { Box, Text, VStack } from "@chakra-ui/layout";
import React from "react";
import { useParams } from "react-router";
import Breadcrumb from "../Breadcrumb";

function SubProductwithId() {
  const { id, sid } = useParams();

  return (
    <VStack>
      <Box
        bg={"white"}
        w={"100%"}
        boxShadow={"sm"}
        fontSize={"sm"}
        color={"gray"}
        py={"4"}
      >
        <Box w={{ xl: "1300px", base: "99%" }} mx={"auto"}>
          <Breadcrumb />
        </Box>
      </Box>
      <VStack>
        <Text>{id}</Text>
        <Text>{sid}</Text>
      </VStack>
      <Box h={"60vh"}></Box>
    </VStack>
  );
}

export default SubProductwithId;
