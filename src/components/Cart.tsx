import { Button, Icon } from "@chakra-ui/react";
import { TiShoppingCart } from "react-icons/ti";

const Cart = () => {
  return (
    <Button size={{ base: "sm", lg: "md" }} bg={"#3f5147"} _hover={{ bg: "#3f5147" }}>
      <Icon color={"white"} as={TiShoppingCart} boxSize={{ base: "30px", lg: "40px" }}></Icon>
    </Button>
  );
};

export default Cart;
