import { Divider, Grid, GridItem, useBreakpointValue } from "@chakra-ui/react";
import { useState, useRef } from "react";
import { useQuery } from "react-query";
import { getPedidos } from "../../api";
import { OrderList, OrderDetail, CorralonHeader } from "../../components";

const Home = () => {
  const myId = 1; //Idealmente esto se recupera con el id real del usuario
  const [selected, setSelected] = useState(null);
  const hasProductSelected = selected;
  const { isLoading, error, data } = useQuery(
    ["pedidos", myId],
    async () => await getPedidos(myId)
  );
  const smallScreen = useBreakpointValue([true, true, false]);

  if (isLoading) return "Cargando...";

  if (error) return "Algo salio mal: " + error;

  const backButtonVisible = smallScreen && hasProductSelected;
  const listVisible = !smallScreen || (smallScreen && !backButtonVisible);
  const detailVisible = !smallScreen || backButtonVisible;

  return (
    <Grid h="100vh" templateColumns="30% 1fr">
      <GridItem colSpan={2}>
        <CorralonHeader
          onMobileBackPressed={() => setSelected(null)}
          isBackVisible={backButtonVisible}
        />
      </GridItem>
      {listVisible && (
        <GridItem
          overflowX="hidden"
          overflowY="scroll"
          colSpan={smallScreen ? 2 : 1}
          border="thin"
        >
          <OrderList pedidos={data} setSelected={setSelected} />
        </GridItem>
      )}
      {detailVisible && (
        <GridItem
          overflowX="hidden"
          overflowY="scroll"
          colSpan={smallScreen ? 2 : 1}
          display={smallScreen ? undefined : "flex"} // FixMe: Esto es un hack
        >
          {listVisible && <Divider orientation="vertical" />}
          <OrderDetail
            pedido={selected}
            onMobileBackPressed={() => setSelected(null)}
          />
        </GridItem>
      )}
    </Grid>
  );
};

export default Home;
