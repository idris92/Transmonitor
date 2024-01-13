import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import chakraTheme from "../../public/assets/theme";

export default function App({ Component, pageProps }: AppProps) {
  const theme= extendTheme(chakraTheme)
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
      )
}
