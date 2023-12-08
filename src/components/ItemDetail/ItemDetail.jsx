import React, { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import {
  Card,
  Image,
  Stack,
  Heading,
  Text,
  CardBody,
  CardFooter,
  Button,
} from "@chakra-ui/react";

const ItemDetail = ({ img, nombre, descripcion, stock, precio }) => {
  const [quantity, setQuantity] = useState(0);
  const onAdd = (quantity) => {
    setQuantity(quantity);
    console.log("Agregaste ${quanity} productos al carrito");
  };
  return (
    <Card maxW={{ base: "xs", md: "sm", lg: "md" }} m="2">
      <CardBody>
        <Image src={img} alt={nombre}></Image>
        <Stack>
          <Heading>{nombre}</Heading>
          <Text>{descripcion}</Text>
          <Text color="orange.400" fontSize="xl">
            ${precio}
          </Text>
        </Stack>
      </CardBody>
      <CardFooter>
        {quantity > 0 ? (
          <Button variant="outline">
            <Link to={"/cart"}>Ir a mi carrito</Link>
          </Button>
        ) : (
          <ItemCount initialValue={1} stock={stock} onAdd={onAdd} />
        )}
      </CardFooter>
    </Card>
  );
};

export default ItemDetail;
