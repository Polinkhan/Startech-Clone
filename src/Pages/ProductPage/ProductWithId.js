import { Box, Center, HStack, Text, VStack } from "@chakra-ui/layout";
import React from "react";
import { useParams } from "react-router";
import { IoHomeSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

function ProductWithId() {
  const params = useParams();
  return (
    <VStack bg={"white"} h={"10vh"} fontSize={"sm"} color={"gray"} boxShadow={"sm"} py={"4"}>
      <HStack w={{ xl: "1300px", base: "99%" }} mx={"auto"}>
        <IoHomeSharp />
        <Link to={"/product/" + params.id}>/ {params.id}</Link>
      </HStack>
    </VStack>
  );
}

export default ProductWithId;
