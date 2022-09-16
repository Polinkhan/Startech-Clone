import { VStack } from "@chakra-ui/layout";

import React from "react";
import Banner from "./Banner";
import FeatureCatagory from "./FeatureCatagory";
import HomeDataContextProvider from "./HomeDataContext";

function HomePage() {
  return (
    <HomeDataContextProvider>
      <VStack pt={"8"} gap={"8"} w={{ xl: "1300px", base: "99%" }} mx={"auto"}>
        <Banner />
        <FeatureCatagory />
      </VStack>
    </HomeDataContextProvider>
  );
}

export default HomePage;
