import { Flex, Badge } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";
const CartWidget = () => {
  return (
    <Flex display="flex" align="center" justify={"space-around"} ml="4">
      <FaShoppingCart size={20} color="black" />
      <Badge ml="1" colorScheme="orange" variant="subtle">
        1
      </Badge>
    </Flex>
  );
};

export default CartWidget;
