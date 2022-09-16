import { Text, VStack } from "@chakra-ui/layout";
import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <VStack h={"50vh"} justifyContent={"center"}>
      <Text my={"16"} fontWeight={"bold"} fontSize={"4xl"} color={"tomato"}>
        Error 404! | Page Not Found
      </Text>
      <Link to="/">Back To Home</Link>
    </VStack>
  );
}

export default NotFound;
