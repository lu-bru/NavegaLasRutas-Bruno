import { Box, Flex, Heading, Spinner } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { getProducts, getProductsByCategory } from "../../data/asyncMock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
const ItemListContainer = ({ title }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { categoryId } = useParams();
  useEffect(() => {
    setIsLoading(true);
    if (categoryId) {
      getProductsByCategory(categoryId)
        .then((prod) => setData(prod))
        .catch((err) => console.log(err))
        .finally(() => setIsLoading(false));
    } else {
      getProducts()
        .then((prod) => {
          setData(prod);
        })
        .catch((err) => console.log(err))
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [categoryId]);
  return (
    <Flex flexDirection="column" justify={"center"} align={"center"} m={4}>
      <Box mb="10">
        <Heading>{title}</Heading>
      </Box>
      {isLoading ? (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="orange.500"
          size="xl"
        />
      ) : (
        <ItemList data={data} />
      )}
    </Flex>
  );
};

export default ItemListContainer;
