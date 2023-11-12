import { Button, HStack, Image } from "@chakra-ui/react";
import logo from "../assets/OharaCropped.svg";
import SearchInput from "./SearchInput";

const Navbar = () => {
  return (
    <HStack 
      bg={"#fbfcfe"}
      spacing={{ lg: "80px" }}
      paddingX={{ base: "20px", lg: "150px" }}
      paddingY={{ base: "5px", lg: "10px" }}
    >
      <Image
        src={logo}
        height={{ base: "60px", lg: "80px" }}
        width={{ base: "150px", lg: "220px" }}
        objectFit={"cover"}
      />
      <SearchInput />
      <HStack>
        <Button colorScheme="yellow">Cart</Button>
        <Button colorScheme="blue">My Account</Button>
      </HStack>
    </HStack>
  );
};

export default Navbar;
