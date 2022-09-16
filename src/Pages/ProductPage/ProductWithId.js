import { VStack, Box } from "@chakra-ui/layout";
import { Wrap, WrapItem } from "@chakra-ui/react";
import React from "react";
import { useHistory, useParams } from "react-router";
import { Button } from "@chakra-ui/button";
import { useDataContext } from "../../contexts/DataContext";
import Breadcrumb from "../Breadcrumb";

function ProductWithId() {
  const params = useParams();
  const history = useHistory();
  const { Data } = useDataContext();

  return (
    <VStack>
      <VStack
        w={"100%"}
        bg={"white"}
        fontSize={"sm"}
        color={"gray"}
        boxShadow={"sm"}
        py={"4"}
      >
        <VStack w={{ xl: "1300px", base: "99%" }} mx={"auto"}>
          {/* ---------------------------------------------- */}
          <Breadcrumb />
          {/* ---------------------------------------------- */}
          <Wrap w={"100%"}>
            {Data[params.id] &&
              Data[params.id].map((name, i) => (
                <WrapItem key={i}>
                  <Button
                    minW={"fit-content"}
                    variant={"outline"}
                    size="sm"
                    color={"black"}
                    borderRadius={"full"}
                    fontWeight={""}
                    _hover={{ bg: "#3749BB", color: "white" }}
                    onClick={() => {
                      history.replace("/product/" + params.id + "/" + name);
                    }}
                  >
                    {name}
                  </Button>
                </WrapItem>
              ))}
          </Wrap>
          {/* ---------------------------------------------- */}
        </VStack>
      </VStack>
      <Box h={"60vh"}></Box>
    </VStack>
  );
}

export default ProductWithId;
