import "../styles/globals.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const darkModeOnlyMode = extendTheme({ config });

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={darkModeOnlyMode}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
