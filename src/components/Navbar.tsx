import { Box, HStack, Image } from "@chakra-ui/react";
import logo from "../assets/Ohara.svg";
import Cart from "./Cart";
import SearchInput from "./SearchInput";
import SignIn from "./SignIn";

const Navbar = () => {
  return (
    <Box
      paddingX={{ base: "20px", lg: "150px" }}
      paddingY={{ base: "5px", lg: "10px" }}
    >
      <HStack
        justifyContent={{ base: "space-between", lg: "normal" }}
        spacing={{ lg: "80px" }}
      >
        <Image
          src={logo}
          height={{ base: "60px", lg: "105px" }}
          width={{ base: "150px", lg: "230px" }}
          objectFit={"cover"}
        />

        {/* for laptop screen */}
        <Box width={"100%"} display={{ base: "none", lg: "block" }}>
          <SearchInput />
        </Box>
        {/* Done  */}

        <HStack spacing={"0px"}>
          <Cart />
          <SignIn />
        </HStack>
      </HStack>

      {/* for mobile screen */}
      <Box
        paddingTop={"10px"}
        width={"100%"}
        display={{ base: "block", lg: "none" }}
      >
        <SearchInput />
      </Box>
      {/* Done  */}
    </Box>
  );
};

export default Navbar;
