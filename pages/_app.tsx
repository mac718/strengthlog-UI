import NavBar from "@component/components/NavBar";
import "@component/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavBar username={pageProps.username} />
      <Component {...pageProps} />
    </>
  );
}
