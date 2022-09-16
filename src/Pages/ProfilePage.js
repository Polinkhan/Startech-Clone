import { Button } from "@chakra-ui/button";
import { Center, Text, VStack } from "@chakra-ui/layout";
import React from "react";
import { useDataContext } from "../contexts/DataContext";

function ProfilePage() {
  const { userName, setLogin } = useDataContext();

  return (
    <VStack>
      <Text>Hello {userName}</Text>
      <Button onClick={() => setLogin(false)}>LogOut</Button>
    </VStack>
  );
}

export default ProfilePage;
