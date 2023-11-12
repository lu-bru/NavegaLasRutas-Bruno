import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
const NavMenuButton = () => {
  return (
    <Menu>
      <MenuButton as={Button} variant="outline" rightIcon={<ChevronDownIcon />}>
        Categorías
      </MenuButton>
      <MenuList>
        <MenuItem>Tropicales</MenuItem>
        <MenuItem>De Estación</MenuItem>
        <MenuItem>Cítricas</MenuItem>
        <MenuItem>Secas</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default NavMenuButton;
