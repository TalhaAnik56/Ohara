import { Box, HStack, Image } from "@chakra-ui/react";
import logo from "../assets/Ohara.svg";
import Cart from "./Cart";
import SearchInput from "./SearchInput";
import SignIn from "./SignIn";
import Filters from "./Filters/Filters";

const Navbar = () => {
  return (
    <Box
      paddingX={{ base: "20px", lg: "150px" }}
      paddingBottom={{ base: "15px", lg: "0px" }}
      borderBottom={"1px solid gray"}
      boxShadow="0 4px 8px 0 rgba(0,0,0,0.2)"
    >
      <HStack
        justifyContent={{ base: "space-between", lg: "normal" }}
        spacing={{ lg: "80px" }}
      >
        <Image
          cursor={"pointer"}
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

      <Filters></Filters>
    </Box>
  );
};

export default Navbar;
