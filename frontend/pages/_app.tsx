import "../styles/globals.css";
import { MantineProvider } from "@mantine/core";
import {NotificationsProvider} from "@mantine/notifications";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider
      theme={{ colorScheme: "dark" }}
      withGlobalStyles
      withNormalizeCSS
    >
        <Component {...pageProps} />
    </MantineProvider>
  );
}

export default MyApp;
