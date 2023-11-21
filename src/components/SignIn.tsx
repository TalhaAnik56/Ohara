import { Button } from "@chakra-ui/react";

const SignIn = () => {
  return (
    <Button
      size={{ base: "sm", lg: "md" }}
      bg={"gray.700"}
      color={"white"}
      _hover={{bg:"gray.700",color:"white"}}
    >
      Sign In
    </Button>
  );
};

export default SignIn;
