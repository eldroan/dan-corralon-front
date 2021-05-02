import { useQuery } from "react-query";
import { getPedidos } from "../../api";
import { OrderListElement } from "../../components";

const Home = () => {
  const myId = 1;
  const { isLoading, error, data } = useQuery(
    ["pedidos", myId],
    async () => await getPedidos(myId)
  );

  if (isLoading) return "Cargando...";

  if (error) return "Algo salio mal: " + error.message;

  return (
    <>
      <h1>Home</h1>
      {data.map((pedido) => (
        <OrderListElement
          key={pedido.id}
          description={pedido.obra.descripcion}
          date={pedido.fechaPedido}
        />
      ))}
    </>
  );
};

export default Home;
