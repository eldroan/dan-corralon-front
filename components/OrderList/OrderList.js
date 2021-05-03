import { UnorderedList } from "@chakra-ui/react";
import { OrderListElement } from "..";
/**
 * @param {{pedido: any[]}} props
 */
export default function OrderList({ pedidos }) {
  return (
    <>
      <UnorderedList>
        {pedidos.map((p) => (
          <OrderListElement
            key={p.id}
            description={p.obra.descripcion}
            date={p.fechaPedido}
          />
        ))}
      </UnorderedList>
    </>
  );
}
