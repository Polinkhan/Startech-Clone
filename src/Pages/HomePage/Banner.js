import { IconButton } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { Box, HStack, Text, VStack } from "@chakra-ui/layout";
import { IoSearchSharp } from "react-icons/io5";
function Banner() {
  return (
    <>
      <HStack gap={"4"}>
        <Image src="https://www.startech.com.bd/image/cache/catalog/home/banner/star-tech-dhamaka-offer-982x500.jpg" />
        <VStack gap={"4"}>
          <VStack bg={"#FFE8A1"} p={"8"}>
            <Text fontWeight={"bold"}>Compare Products</Text>
            <Text color={"gray"}>Choose Two Products to Compare</Text>
            <InputGroup>
              <Input bg={"white"} placeholder={"Search and Select Product"} />
              <InputRightElement>
                <IconButton
                  color={"black"}
                  fontSize={"xl"}
                  bg={""}
                  icon={<IoSearchSharp />}
                />
              </InputRightElement>
            </InputGroup>
            <InputGroup>
              <Input bg={"white"} placeholder={"Search and Select Product"} />
              <InputRightElement>
                <IconButton
                  color={"black"}
                  fontSize={"xl"}
                  bg={""}
                  icon={<IoSearchSharp />}
                />
              </InputRightElement>
            </InputGroup>
            <Input
              type={"submit"}
              cursor={"pointer"}
              borderColor={"#3749BB"}
              borderWidth={"2px"}
              value={"View Comparison"}
              fontWeight={"bold"}
              color={"#3749BB"}
            />
          </VStack>
          <Image
            maxW={"300px"}
            src="https://www.startech.com.bd/image/catalog/home/banner/small/nagad-cashback.jpg"
          />
        </VStack>
      </HStack>
      <Box
        w={"100%"}
        bg={"white"}
        pb={"1"}
        pt={"2"}
        px={"4"}
        borderRadius={"full"}
        textAlign={"center"}
      >
        <marquee>{/*eslint-disable-line */}
          17th September Saturday, our all branches are open. Additionally, Our
          online activities are open and operational.
        </marquee>
      </Box>
    </>
  );
}

export default Banner;
