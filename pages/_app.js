import "../styles/globals.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "react-query";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const darkModeOnlyMode = extendTheme({ config });
const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={darkModeOnlyMode}>
      <QueryClientProvider client={queryClient}>
        <asasd>
          <Component {...pageProps} />
        </asasd>{" "}
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default MyApp;
