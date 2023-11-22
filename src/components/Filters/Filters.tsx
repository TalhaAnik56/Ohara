import { Box, Button, HStack } from "@chakra-ui/react";
import Genres from "./Genres";
import Publishers from "./Publishers";
import Writers from "./Writers";

const Filters = () => {
  return (
    <Box
      display={{ base: "none", lg: "block" }}
      fontFamily={"monospace"}
    >
      <HStack justifyContent="space-between">
        <Genres />
        <Publishers />
        <Writers />
        <Button
          _hover={{
            bg: "#3f5147",
            borderBottom: "4px solid #2d3748",
            borderRadius: "0px",
          }}
          bg={"#3f5147"}
          color={"white"}
        >
          Trading
        </Button>
        <Button
          _hover={{
            bg: "#3f5147",
            borderBottom: "4px solid #2d3748",
            borderRadius: "0px",
          }}
          bg={"#3f5147"}
          color={"white"}
        >
          Start Selling
        </Button>
      </HStack>
    </Box>
  );
};

export default Filters;
