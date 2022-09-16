import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import { Container, VStack } from "@chakra-ui/layout";
import { useDataContext } from "../contexts/DataContext";

function LoginPage() {
  const { userName, setUserName, setLogin } = useDataContext();

  const handleSubmit = (e) => {
    // e.preventDefault();
    setLogin(true);
  };

  return (
    <Container>
      <VStack h={"80vh"} justifyContent={"center"}>
        <form onSubmit={handleSubmit}>
          <Input
            name="name"
            value={userName}
            minLength={"3"}
            onChange={(e) => setUserName(e.target.value)}
          />
          <Button type="submit">Login</Button>
        </form>
      </VStack>
    </Container>
  );
}

export default LoginPage;
