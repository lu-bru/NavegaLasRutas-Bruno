import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getProductById } from "../../data/asyncMock";
import { Flex, Spinner } from "@chakra-ui/react";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { itemId } = useParams();
  useEffect(() => {
    setIsLoading(true);
    getProductById(itemId)
      .then((prod) => {
        setProduct(prod);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false);
      });
  }, [itemId]);

  return (
    <div>
      {/* <ItemDetail {...product}/> */}
      <Flex flexDirection="column" justify={"center"} align={"center"} m={4}>
        {isLoading ? (
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="orange.500"
            size="xl"
          />
        ) : (
          <ItemDetail {...product} />
        )}
      </Flex>
    </div>
  );
};

export default ItemDetailContainer;
