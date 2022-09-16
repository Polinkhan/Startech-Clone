import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import {
  Box,
  Center,
  Container,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/layout";
// import { useDataContext } from "../contexts/DataContext";
import Breadcrumb from "./Breadcrumb";

function LoginPage() {
  // const { userName, setUserName, setLogin } = useDataContext();

  // const handleSubmit = (e) => {
  //   // e.preventDefault();
  //   setLogin(true);
  // };

  return (
    <VStack bg={"white"}>
      <VStack w={"100%"} py={"4"} boxShadow={"sm"}>
        <VStack
          w={{ xl: "1300px", base: "99%" }}
          mx={"auto"}
          fontSize={"sm"}
          color={"gray"}
        >
          <Breadcrumb />
        </VStack>
      </VStack>
      <Container py={"100"} w={"450px"}>
        <VStack alignItems={"start"} gap={"4"}>
          <Text fontSize={"xl"} fontWeight={"bold"}>
            Account Login
          </Text>
          <Box w={"100%"}>
            <Text fontSize={"sm"}>Phone / Email</Text>
            <Input placeholder="Phone / Email" />
          </Box>
          <Box w={"100%"}>
            <HStack w={"100%"} justifyContent={"space-between"}>
              <Text fontSize={"sm"}>Password</Text>
              <Text color={"tomato"} fontSize={"sm"}>
                Forget Password?
              </Text>
            </HStack>
            <Input placeholder="Password" />
          </Box>
          <Box pt={"2"} w={"100%"}>
            <Button colorScheme={"blue"} w={"100%"}>
              Login
            </Button>
          </Box>
          <Center w={"100%"}>
            <Text color={"gray"}>Don't have an account?</Text>
          </Center>
          <Box pt={"2"} w={"100%"}>
            <Button variant={"outline"} colorScheme={"blue"} w={"100%"}>
              Create Your Account
            </Button>
          </Box>
        </VStack>
      </Container>
    </VStack>
  );
}

export default LoginPage;
