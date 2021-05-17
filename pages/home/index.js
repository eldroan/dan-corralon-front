import { Divider, Grid, GridItem, useBreakpointValue } from "@chakra-ui/react";
import { useState, useRef } from "react";
import { useQuery } from "react-query";
import { getPedidos } from "../../api";
import {
  OrderList,
  OrderDetail,
  CorralonHeader,
  Loading,
} from "../../components";

const Home = () => {
  const myId = 1; //Idealmente esto se recupera con el id real del usuario
  const [selected, setSelected] = useState(null);
  const hasProductSelected = selected;
  const { isLoading, error, data } = useQuery(
    ["pedidos", myId],
    async () => await getPedidos(myId)
  );
  const smallScreen = useBreakpointValue([true, true, false]);

  if (isLoading) return <Loading />;

  if (error) return "Algo salio mal: " + error;

  const backButtonVisible = smallScreen && hasProductSelected;
  const listVisible = !smallScreen || (smallScreen && !backButtonVisible);
  const detailVisible = !smallScreen || backButtonVisible;

  return (
    <Grid
      h="100vh"
      templateColumns={["1fr", "1fr", "30% 1fr"]}
      templateRows="auto 1fr"
    >
      <GridItem colSpan={2} rowSpan={1}>
        <CorralonHeader
          onMobileBackPressed={() => setSelected(null)}
          isBackVisible={backButtonVisible}
        />
      </GridItem>
      {listVisible && (
        <GridItem
          overflowX="hidden"
          overflowY="scroll"
          borderRightColor="gray.700"
          borderRightWidth={1}
          rowSpan={1}
          colSpan={1}
        >
          <OrderList pedidos={data} setSelected={setSelected} />
        </GridItem>
      )}
      {detailVisible && (
        <GridItem
          overflowX="hidden"
          overflowY="scroll"
          rowSpan={1}
          colSpan={1}
          display="flex"
        >
          <OrderDetail
            pedido={selected}
            isBackVisible={backButtonVisible}
            onClearSelectionPressed={() => setSelected(null)}
          />
        </GridItem>
      )}
    </Grid>
  );
};

export default Home;
