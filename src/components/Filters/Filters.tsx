import { Box, Button, HStack } from "@chakra-ui/react";
import Genres from "./Genres";
import Publishers from "./Publishers";
import Writers from "./Writers";

const Filters = () => {
  return (
    <Box
      display={{base:"none",lg:"block"}}
      fontFamily={"monospace"}
      paddingX="150px"
      border={"1px solid #ccc"}
    >
      <HStack justifyContent="space-between">
        <Genres />
        <Publishers />
        <Writers />
        <Button
          _hover={{
            bg: "white",
            borderBottom: "3px solid gray",
            borderRadius: "0px",
          }}
          bg={"white"}
        >
          Trading
        </Button>
        <Button
          _hover={{
            bg: "white",
            borderBottom: "3px solid gray",
            borderRadius: "0px",
          }}
          bg={"white"}
        >
          Start Selling
        </Button>
      </HStack>
    </Box>
  );
};

export default Filters;
