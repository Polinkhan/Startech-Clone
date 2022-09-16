import { HStack } from "@chakra-ui/layout";
import React from "react";
import { IoHomeSharp } from "react-icons/io5";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const getLinks = (params) => {
  const links = [];
  Object.keys(params).reduce((prev, curr) => {
    links.push(prev + params[curr]);
    return prev + params[curr] + "/";
  }, "");
  return links;
};

function Breadcrumb() {
  const params = useParams();
  const Links = getLinks(params);
  return (
    <HStack w={"100%"}>
      <IoHomeSharp />
      {Object.keys(params).map((id, i) => (
        <Link key={i} to={"/product/" + Links[i]}>
          / {params[id]}
        </Link>
      ))}
    </HStack>
  );
}

export default Breadcrumb;
