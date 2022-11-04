import "../styles/globals.scss";
import { MantineProvider } from "@mantine/core";
// import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }) {
  return (
    <MantineProvider theme={{ colorScheme: "dark" }}>
      <Component {...pageProps} />
    </MantineProvider>
  );
}
export default MyApp;
