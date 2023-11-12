import { Flex } from "@chakra-ui/react";
import CartWidget from "../CartWidget/CartWidget";
import Logo from "../Logo/Logo";
import NavMenuButton from "../NavMenuButton/NavMenuButton";

const NavBar = () => {
  return (
    <Flex p="4" align="center" justify="space-between" boxShadow="md" w="100vw">
      <Logo />
      <NavMenuButton />
      <CartWidget />
    </Flex>
  );
};

export default NavBar;
