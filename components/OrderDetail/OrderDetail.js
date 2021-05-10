import { QuestionOutlineIcon } from "@chakra-ui/icons";
import { Divider, Flex, Stack, Text, Box } from "@chakra-ui/react";

/**
 * @param {{
 * pedido: {
 *  id: string,
 *  fechaPedido: string,
 *  obra: {id: string, descripcion: string},
 *  estado: {id: string, estado: string},
 *  detalle: {id: string, producto: {id: number, descripcion: string, precio: number}, cantidad: number, precio: number}
 * },
 * onMobileBackPressed: VoidFunction,
 * }} props
 */
export default function OrderDetail({ pedido, onMobileBackPressed }) {
  if (!pedido)
    return (
      <Flex flex={1} alignItems="center" justifyContent="center">
        <Stack
          direction="column"
          spacing="4"
          alignItems="center"
          px={[4, 10]}
          py={10}
          rounded="xl"
          background="gray.700"
          mx={[4, 20]}
        >
          <QuestionOutlineIcon boxSize="14" />
          <Text fontSize="xl" textAlign="center">
            No hay ningún producto seleccionado
          </Text>
          <Divider />
          <Text fontSize="medium" textAlign="center">
            Seleccione un producto de la lista para visualizar el detalle del
            mismo.
          </Text>
        </Stack>
      </Flex>
    );

  return <Box>Holi, soy un detalle de producto</Box>;
}
