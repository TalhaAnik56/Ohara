import { Button, Icon } from "@chakra-ui/react";
import { TiShoppingCart } from "react-icons/ti";

const Cart = () => {
  return (
    <Button size={{ base: "sm", lg: "md" }} bg={"white"} _hover={{ bg: "white" }}>
      <Icon  as={TiShoppingCart} boxSize={{ base: "30px", lg: "40px" }}></Icon>
    </Button>
  );
};

export default Cart;
