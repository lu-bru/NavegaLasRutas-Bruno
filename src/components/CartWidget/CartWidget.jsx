import { Box, Badge } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";
const CartWidget = () => {
  return (
    <Box display="flex" align="center" justify={"space-around"}>
      <FaShoppingCart size={20} color="black" />
      <Badge ml="1" colorScheme="orange" variant="subtle">
        1
      </Badge>
    </Box>
  );
};

export default CartWidget;
