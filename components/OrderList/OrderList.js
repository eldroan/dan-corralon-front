import { UnorderedList, Box, Text } from "@chakra-ui/react";
import { OrderListElement } from "..";
/**
 * @param {{pedido: any[], setSelected: any}} props
 */
export default function OrderList({ pedidos, setSelected }) {
  return (
    <UnorderedList marginRight={4}>
      {pedidos.map((p, index) => (
        <Box key={p.id} mt={4}>
          <OrderListElement pedido={p} setSelected={setSelected} />
          {pedidos.length == index + 1 && (
            <Text fontSize="xs" textAlign="center" my={4}>
              No hay mas...
            </Text>
          )}
        </Box>
      ))}
    </UnorderedList>
  );
}
