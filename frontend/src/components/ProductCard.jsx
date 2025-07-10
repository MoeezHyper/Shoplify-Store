import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import {
  Box,
  Dialog,
  Heading,
  HStack,
  Image,
  Text,
  Button,
  CloseButton,
  Portal,
  VStack,
  Input,
} from "@chakra-ui/react";
import { useColorModeValue } from "./ui/color-mode";
import { useProductStore } from "@/store/Product";
import { toaster } from "@/components/ui/toaster";
import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const { deleteProduct, updateProduct, favouriteProduct } = useProductStore();

  const [updatedProduct, setUpdatedProduct] = useState(product);

  const textColor = useColorModeValue("gray.600", "gray.200");
  const priceColor = useColorModeValue("black", "#C2C2C2");
  const bg = useColorModeValue("white", "gray.800");

  const { toggleFavorite } = useProductStore();

  const handleToggleFavorite = async (id) => {
    const { success, message } = await toggleFavorite(id);

    toaster.create({
      title: success ? "Success" : "Error",
      description: success
        ? "Favorite status updated"
        : message || "Failed to toggle favorite",
      type: success ? "success" : "error",
      duration: 4000,
      closable: true,
    });
  };

  const handleDeleteProduct = async (pid) => {
    const { success, message } = await deleteProduct(pid);
  };

  const handleUpdateProduct = async (pid, updatedProduct) => {
    const { success, message } = await updateProduct(pid, updatedProduct);
    toaster.create({
      title: success ? "Success" : "Error",
      description: success ? "Product updated successfully" : "error",
      type: success ? "success" : "error",
      duration: 5000,
      closable: true,
    });
  };

  return (
    <Box
      w="100%"
      maxW="100%"
      shadow="lg"
      rounded="lg"
      overflow="hidden"
      transition="all 0.3s"
      _hover={{ transform: "translateY(-5px)", shadow: "xl" }}
      bg={bg}
    >
      <Image
        src={product.image}
        alt={product.name}
        h={48}
        w="full"
        objectFit="cover"
      />

      <Box p={4}>
        <Heading as="h3" size="md" mb={2}>
          {product.name}
        </Heading>

        <Text fontWeight="bold" fontSize="xl" color={priceColor} mb={4}>
          ${product.price}
        </Text>

        <HStack justifyContent="space-between">
          <Box
            onClick={() => handleToggleFavorite(product._id)}
            cursor="pointer"
            display="inline-flex"
            alignItems="center"
            justifyContent="center"
            p={2}
            borderRadius="full"
            _hover={{ transform: "scale(1.2)" }}
            _active={{ transform: "scale(1.4)" }}
            transition="transform 0.2s"
          >
            {product.favorite ? (
              <FaHeart color="red" size={20} />
            ) : (
              <FaRegHeart color="gray" size={20} />
            )}
          </Box>
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <Box
                p={2}
                borderRadius="md"
                _hover={{ bg: "blue.500", color: "white" }}
                cursor="pointer"
              >
                <FaEdit size={25} />
              </Box>
            </Dialog.Trigger>

            <Portal>
              <Dialog.Backdrop />
              <Dialog.Positioner>
                <Dialog.Content>
                  <Dialog.Header>
                    <Dialog.Title>Update Product</Dialog.Title>
                  </Dialog.Header>
                  <Dialog.Body>
                    <VStack spacing={4}>
                      <Input
                        placeholder="Product Name"
                        name="name"
                        value={updatedProduct.name}
                        onChange={(e) =>
                          setUpdatedProduct({
                            ...updatedProduct,
                            name: e.target.value,
                          })
                        }
                      />
                      <Input
                        placeholder="Price"
                        name="price"
                        type="number"
                        value={updatedProduct.price}
                        onChange={(e) =>
                          setUpdatedProduct({
                            ...updatedProduct,
                            price: e.target.value,
                          })
                        }
                      />
                      <Input
                        placeholder="Image URL"
                        name="image"
                        value={updatedProduct.image}
                        onChange={(e) =>
                          setUpdatedProduct({
                            ...updatedProduct,
                            image: e.target.value,
                          })
                        }
                      />
                    </VStack>
                  </Dialog.Body>
                  <Dialog.Footer>
                    <Dialog.ActionTrigger asChild>
                      <Button
                        onClick={() =>
                          handleUpdateProduct(product._id, updatedProduct)
                        }
                      >
                        Update
                      </Button>
                    </Dialog.ActionTrigger>
                    <Dialog.ActionTrigger asChild>
                      <Button variant="outline">Cancel</Button>
                    </Dialog.ActionTrigger>
                  </Dialog.Footer>
                  <Dialog.CloseTrigger asChild>
                    <CloseButton size="sm" />
                  </Dialog.CloseTrigger>
                </Dialog.Content>
              </Dialog.Positioner>
            </Portal>
          </Dialog.Root>

          <Dialog.Root>
            <Dialog.Trigger asChild>
              <Box
                borderRadius="md"
                _hover={{ bg: "red.500", color: "white" }}
                cursor="pointer"
                p={2}
              >
                <MdDeleteForever size={30} />
              </Box>
            </Dialog.Trigger>

            <Portal>
              <Dialog.Backdrop />
              <Dialog.Positioner>
                <Dialog.Content>
                  <Dialog.Header>
                    <Dialog.Title>Confirm Delete</Dialog.Title>
                  </Dialog.Header>
                  <Dialog.Body>
                    Are you sure you want to delete this product?
                  </Dialog.Body>
                  <Dialog.Footer>
                    <Dialog.ActionTrigger asChild>
                      <Button onClick={() => handleDeleteProduct(product._id)}>
                        Yes
                      </Button>
                    </Dialog.ActionTrigger>
                    <Dialog.ActionTrigger asChild>
                      <Button variant="outline">Cancel</Button>
                    </Dialog.ActionTrigger>
                  </Dialog.Footer>
                  <Dialog.CloseTrigger asChild>
                    <CloseButton size="sm" />
                  </Dialog.CloseTrigger>
                </Dialog.Content>
              </Dialog.Positioner>
            </Portal>
          </Dialog.Root>
        </HStack>
      </Box>
    </Box>
  );
};

export default ProductCard;
